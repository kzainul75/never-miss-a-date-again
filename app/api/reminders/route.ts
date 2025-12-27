import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/reminders/send
 * Sends reminders for upcoming important dates
 * Called by a cron job or scheduled task
 * Supports email and SMS reminders
 */
export async function POST(request: NextRequest) {
  try {
    const { reminderType = 'email' } = await request.json()

    // Get all important dates that need reminders
    const today = new Date()
    const upcomingDates = await prisma.importantDate.findMany({
      where: {
        reminderSent: false,
        date: {
          gte: today,
          lte: new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000), // Next 30 days
        },
      },
      include: {
        user: true,
        suggestions: {
          include: {
            gift: true,
          },
        },
      },
    })

    const reminders = []

    for (const importantDate of upcomingDates) {
      const daysUntilEvent = Math.ceil(
        (importantDate.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      )

      // Check if reminder should be sent based on user's reminder days preference
      if (daysUntilEvent === importantDate.reminderDays) {
        // Create reminder record
        const reminder = await prisma.reminder.create({
          data: {
            userId: importantDate.userId,
            importantDateId: importantDate.id,
            reminderType,
            daysBeforeEvent: daysUntilEvent,
          },
        })

        // Mark as reminder sent
        await prisma.importantDate.update({
          where: { id: importantDate.id },
          data: { reminderSent: true },
        })

        reminders.push({
          reminder,
          user: importantDate.user,
          importantDate,
          suggestions: importantDate.suggestions,
        })

        // In production, send actual email/SMS here
        console.log(`Reminder sent to ${importantDate.user.email} for ${importantDate.title}`)
      }
    }

    return NextResponse.json(
      {
        message: `${reminders.length} reminders sent`,
        reminders,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Reminder sending error:', error)
    return NextResponse.json(
      { error: 'An error occurred while sending reminders' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/reminders
 * Retrieves reminders for a user
 */
export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    // Fetch user's reminders
    const reminders = await prisma.reminder.findMany({
      where: { userId },
      include: {
        importantDate: true,
      },
      orderBy: { sentAt: 'desc' },
    })

    return NextResponse.json(
      {
        reminders,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Reminder fetch error:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching reminders' },
      { status: 500 }
    )
  }
}

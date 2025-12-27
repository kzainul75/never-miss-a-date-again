import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/dates
 * Creates a new important date for a user
 */
export async function POST(request: NextRequest) {
  try {
    const { userId, title, date, type, reminderDays, description, memberId } = await request.json()

    if (!userId || !title || !date || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const newDate = await prisma.importantDate.create({
      data: {
        userId,
        title,
        date: new Date(date),
        type,
        reminderDays: reminderDays || 7,
        description,
        memberId,
      },
    })

    return NextResponse.json(
      { message: 'Date added successfully', date: newDate },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error adding date:', error)
    return NextResponse.json(
      { error: 'An error occurred while adding the date' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/dates
 * Retrieves all important dates for a user
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

    const dates = await prisma.importantDate.findMany({
      where: { userId },
      orderBy: { date: 'asc' },
    })

    return NextResponse.json({ dates }, { status: 200 })
  } catch (error) {
    console.error('Error fetching dates:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching dates' },
      { status: 500 }
    )
  }
}

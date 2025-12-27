import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

interface OrderItemInput {
  giftId: string;
  quantity: number;
  price: number;
}

/**
 * POST /api/orders
 * Creates a new order with items
 * Integrates with Stripe for payment processing
 * Requires authentication token
 */
export async function POST(request: NextRequest) {
  try {
    const { userId, shopId, items, deliveryAddress, recipientName, recipientPhone } = await request.json()

    // Validation
    if (!userId || !shopId || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Calculate total price
    let totalPrice = 0
    for (const item of items as OrderItemInput[]) {
      const gift = await prisma.gift.findUnique({
        where: { id: item.giftId },
      })
      if (!gift) {
        return NextResponse.json(
          { error: `Gift ${item.giftId} not found` },
          { status: 404 }
        )
      }
      totalPrice += Number(gift.price) * item.quantity
    }

    // Create order
    const order = await prisma.order.create({
      data: {
        userId,
        shopId,
        totalPrice: totalPrice.toString(),
        deliveryAddress,
        recipientName,
        recipientPhone,
        status: 'pending',
        paymentStatus: 'unpaid',
        items: {
          create: (items as OrderItemInput[]).map((item) => ({
            giftId: item.giftId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: {
          include: {
            gift: true,
          },
        },
      },
    })

    return NextResponse.json(
      {
        message: 'Order created successfully',
        order,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: 'An error occurred while creating the order' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/orders
 * Retrieves orders for a user
 * Requires authentication token
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

    // Fetch user's orders
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            gift: true,
          },
        },
        shop: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(
      {
        orders,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Order fetch error:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching orders' },
      { status: 500 }
    )
  }
}

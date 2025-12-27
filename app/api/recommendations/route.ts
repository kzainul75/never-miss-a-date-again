import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

interface GiftWithShop {
  id: string;
  name: string;
  price: number | string | { toString(): string };
  rating: number;
  isTrending: boolean;
  occasion: string;
  shop: unknown;
}

/**
 * POST /api/recommendations
 * Generates AI-powered gift recommendations based on occasion and recipient
 * Uses relevance scoring to rank suggestions
 */
export async function POST(request: NextRequest) {
  try {
    const { importantDateId, occasion /* , recipientAge */ } = await request.json()

    if (!importantDateId || !occasion) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get all gifts that match the occasion
    const matchingGifts = await prisma.gift.findMany({
      where: {
        occasion: {
          in: [occasion, 'all'],
        },
      },
      include: {
        shop: true,
      },
    })

    // Score and rank gifts based on relevance
    const scoredGifts = (matchingGifts as unknown as GiftWithShop[]).map((gift) => {
      let score = 0

      // Base score for matching occasion
      if (gift.occasion === occasion) {
        score += 50
      } else {
        score += 25
      }

      // Trending bonus
      if (gift.isTrending) {
        score += 20
      }

      // Rating bonus
      score += gift.rating * 2

      // Price range bonus (prefer mid-range gifts)
      const price = Number(gift.price)
      if (price >= 30 && price <= 100) {
        score += 15
      }

      return {
        ...gift,
        relevanceScore: Math.min(100, score),
      }
    })

    // Sort by relevance score
    const recommendations = scoredGifts
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 5) // Top 5 recommendations

    // Save recommendations to database
    for (const rec of recommendations) {
      await prisma.giftSuggestion.upsert({
        where: {
          importantDateId_giftId: {
            importantDateId,
            giftId: rec.id,
          },
        },
        update: {
          relevanceScore: rec.relevanceScore,
        },
        create: {
          importantDateId,
          giftId: rec.id,
          reason: `Perfect ${occasion} gift - ${rec.isTrending ? 'Trending' : 'Popular'} with ${rec.rating}★ rating`,
          relevanceScore: rec.relevanceScore,
        },
      })
    }

    return NextResponse.json(
      {
        message: 'Recommendations generated successfully',
        recommendations: recommendations.map(r => ({
          id: r.id,
          name: r.name,
          price: r.price,
          rating: r.rating,
          relevanceScore: r.relevanceScore,
          reason: `Perfect ${occasion} gift - ${r.isTrending ? 'Trending' : 'Popular'} with ${r.rating}★ rating`,
        })),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Recommendation error:', error)
    return NextResponse.json(
      { error: 'An error occurred while generating recommendations' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/recommendations
 * Retrieves recommendations for a specific important date
 */
export async function GET(request: NextRequest) {
  try {
    const importantDateId = request.nextUrl.searchParams.get('importantDateId')

    if (!importantDateId) {
      return NextResponse.json(
        { error: 'Missing importantDateId parameter' },
        { status: 400 }
      )
    }

    // Fetch recommendations
    const recommendations = await prisma.giftSuggestion.findMany({
      where: { importantDateId },
      include: {
        gift: {
          include: {
            shop: true,
          },
        },
      },
      orderBy: { relevanceScore: 'desc' },
    })

    return NextResponse.json(
      {
        recommendations,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Recommendation fetch error:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching recommendations' },
      { status: 500 }
    )
  }
}

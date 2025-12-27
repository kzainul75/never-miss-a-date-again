import { NextRequest, NextResponse } from 'next/server';
import { shopifyFetch } from '@/lib/shopify';
import { CREATE_CART } from '@/lib/shopify-queries';

/**
 * POST /api/shopify/checkout
 * Creates a Shopify cart for a specific variant and returns the checkout URL
 */
export async function POST(request: NextRequest) {
  try {
    const { variantId } = await request.json();

    if (!variantId) {
      return NextResponse.json({ error: 'Missing variantId' }, { status: 400 });
    }

    const variables = {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity: 1,
          },
        ],
      },
    };

    const data = await shopifyFetch(CREATE_CART, variables);

    if (!data || !data.data || !data.data.cartCreate) {
      throw new Error('Failed to create Shopify cart');
    }

    const { checkoutUrl } = data.data.cartCreate.cart;
    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Shopify checkout error:', error);
    return NextResponse.json({ error: 'Failed to initiate checkout' }, { status: 500 });
  }
}

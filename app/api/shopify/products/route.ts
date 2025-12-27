import { NextResponse } from 'next/server';
import { shopifyFetch } from '@/lib/shopify';
import { GET_PRODUCTS } from '@/lib/shopify-queries';

/**
 * GET /api/shopify/products
 * Fetches products from Shopify Storefront API
 */
export async function GET() {
  try {
    const data = await shopifyFetch(GET_PRODUCTS, { first: 20 });
    
    if (!data || !data.data) {
      return NextResponse.json({ products: [] });
    }

    const products = data.data.products.edges.map((edge: any) => edge.node);
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Shopify API error:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

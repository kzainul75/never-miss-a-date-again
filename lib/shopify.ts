/**
 * Shopify Storefront API Utility
 * 
 * This file provides a utility function to fetch data from the Shopify Storefront API
 * using GraphQL queries.
 */

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

/**
 * Fetches data from the Shopify Storefront API
 * @param query - The GraphQL query string
 * @param variables - Optional variables for the GraphQL query
 * @returns The JSON response from Shopify
 */
export async function shopifyFetch(query: string, variables = {}) {
  if (!domain || !storefrontAccessToken) {
    console.warn('Shopify credentials missing. Falling back to mock data.');
    return null;
  }

  try {
    const response = await fetch(
      `https://${domain}/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    return null;
  }
}

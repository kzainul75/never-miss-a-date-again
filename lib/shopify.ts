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
    console.warn('Shopify credentials missing.');
    return null;
  }

  try {
    console.log(`Fetching from Shopify: https://${domain}/api/2024-01/graphql.json`);
    
    const response = await fetch(
      `https://${domain}/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        },
        body: JSON.stringify({ query, variables }),
        cache: 'no-store' // Disable caching for debugging
      }
    );

    const json = await response.json();

    if (!response.ok) {
      console.error('Shopify API error response:', json);
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    if (json.errors) {
      console.error('Shopify GraphQL errors:', json.errors);
    }

    return json;
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    return null;
  }
}

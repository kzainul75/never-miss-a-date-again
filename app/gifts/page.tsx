'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Gift, Heart, Search, Star, Sparkles, ShoppingCart } from 'lucide-react'

/**
 * Gift Catalog Page Component
 * Integrated with Shopify Storefront API
 * Falls back to mock data if Shopify is not configured
 */
export default function GiftsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [shopifyProducts, setShopifyProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const categories = [
    { id: 'all', label: 'All Gifts' },
    { id: 'bouquet', label: 'Bouquets' },
    { id: 'hamper', label: 'Hampers' },
    { id: 'plant', label: 'Plants' },
    { id: 'gift_set', label: 'Gift Sets' },
  ]

  // Mock data fallback
  const mockGifts = [
    {
      id: '1',
      name: 'Romantic Rose Bouquet',
      category: 'bouquet',
      price: 45,
      rating: 4.8,
      reviews: 245,
      trending: true,
      color: 'from-rose-200 to-pink-200',
      textColor: 'text-rose-600',
    },
    {
      id: '2',
      name: 'Luxury Gift Hamper',
      category: 'hamper',
      price: 89,
      rating: 4.9,
      reviews: 189,
      trending: true,
      color: 'from-purple-200 to-pink-200',
      textColor: 'text-purple-600',
    },
    {
      id: '3',
      name: 'Orchid Plant',
      category: 'plant',
      price: 35,
      rating: 4.7,
      reviews: 156,
      trending: false,
      color: 'from-blue-200 to-cyan-200',
      textColor: 'text-blue-600',
    },
    {
      id: '4',
      name: 'Chocolate & Flowers',
      category: 'gift_set',
      price: 55,
      rating: 4.9,
      reviews: 312,
      trending: true,
      color: 'from-amber-200 to-orange-200',
      textColor: 'text-amber-600',
    },
  ]

  // Fetch products from Shopify if configured
  useEffect(() => {
    async function fetchShopifyProducts() {
      const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
      const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

      if (!domain || !token) return;

      setLoading(true);
      try {
        const response = await fetch('/api/shopify/products');
        const data = await response.json();
        if (data.products) {
          setShopifyProducts(data.products);
        }
      } catch (error) {
        console.error('Error fetching Shopify products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchShopifyProducts();
  }, []);

  // Combine Shopify products with mock data if Shopify is not used
  const displayGifts = shopifyProducts.length > 0 
    ? shopifyProducts.map(p => ({
        id: p.id,
        name: p.title,
        category: 'all', // Shopify categories can be mapped from tags/collections
        price: parseFloat(p.priceRange.minVariantPrice.amount),
        rating: 5.0, // Shopify doesn't have ratings by default
        reviews: 0,
        trending: false,
        image: p.images.edges[0]?.node.url,
        color: 'from-rose-100 to-pink-100',
        textColor: 'text-rose-600',
        checkoutUrl: p.checkoutUrl
      }))
    : mockGifts;

  const filteredGifts = displayGifts.filter(gift => {
    const matchesSearch = gift.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || gift.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Never Miss a Date Again</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-rose-600 transition">Dashboard</Link>
            <Link href="/shops" className="text-sm text-gray-600 hover:text-rose-600 transition">Shops</Link>
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="border-rose-200 text-rose-600 hover:bg-rose-50">Log In</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gift Catalog</h1>
          <p className="text-gray-600">
            {shopifyProducts.length > 0 
              ? 'Discover beautiful gifts directly from our Shopify store' 
              : 'Discover trending gifts and bouquets for every occasion'}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search gifts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-200"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category.id
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-rose-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products from Shopify...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGifts.map(gift => (
              <Card key={gift.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition hover:scale-105 duration-300">
                <div className={`h-48 bg-gradient-to-br ${gift.color} flex items-center justify-center relative`}>
                  {gift.image ? (
                    <img src={gift.image} alt={gift.name} className="w-full h-full object-cover" />
                  ) : (
                    <Gift className={`w-16 h-16 ${gift.textColor} opacity-50`} />
                  )}
                  {gift.trending && (
                    <Badge className="absolute top-3 right-3 bg-rose-500 text-white">Trending</Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{gift.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(gift.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({gift.reviews})</span>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-rose-600">${gift.price}</span>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                        <Heart className="w-5 h-5 text-gray-400 hover:text-pink-600" />
                      </button>
                      <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredGifts.length === 0 && (
          <div className="text-center py-12">
            <Gift className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No gifts found matching your search</p>
          </div>
        )}
      </main>
    </div>
  )
}

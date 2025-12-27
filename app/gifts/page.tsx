'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Gift, Heart, Search, Filter, Star } from 'lucide-react'

export default function GiftsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Gifts' },
    { id: 'bouquet', label: 'Bouquets' },
    { id: 'hamper', label: 'Hampers' },
    { id: 'plant', label: 'Plants' },
    { id: 'gift_set', label: 'Gift Sets' },
  ]

  const occasions = [
    { id: 'birthday', label: 'Birthday' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'congratulations', label: 'Congratulations' },
    { id: 'sympathy', label: 'Sympathy' },
  ]

  const gifts = [
    {
      id: 1,
      name: 'Romantic Rose Bouquet',
      category: 'bouquet',
      occasion: 'anniversary',
      price: 45,
      rating: 4.8,
      reviews: 245,
      trending: true,
      image: 'rose',
      color: 'from-rose-200 to-pink-200',
      textColor: 'text-rose-600',
    },
    {
      id: 2,
      name: 'Luxury Gift Hamper',
      category: 'hamper',
      occasion: 'birthday',
      price: 89,
      rating: 4.9,
      reviews: 189,
      trending: true,
      image: 'hamper',
      color: 'from-purple-200 to-pink-200',
      textColor: 'text-purple-600',
    },
    {
      id: 3,
      name: 'Orchid Plant',
      category: 'plant',
      occasion: 'congratulations',
      price: 35,
      rating: 4.7,
      reviews: 156,
      trending: false,
      image: 'orchid',
      color: 'from-blue-200 to-cyan-200',
      textColor: 'text-blue-600',
    },
    {
      id: 4,
      name: 'Chocolate & Flowers',
      category: 'gift_set',
      occasion: 'birthday',
      price: 55,
      rating: 4.9,
      reviews: 312,
      trending: true,
      image: 'chocolate',
      color: 'from-amber-200 to-orange-200',
      textColor: 'text-amber-600',
    },
    {
      id: 5,
      name: 'Sunflower Delight',
      category: 'bouquet',
      occasion: 'congratulations',
      price: 38,
      rating: 4.6,
      reviews: 98,
      trending: false,
      image: 'sunflower',
      color: 'from-yellow-200 to-orange-200',
      textColor: 'text-yellow-600',
    },
    {
      id: 6,
      name: 'Premium Spa Hamper',
      category: 'hamper',
      occasion: 'birthday',
      price: 75,
      rating: 4.8,
      reviews: 203,
      trending: true,
      image: 'spa',
      color: 'from-green-200 to-teal-200',
      textColor: 'text-green-600',
    },
    {
      id: 7,
      name: 'Succulent Garden',
      category: 'plant',
      occasion: 'housewarming',
      price: 42,
      rating: 4.7,
      reviews: 167,
      trending: false,
      image: 'succulent',
      color: 'from-lime-200 to-green-200',
      textColor: 'text-lime-600',
    },
    {
      id: 8,
      name: 'Elegant Lily Bouquet',
      category: 'bouquet',
      occasion: 'sympathy',
      price: 50,
      rating: 4.9,
      reviews: 234,
      trending: false,
      image: 'lily',
      color: 'from-pink-200 to-rose-200',
      textColor: 'text-pink-600',
    },
  ]

  const filteredGifts = gifts.filter(gift => {
    const matchesSearch = gift.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || gift.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gift Catalog</h1>
          <p className="text-gray-600">Discover trending gifts and bouquets for every occasion</p>
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

        {/* Gifts Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {filteredGifts.map(gift => (
            <Card key={gift.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition hover:scale-105 duration-300">
              <div className={`h-48 bg-gradient-to-br ${gift.color} flex items-center justify-center relative`}>
                <Gift className={`w-16 h-16 ${gift.textColor} opacity-50`} />
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
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredGifts.length === 0 && (
          <div className="text-center py-12">
            <Gift className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No gifts found matching your search</p>
          </div>
        )}
      </main>
    </div>
  )
}

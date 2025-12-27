'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Globe, Clock, Star, Search } from 'lucide-react'

export default function ShopsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('rating')

  const shops = [
    {
      id: 1,
      name: 'Rose Garden Florist',
      description: 'Premium flowers and custom arrangements',
      address: '123 Flower Street, Downtown',
      phone: '+1 (555) 123-4567',
      website: 'www.rosegarden.com',
      hours: '9:00 AM - 6:00 PM',
      rating: 4.8,
      reviews: 245,
      distance: 0.5,
      specialties: ['Bouquets', 'Custom Arrangements', 'Wedding Flowers'],
      image: 'rose',
      color: 'from-rose-300 to-pink-300',
    },
    {
      id: 2,
      name: 'Gift Paradise',
      description: 'Curated gifts and luxury hampers',
      address: '456 Shopping Mall, Central',
      phone: '+1 (555) 234-5678',
      website: 'www.giftparadise.com',
      hours: '10:00 AM - 8:00 PM',
      rating: 4.9,
      reviews: 189,
      distance: 1.2,
      specialties: ['Gift Hampers', 'Luxury Gifts', 'Corporate Gifts'],
      image: 'gift',
      color: 'from-purple-300 to-pink-300',
    },
    {
      id: 3,
      name: 'Bloom & Botanicals',
      description: 'Plants, flowers, and garden gifts',
      address: '789 Garden Avenue, North',
      phone: '+1 (555) 345-6789',
      website: 'www.bloombotanicals.com',
      hours: '8:00 AM - 7:00 PM',
      rating: 4.7,
      reviews: 156,
      distance: 2.1,
      specialties: ['Plants', 'Flowers', 'Garden Gifts'],
      image: 'botanical',
      color: 'from-green-300 to-teal-300',
    },
    {
      id: 4,
      name: 'Elegant Florals',
      description: 'Sophisticated floral designs for all occasions',
      address: '321 Elegance Lane, Uptown',
      phone: '+1 (555) 456-7890',
      website: 'www.elegantflorals.com',
      hours: '9:30 AM - 5:30 PM',
      rating: 4.8,
      reviews: 203,
      distance: 1.8,
      specialties: ['Wedding Flowers', 'Event Arrangements', 'Luxury Bouquets'],
      image: 'elegant',
      color: 'from-pink-300 to-rose-300',
    },
    {
      id: 5,
      name: 'Sweet Surprises',
      description: 'Gifts, chocolates, and flower combinations',
      address: '654 Joy Street, Midtown',
      phone: '+1 (555) 567-8901',
      website: 'www.sweetsurprises.com',
      hours: '10:00 AM - 9:00 PM',
      rating: 4.6,
      reviews: 178,
      distance: 0.8,
      specialties: ['Chocolate Gifts', 'Flower Combos', 'Surprise Boxes'],
      image: 'sweet',
      color: 'from-amber-300 to-orange-300',
    },
    {
      id: 6,
      name: 'Nature\'s Gift',
      description: 'Eco-friendly gifts and sustainable flowers',
      address: '987 Green Road, East',
      phone: '+1 (555) 678-9012',
      website: 'www.naturesgift.com',
      hours: '8:30 AM - 6:00 PM',
      rating: 4.7,
      reviews: 142,
      distance: 3.2,
      specialties: ['Eco-Friendly Gifts', 'Sustainable Flowers', 'Organic Plants'],
      image: 'nature',
      color: 'from-lime-300 to-green-300',
    },
  ]

  const filteredShops = shops
    .filter(shop => 
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'distance') return a.distance - b.distance
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Florists & Gift Shops</h1>
          <p className="text-gray-600">Find the best florists and gift shops near you</p>
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
              placeholder="Search shops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-200"
            />
          </div>

          {/* Sort Options */}
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('rating')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                sortBy === 'rating'
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-rose-300'
              }`}
            >
              Top Rated
            </button>
            <button
              onClick={() => setSortBy('distance')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                sortBy === 'distance'
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-rose-300'
              }`}
            >
              Nearest
            </button>
          </div>
        </div>

        {/* Shops List */}
        <div className="space-y-6">
          {filteredShops.map(shop => (
            <Card key={shop.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col md:flex-row">
                {/* Shop Image */}
                <div className={`h-48 md:h-auto md:w-48 bg-gradient-to-br ${shop.color} flex items-center justify-center flex-shrink-0`}>
                  <MapPin className="w-16 h-16 text-white opacity-50" />
                </div>

                {/* Shop Info */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{shop.name}</h3>
                        <p className="text-gray-600 mt-1">{shop.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-gray-900">{shop.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">({shop.reviews} reviews)</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-rose-600" />
                        <span>{shop.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-rose-600" />
                        <span>{shop.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-rose-600" />
                        <span>{shop.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-rose-600" />
                        <a href={`https://${shop.website}`} target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                          {shop.website}
                        </a>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {shop.specialties.map(specialty => (
                        <Badge key={specialty} className="bg-rose-100 text-rose-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
                      View Shop
                    </Button>
                    <Button variant="outline" className="flex-1 border-rose-200 text-rose-600 hover:bg-rose-50">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No shops found matching your search</p>
          </div>
        )}
      </main>
    </div>
  )
}

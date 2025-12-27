'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Gift, Heart, Plus, Clock, Users, TrendingUp, Settings } from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dates')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Manage your dates and discover gifts</p>
          </div>
          <Button className="bg-rose-600 hover:bg-rose-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Important Date
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming Dates</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              </div>
              <Calendar className="w-10 h-10 text-rose-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Favorite Gifts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <Heart className="w-10 h-10 text-pink-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Family Members</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <Users className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Orders</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
              </div>
              <Gift className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="dates" className="data-[state=active]:bg-rose-50">
              <Calendar className="w-4 h-4 mr-2" />
              Important Dates
            </TabsTrigger>
            <TabsTrigger value="gifts" className="data-[state=active]:bg-rose-50">
              <Gift className="w-4 h-4 mr-2" />
              Trending Gifts
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-rose-50">
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="shops" className="data-[state=active]:bg-rose-50">
              <TrendingUp className="w-4 h-4 mr-2" />
              Shops
            </TabsTrigger>
          </TabsList>

          {/* Important Dates Tab */}
          <TabsContent value="dates" className="space-y-4">
            <div className="grid gap-4">
              {/* Date Item 1 */}
              <Card className="p-6 border-0 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">Mom's Birthday</h3>
                      <Badge className="bg-rose-100 text-rose-700">In 5 days</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">January 2, 2026</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👤 Mother</span>
                      <span>🔔 Reminder: 7 days before</span>
                    </div>
                  </div>
                  <Button className="bg-rose-600 hover:bg-rose-700">
                    Find Gift
                  </Button>
                </div>
              </Card>

              {/* Date Item 2 */}
              <Card className="p-6 border-0 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">Anniversary</h3>
                      <Badge className="bg-pink-100 text-pink-700">In 12 days</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">January 9, 2026</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👥 Partner</span>
                      <span>🔔 Reminder: 7 days before</span>
                    </div>
                  </div>
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    Find Gift
                  </Button>
                </div>
              </Card>

              {/* Date Item 3 */}
              <Card className="p-6 border-0 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">Sister's Birthday</h3>
                      <Badge className="bg-purple-100 text-purple-700">In 18 days</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">January 15, 2026</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👤 Sister</span>
                      <span>🔔 Reminder: 7 days before</span>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Find Gift
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Trending Gifts Tab */}
          <TabsContent value="gifts" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Gift 1 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <Gift className="w-12 h-12 text-rose-600 opacity-50" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Romantic Rose Bouquet</h3>
                    <button className="text-pink-600 hover:text-pink-700">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">12 premium red roses</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-rose-600">$45</span>
                    <Button size="sm" className="bg-rose-600 hover:bg-rose-700">Add</Button>
                  </div>
                </div>
              </Card>

              {/* Gift 2 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <Gift className="w-12 h-12 text-purple-600 opacity-50" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Luxury Gift Hamper</h3>
                    <button className="text-pink-600 hover:text-pink-700">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Premium curated items</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">$89</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Add</Button>
                  </div>
                </div>
              </Card>

              {/* Gift 3 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
                  <Gift className="w-12 h-12 text-blue-600 opacity-50" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Orchid Plant</h3>
                    <button className="text-pink-600 hover:text-pink-700">
                      <Heart className="w-5 h-5 fill-pink-600" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Beautiful potted orchid</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">$35</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Add</Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Favorite 1 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <Gift className="w-12 h-12 text-amber-600 opacity-50" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Chocolate & Flowers</h3>
                    <button className="text-pink-600 hover:text-pink-700">
                      <Heart className="w-5 h-5 fill-pink-600" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Premium chocolates with flowers</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-600">$55</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Order</Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Shops Tab */}
          <TabsContent value="shops" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Shop 1 */}
              <Card className="p-6 border-0 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rose Garden Florist</h3>
                <p className="text-gray-600 text-sm mb-4">Premium flowers and custom arrangements</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>📍 123 Flower Street, Downtown</p>
                  <p>⭐ 4.8 (245 reviews)</p>
                  <p>🕐 9:00 AM - 6:00 PM</p>
                </div>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">View Shop</Button>
              </Card>

              {/* Shop 2 */}
              <Card className="p-6 border-0 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gift Paradise</h3>
                <p className="text-gray-600 text-sm mb-4">Curated gifts and luxury hampers</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>📍 456 Shopping Mall, Central</p>
                  <p>⭐ 4.9 (189 reviews)</p>
                  <p>🕐 10:00 AM - 8:00 PM</p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">View Shop</Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, Users, Gift, Store, TrendingUp, Settings, ExternalLink, ShoppingBag } from 'lucide-react'

/**
 * Admin Dashboard Page
 * Allows administrators to manage gifts, shops, and view analytics
 * Integrated with Shopify for product management
 */
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage gifts, shops, and view analytics</p>
          </div>
          <div className="flex gap-3">
            {shopifyDomain && (
              <a 
                href={`https://${shopifyDomain}/admin`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shopify Admin
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>
            )}
            <Button className="bg-rose-600 hover:bg-rose-700">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
              </div>
              <Users className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Gifts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
              </div>
              <Gift className="w-10 h-10 text-rose-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Shops</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">42</p>
              </div>
              <Store className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">567</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-rose-50">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="gifts" className="data-[state=active]:bg-rose-50">
              <Gift className="w-4 h-4 mr-2" />
              Gifts
            </TabsTrigger>
            <TabsTrigger value="shops" className="data-[state=active]:bg-rose-50">
              <Store className="w-4 h-4 mr-2" />
              Shops
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-rose-50">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card className="p-6 border-0 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Order #1001</p>
                      <p className="text-sm text-gray-600">Rose Bouquet</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Delivered</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Order #1000</p>
                      <p className="text-sm text-gray-600">Gift Hamper</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Shipped</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Order #999</p>
                      <p className="text-sm text-gray-600">Orchid Plant</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
                  </div>
                </div>
              </Card>

              {/* Top Gifts */}
              <Card className="p-6 border-0 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Gifts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Rose Bouquet</p>
                      <p className="text-sm text-gray-600">245 sales</p>
                    </div>
                    <span className="text-lg font-bold text-rose-600">$45</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Gift Hamper</p>
                      <p className="text-sm text-gray-600">189 sales</p>
                    </div>
                    <span className="text-lg font-bold text-rose-600">$89</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Chocolate & Flowers</p>
                      <p className="text-sm text-gray-600">156 sales</p>
                    </div>
                    <span className="text-lg font-bold text-rose-600">$55</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Gifts Tab */}
          <TabsContent value="gifts" className="space-y-6">
            <Card className="p-6 border-0 shadow-sm bg-rose-50 border-rose-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <ShoppingBag className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Manage Products in Shopify</h3>
                  <p className="text-gray-600 text-sm">
                    Your gift catalog is now powered by Shopify. Use the Shopify Admin to add, edit, or remove products.
                  </p>
                </div>
                <div className="ml-auto">
                  {shopifyDomain && (
                    <a 
                      href={`https://${shopifyDomain}/admin/products`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-rose-600 hover:bg-rose-700">
                        Open Shopify Products
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>

            {/* Gift List */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Local Catalog Overrides</h3>
              <div className="space-y-3">
                {[
                  { name: 'Rose Bouquet', price: '$45', category: 'Bouquet', sales: 245 },
                  { name: 'Gift Hamper', price: '$89', category: 'Hamper', sales: 189 },
                  { name: 'Orchid Plant', price: '$35', category: 'Plant', sales: 156 },
                ].map((gift, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{gift.name}</p>
                      <p className="text-sm text-gray-600">{gift.category} • {gift.sales} sales</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline" className="text-red-600">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Shops Tab */}
          <TabsContent value="shops" className="space-y-6">
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">All Shops</h3>
              <div className="space-y-3">
                {[
                  { name: 'Rose Garden Florist', rating: 4.8, reviews: 245 },
                  { name: 'Gift Paradise', rating: 4.9, reviews: 189 },
                  { name: 'Bloom & Botanicals', rating: 4.7, reviews: 156 },
                ].map((shop, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{shop.name}</p>
                      <p className="text-sm text-gray-600">⭐ {shop.rating} ({shop.reviews} reviews)</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline" className="text-red-600">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
              <div className="space-y-3">
                {[
                  { name: 'John Doe', email: 'john@example.com', joined: '2 days ago' },
                  { name: 'Jane Smith', email: 'jane@example.com', joined: '5 days ago' },
                  { name: 'Bob Johnson', email: 'bob@example.com', joined: '1 week ago' },
                ].map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email} • Joined {user.joined}</p>
                    </div>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

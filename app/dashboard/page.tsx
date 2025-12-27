'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Calendar, Gift, Heart, Plus, Users, TrendingUp, Sparkles, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

/**
 * Dashboard Page Component
 * Functional date management and Shopify integration
 */
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dates')
  const [dates, setDates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [user, setUser] = useState<any>(null)

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: 'birthday',
    reminderDays: '7',
    description: '',
  })

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      fetchDates(parsedUser.id)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchDates = async (userId: string) => {
    try {
      const response = await fetch(`/api/dates?userId=${userId}`)
      const data = await response.json()
      if (data.dates) {
        setDates(data.dates)
      }
    } catch (error) {
      console.error('Error fetching dates:', error)
      toast.error('Failed to load your dates')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      toast.error('Please log in first')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userId: user.id,
          reminderDays: parseInt(formData.reminderDays),
        }),
      })

      if (response.ok) {
        toast.success('Date added successfully!')
        setIsDialogOpen(false)
        setFormData({
          title: '',
          date: '',
          type: 'birthday',
          reminderDays: '7',
          description: '',
        })
        fetchDates(user.id)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to add date')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const getDaysRemaining = (dateStr: string) => {
    const eventDate = new Date(dateStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    // Set event to current year or next year if already passed
    eventDate.setFullYear(today.getFullYear())
    if (eventDate < today) {
      eventDate.setFullYear(today.getFullYear() + 1)
    }
    
    const diffTime = Math.abs(eventDate.getTime() - today.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

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
            <Link href="/gifts" className="text-sm text-gray-600 hover:text-rose-600 transition">Gifts</Link>
            <Link href="/shops" className="text-sm text-gray-600 hover:text-rose-600 transition">Shops</Link>
            <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-xs uppercase">
              {user?.name?.substring(0, 2) || 'JD'}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.name || 'Guest'}! Manage your dates and discover gifts</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-rose-600 hover:bg-rose-700 w-full md:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Add Important Date
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Add Important Date</DialogTitle>
                  <DialogDescription>
                    Keep track of birthdays, anniversaries, and more.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. Mom's Birthday"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Event Type</Label>
                    <Select 
                      value={formData.type} 
                      onValueChange={(v) => handleSelectChange('type', v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="graduation">Graduation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reminderDays">Reminder (days before)</Label>
                    <Input
                      id="reminderDays"
                      name="reminderDays"
                      type="number"
                      min="1"
                      max="30"
                      value={formData.reminderDays}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Notes (optional)</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Gift ideas, preferences, etc."
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-rose-600 hover:bg-rose-700" disabled={submitting}>
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Date
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{dates.length}</p>
              </div>
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-rose-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Favorites</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Family</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-600 opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Orders</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">3</p>
              </div>
              <Gift className="w-8 h-8 md:w-10 md:h-10 text-purple-600 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-gray-200 w-full md:w-auto overflow-x-auto flex-nowrap">
            <TabsTrigger value="dates" className="data-[state=active]:bg-rose-50 flex-shrink-0">
              <Calendar className="w-4 h-4 mr-2" />
              Important Dates
            </TabsTrigger>
            <TabsTrigger value="gifts" className="data-[state=active]:bg-rose-50 flex-shrink-0">
              <Gift className="w-4 h-4 mr-2" />
              Trending Gifts
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-rose-50 flex-shrink-0">
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="shops" className="data-[state=active]:bg-rose-50 flex-shrink-0">
              <TrendingUp className="w-4 h-4 mr-2" />
              Shops
            </TabsTrigger>
          </TabsList>

          {/* Important Dates Tab */}
          <TabsContent value="dates" className="space-y-4">
            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-rose-600" />
                <p className="mt-2 text-gray-600">Loading your dates...</p>
              </div>
            ) : dates.length > 0 ? (
              <div className="grid gap-4">
                {dates.map((date) => (
                  <Card key={date.id} className="p-6 border-0 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{date.title}</h3>
                          <Badge className="bg-rose-100 text-rose-700">
                            In {getDaysRemaining(date.date)} days
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {new Date(date.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="capitalize">🏷️ {date.type}</span>
                          <span>🔔 Reminder: {date.reminderDays} days before</span>
                        </div>
                        {date.description && (
                          <p className="mt-2 text-sm text-gray-500 italic">Note: {date.description}</p>
                        )}
                      </div>
                      <Link href="/gifts">
                        <Button className="bg-rose-600 hover:bg-rose-700 w-full md:w-auto">
                          Find Gift
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-dashed border-2">
                <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No dates added yet</h3>
                <p className="text-gray-500 mb-6">Add your first important date to get started!</p>
                <Button 
                  onClick={() => setIsDialogOpen(true)}
                  variant="outline" 
                  className="border-rose-200 text-rose-600 hover:bg-rose-50"
                >
                  Add Your First Date
                </Button>
              </Card>
            )}
          </TabsContent>

          {/* Trending Gifts Tab */}
          <TabsContent value="gifts" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                    <Link href="/gifts">
                      <Button size="sm" className="bg-rose-600 hover:bg-rose-700">View</Button>
                    </Link>
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
                    <Link href="/gifts">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">View</Button>
                    </Link>
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
                    <Link href="/gifts">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">View</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                    <Link href="/gifts">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">Order</Button>
                    </Link>
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
                <Link href="/shops">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">View Shop</Button>
                </Link>
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
                <Link href="/shops">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">View Shop</Button>
                </Link>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

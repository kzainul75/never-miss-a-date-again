'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Calendar, Gift, MapPin, Sparkles, Clock, Users, TrendingUp } from 'lucide-react'

/**
 * Landing Page Component
 * Updated with new branding: "Never Miss a Date Again"
 * All buttons and links are now functional
 */
export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Never Miss a Date Again</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-rose-600 transition">Features</a>
            <Link href="/gifts" className="text-gray-600 hover:text-rose-600 transition">Trending</Link>
            <Link href="/shops" className="text-gray-600 hover:text-rose-600 transition">Shops</a>
            <Link href="/auth/signup">
              <Button className="bg-rose-600 hover:bg-rose-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Never Miss an Important Date
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage birthdays, anniversaries, and special occasions. Discover trending gifts and bouquets from local florists. All in one beautiful app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white w-full sm:w-auto">
                Start Managing Dates
              </Button>
            </Link>
            <Link href="/gifts">
              <Button size="lg" variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 w-full sm:w-auto">
                Explore Gifts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Date Management */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition bg-white">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Date Management</h3>
            <p className="text-gray-600">
              Keep track of all important dates for family and friends. Get reminders before special occasions so you&apos;re always prepared.
            </p>
          </Card>

          {/* Feature 2: Gift Recommendations */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition bg-white">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trending Gift Ideas</h3>
            <p className="text-gray-600">
              Discover the latest trending gifts and bouquets. Get personalized recommendations based on the occasion and recipient.
            </p>
          </Card>

          {/* Feature 3: Shop Directory */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition bg-white">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Florists & Shops</h3>
            <p className="text-gray-600">
              Find the best florists and gift shops near you. View locations, hours, and ratings all in one place.
            </p>
          </Card>

          {/* Feature 4: Family Sharing */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition bg-white">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Groups</h3>
            <p className="text-gray-600">
              Create family groups and manage dates for everyone. Collaborate with family members to never forget a celebration.
            </p>
          </Card>

          {/* Feature 5: Smart Reminders */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition bg-white">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Reminders</h3>
            <p className="text-gray-600">
              Customizable reminders ensure you have plenty of time to prepare and order the perfect gift.
            </p>
          </Card>

          {/* Feature 6: Integrations */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition bg-white">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Integration</h3>
            <p className="text-gray-600">
              Integrate with invitations, location booking, and other apps for a complete celebration experience.
            </p>
          </Card>
        </div>
      </section>

      {/* Trending Gifts Section */}
      <section id=\"trending\" className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl\">
        <div className=\"flex items-center gap-2 mb-4\">
          <TrendingUp className=\"w-6 h-6 text-rose-600\" />
          <span className=\"text-rose-600 font-semibold\">TRENDING NOW</span>
        </div>
        <h2 className=\"text-4xl font-bold text-gray-900 mb-12\">Popular Gifts & Bouquets</h2>
        
        <div className=\"grid md:grid-cols-4 gap-6\">
          {/* Gift Card 1 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition hover:scale-105 duration-300\">
            <div className=\"h-48 bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center\">
              <Gift className=\"w-16 h-16 text-rose-600 opacity-50\" />
            </div>
            <div className=\"p-4\">
              <div className=\"flex items-center justify-between mb-2\">
                <h3 className=\"font-semibold text-gray-900\">Romantic Rose Bouquet</h3>
                <Badge className=\"bg-rose-100 text-rose-700\">Trending</Badge>
              </div>
              <p className=\"text-sm text-gray-600 mb-3\">12 premium red roses with greenery</p>
              <div className=\"flex items-center justify-between\">
                <span className=\"text-lg font-bold text-rose-600\">$45</span>
                <Link href=\"/gifts\">
                  <Button size=\"sm\" className=\"bg-rose-600 hover:bg-rose-700\">View</Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Gift Card 2 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition hover:scale-105 duration-300\">
            <div className=\"h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center\">
              <Gift className=\"w-16 h-16 text-purple-600 opacity-50\" />
            </div>
            <div className=\"p-4\">
              <div className=\"flex items-center justify-between mb-2\">
                <h3 className=\"font-semibold text-gray-900\">Luxury Gift Hamper</h3>
                <Badge className=\"bg-purple-100 text-purple-700\">New</Badge>
              </div>
              <p className=\"text-sm text-gray-600 mb-3\">Curated selection of premium items</p>
              <div className=\"flex items-center justify-between\">
                <span className=\"text-lg font-bold text-purple-600\">$89</span>
                <Link href=\"/gifts\">
                  <Button size=\"sm\" className=\"bg-purple-600 hover:bg-purple-700\">View</Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Gift Card 3 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition hover:scale-105 duration-300\">
            <div className=\"h-48 bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center\">
              <Gift className=\"w-16 h-16 text-blue-600 opacity-50\" />
            </div>
            <div className=\"p-4\">
              <div className=\"flex items-center justify-between mb-2\">
                <h3 className=\"font-semibold text-gray-900\">Orchid Plant</h3>
                <Badge className=\"bg-blue-100 text-blue-700\">Popular</Badge>
              </div>
              <p className=\"text-sm text-gray-600 mb-3\">Beautiful potted orchid with care guide</p>
              <div className=\"flex items-center justify-between\">
                <span className=\"text-lg font-bold text-blue-600\">$35</span>
                <Link href=\"/gifts\">
                  <Button size=\"sm\" className=\"bg-blue-600 hover:bg-blue-700\">View</Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Gift Card 4 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition hover:scale-105 duration-300\">
            <div className=\"h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center\">
              <Gift className=\"w-16 h-16 text-amber-600 opacity-50\" />
            </div>
            <div className=\"p-4\">
              <div className=\"flex items-center justify-between mb-2\">
                <h3 className=\"font-semibold text-gray-900\">Chocolate & Flowers</h3>
                <Badge className=\"bg-amber-100 text-amber-700\">Best Seller</Badge>
              </div>
              <p className=\"text-sm text-gray-600 mb-3\">Premium chocolates with fresh flowers</p>
              <div className=\"flex items-center justify-between\">
                <span className=\"text-lg font-bold text-amber-600\">$55</span>
                <Link href=\"/gifts\">
                  <Button size=\"sm\" className=\"bg-amber-600 hover:bg-amber-700\">View</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Shops Section */}
      <section id=\"shops\" className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20\">
        <h2 className=\"text-4xl font-bold text-gray-900 mb-12\">Featured Florists & Gift Shops</h2>
        
        <div className=\"grid md:grid-cols-3 gap-8\">
          {/* Shop Card 1 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition\">
            <div className=\"h-40 bg-gradient-to-br from-rose-300 to-pink-300 flex items-center justify-center\">
              <MapPin className=\"w-12 h-12 text-white opacity-50\" />
            </div>
            <div className=\"p-6\">
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Rose Garden Florist</h3>
              <p className=\"text-gray-600 text-sm mb-4\">Premium flowers and custom arrangements</p>
              <div className=\"space-y-2 text-sm text-gray-600 mb-4\">
                <p>📍 123 Flower Street, Downtown</p>
                <p>⭐ 4.8 (245 reviews)</p>
                <p>🕐 9:00 AM - 6:00 PM</p>
              </div>
              <Link href=\"/shops\">
                <Button className=\"w-full bg-rose-600 hover:bg-rose-700\">View Shop</Button>
              </Link>
            </div>
          </Card>

          {/* Shop Card 2 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition\">
            <div className=\"h-40 bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center\">
              <MapPin className=\"w-12 h-12 text-white opacity-50\" />
            </div>
            <div className=\"p-6\">
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Gift Paradise</h3>
              <p className=\"text-gray-600 text-sm mb-4\">Curated gifts and luxury hampers</p>
              <div className=\"space-y-2 text-sm text-gray-600 mb-4\">
                <p>📍 456 Shopping Mall, Central</p>
                <p>⭐ 4.9 (189 reviews)</p>
                <p>🕐 10:00 AM - 8:00 PM</p>
              </div>
              <Link href=\"/shops\">
                <Button className=\"w-full bg-purple-600 hover:bg-purple-700\">View Shop</Button>
              </Link>
            </div>
          </Card>

          {/* Shop Card 3 */}
          <Card className=\"overflow-hidden border-0 shadow-lg hover:shadow-xl transition\">
            <div className=\"h-40 bg-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center\">
              <MapPin className=\"w-12 h-12 text-white opacity-50\" />
            </div>
            <div className=\"p-6\">
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Bloom & Botanicals</h3>
              <p className=\"text-gray-600 text-sm mb-4\">Plants, flowers, and garden gifts</p>
              <div className=\"space-y-2 text-sm text-gray-600 mb-4\">
                <p>📍 789 Garden Avenue, North</p>
                <p>⭐ 4.7 (156 reviews)</p>
                <p>🕐 8:00 AM - 7:00 PM</p>
              </div>
              <Link href=\"/shops\">
                <Button className=\"w-full bg-blue-600 hover:bg-blue-700\">View Shop</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center\">
        <div className=\"bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-12 text-white\">
          <h2 className=\"text-4xl font-bold mb-4\">Ready to Never Miss a Date?</h2>
          <p className=\"text-lg text-rose-100 mb-8\">
            Join thousands of people who use our app to manage important dates and discover perfect gifts.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Input
              type=\"email\"
              placeholder=\"Enter your email\"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=\"bg-white/20 border-white/30 text-white placeholder:text-white/60 max-w-xs\"
            />
            <Link href=\"/auth/signup\">
              <Button size=\"lg\" className=\"bg-white text-rose-600 hover:bg-rose-50 w-full sm:w-auto\">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=\"bg-gray-900 text-gray-400 py-12\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"grid md:grid-cols-4 gap-8 mb-8\">
            <div>
              <Link href=\"/\" className=\"flex items-center gap-2 mb-4\">
                <Sparkles className=\"w-5 h-5 text-rose-500\" />
                <span className=\"font-bold text-white\">Never Miss a Date Again</span>
              </Link>
              <p className=\"text-sm\">Never miss an important date again.</p>
            </div>
            <div>
              <h4 className=\"font-semibold text-white mb-4\">Product</h4>
              <ul className=\"space-y-2 text-sm\">
                <li><a href=\"#features\" className=\"hover:text-white transition\">Features</a></li>
                <li><Link href=\"/gifts\" className=\"hover:text-white transition\">Gifts</Link></li>
                <li><Link href=\"/shops\" className=\"hover:text-white transition\">Shops</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=\"font-semibold text-white mb-4\">Company</h4>
              <ul className=\"space-y-2 text-sm\">
                <li><Link href=\"/\" className=\"hover:text-white transition\">About</Link></li>
                <li><Link href=\"/\" className=\"hover:text-white transition\">Blog</Link></li>
                <li><Link href=\"/\" className=\"hover:text-white transition\">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=\"font-semibold text-white mb-4\">Legal</h4>
              <ul className=\"space-y-2 text-sm\">
                <li><Link href=\"/\" className=\"hover:text-white transition\">Privacy</Link></li>
                <li><Link href=\"/\" className=\"hover:text-white transition\">Terms</Link></li>
                <li><Link href=\"/\" className=\"hover:text-white transition\">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className=\"border-t border-gray-800 pt-8 text-center text-sm\">
            <p>&copy; 2025 Never Miss a Date Again. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

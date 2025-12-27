'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sparkles } from 'lucide-react'

/**
 * Login Form Component
 * Extracted to be wrapped in Suspense because of useSearchParams
 */
function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // Get success message from URL params
  useEffect(() => {
    const msg = searchParams.get('message')
    if (msg) {
      setMessage(msg)
    }
  }, [searchParams])

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      // Call login API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        return
      }

      // Store token and redirect to dashboard
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push('/dashboard')
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-8 border-0 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Success Message */}
        {message && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            {message}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 mt-6"
        >
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
      </form>

      {/* Signup Link */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/auth/signup" className="text-rose-600 hover:text-rose-700 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </Card>
  )
}

/**
 * Login Page Component
 * Allows users to log in with email and password
 * Includes form validation and error handling
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Bloom & Gift</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Log in to your account</p>
        </div>

        {/* Form Card wrapped in Suspense */}
        <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
          <LoginForm />
        </Suspense>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900 font-medium mb-2">Demo Credentials:</p>
          <p className="text-sm text-blue-800">Email: demo@example.com</p>
          <p className="text-sm text-blue-800">Password: demo123</p>
        </div>
      </div>
    </div>
  )
}

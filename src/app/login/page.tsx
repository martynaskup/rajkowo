'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmail, signInWithMagicLink } from '../auth/auth'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isMagicLink, setIsMagicLink] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = isMagicLink
        ? await signInWithMagicLink(email)
        : await signInWithEmail(email, password)

      if (response.success) {
        if (isMagicLink) {
          // Show success message for magic link
          alert('Check your email for the login link')
        } else {
          // Redirect to profile page after successful login
          router.push('/profile')
        }
      } else {
        setError(response.error || 'An error occurred during login')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          {!isMagicLink && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : isMagicLink ? 'Send Magic Link' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 space-y-4 text-center">
          <button
            onClick={() => setIsMagicLink(!isMagicLink)}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            {isMagicLink ? 'Use password instead' : 'Use magic link instead'}
          </button>
          
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-600 hover:text-indigo-500">
              Register here
            </a>
          </p>
          
          <p className="text-sm text-gray-600">
            <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 
import { signUp, signInWithEmail, signInWithMagicLink, resetPassword, updateUser, signOut, getUser } from '../auth'

jest.mock('@supabase/supabase-js', () => {
  const { mockSupabaseClient } = require('../__mocks__/supabase')
  return {
    createClient: () => mockSupabaseClient,
  }
})

const { mockSupabaseClient } = require('../__mocks__/supabase')

describe('Auth Functions', () => {
  const mockEmail = 'test@example.com'
  const mockPassword = 'password123'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('signUp', () => {
    it('should successfully sign up a user', async () => {
      const mockResponse = { data: { user: { email: mockEmail } }, error: null }
      mockSupabaseClient.auth.signUp.mockResolvedValue(mockResponse)

      const result = await signUp(mockEmail, mockPassword)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockResponse.data)
    })

    it('should handle sign up errors', async () => {
      const mockError = new Error('Sign up failed')
      mockSupabaseClient.auth.signUp.mockRejectedValue(mockError)

      const result = await signUp(mockEmail, mockPassword)
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })

  describe('signInWithEmail', () => {
    it('should successfully sign in a user', async () => {
      const mockResponse = { data: { user: { email: mockEmail } }, error: null }
      mockSupabaseClient.auth.signInWithPassword.mockResolvedValue(mockResponse)

      const result = await signInWithEmail(mockEmail, mockPassword)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockResponse.data)
    })

    it('should handle sign in errors', async () => {
      const mockError = new Error('Sign in failed')
      mockSupabaseClient.auth.signInWithPassword.mockRejectedValue(mockError)

      const result = await signInWithEmail(mockEmail, mockPassword)
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })

  describe('signInWithMagicLink', () => {
    it('should successfully send magic link', async () => {
      const mockResponse = { data: { user: { email: mockEmail } }, error: null }
      mockSupabaseClient.auth.signInWithOtp.mockResolvedValue(mockResponse)

      const result = await signInWithMagicLink(mockEmail)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockResponse.data)
    })

    it('should handle magic link errors', async () => {
      const mockError = new Error('Magic link failed')
      mockSupabaseClient.auth.signInWithOtp.mockRejectedValue(mockError)

      const result = await signInWithMagicLink(mockEmail)
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })

  describe('resetPassword', () => {
    it('should successfully send reset password email', async () => {
      const mockResponse = { data: {}, error: null }
      mockSupabaseClient.auth.resetPasswordForEmail.mockResolvedValue(mockResponse)

      const result = await resetPassword(mockEmail)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockResponse.data)
    })

    it('should handle reset password errors', async () => {
      const mockError = new Error('Reset password failed')
      mockSupabaseClient.auth.resetPasswordForEmail.mockRejectedValue(mockError)

      const result = await resetPassword(mockEmail)
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })

  describe('updateUser', () => {
    it('should successfully update user password', async () => {
      const mockResponse = { data: { user: { email: mockEmail } }, error: null }
      mockSupabaseClient.auth.updateUser.mockResolvedValue(mockResponse)

      const result = await updateUser(mockPassword)
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockResponse.data)
    })

    it('should handle update user errors', async () => {
      const mockError = new Error('Update user failed')
      mockSupabaseClient.auth.updateUser.mockRejectedValue(mockError)

      const result = await updateUser(mockPassword)
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })

  describe('signOut', () => {
    it('should successfully sign out user', async () => {
      const mockResponse = { error: null }
      mockSupabaseClient.auth.signOut.mockResolvedValue(mockResponse)

      const result = await signOut()
      expect(result.success).toBe(true)
    })

    it('should handle sign out errors', async () => {
      const mockError = new Error('Sign out failed')
      mockSupabaseClient.auth.signOut.mockRejectedValue(mockError)

      const result = await signOut()
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })

  describe('getUser', () => {
    it('should successfully get user', async () => {
      const mockUser = { email: mockEmail }
      const mockResponse = { data: { user: mockUser }, error: null }
      mockSupabaseClient.auth.getUser.mockResolvedValue(mockResponse)

      const result = await getUser()
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockUser)
    })

    it('should handle get user errors', async () => {
      const mockError = new Error('Get user failed')
      mockSupabaseClient.auth.getUser.mockRejectedValue(mockError)

      const result = await getUser()
      expect(result.success).toBe(false)
      expect(result.error).toBe(mockError.message)
    })
  })
}) 
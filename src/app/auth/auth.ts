import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface AuthResponse {
  success: boolean
  error?: string
  data?: any
}

export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) throw error
    
    return {
      success: true,
      data
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const signInWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) throw error
    
    return {
      success: true,
      data
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const signInWithMagicLink = async (email: string): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
    })
    
    if (error) throw error
    
    return {
      success: true,
      data
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const resetPassword = async (email: string): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    
    if (error) throw error
    
    return {
      success: true,
      data
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const updateUser = async (password: string): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password,
    })
    
    if (error) throw error
    
    return {
      success: true,
      data
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const signOut = async (): Promise<AuthResponse> => {
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) throw error
    
    return {
      success: true
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const getUser = async (): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.getUser()
    
    if (error) throw error
    
    return {
      success: true,
      data: data.user
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
} 
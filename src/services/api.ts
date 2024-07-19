'use server'

import { env } from '@/env'
import { getServerAuthSession } from '@/lib/auth'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL
})

api.interceptors.request.use(async (config) => {
  const session = await getServerAuthSession()
  config.headers.Authorization = `Bearer ${session?.user?.accessToken}`
  return config
})

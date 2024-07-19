'use server'

import { api } from '@/services/api'
import { AxiosCustomError, AxiosCustomResponse } from '@/types/api'

interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  access_token: string
}

export const signIn = async ({
  email,
  password
}: SignInRequest): Promise<AxiosCustomResponse<SignInResponse>> => {
  try {
    const response = await api.post<SignInResponse>('/signIn', {
      email,
      password
    })

    return { data: response.data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}

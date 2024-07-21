'use server'

import { api } from '@/services/api'
import { AxiosCustomError, AxiosCustomResponse } from '@/types/api'

interface Note {
  id: string
  title: string
  content: string
}

interface SignInResponse {
  access_token: string
}

export const create = async ({
  title,
  content
}: Omit<Note, 'id'>): Promise<AxiosCustomResponse<SignInResponse>> => {
  try {
    const response = await api.post<SignInResponse>('/notes', {
      title,
      content
    })

    return { data: response.data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}

export const listAll = async (): Promise<AxiosCustomResponse<Note[]>> => {
  try {
    const response = await api.get<Note[]>('/notes')

    return { data: response.data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}

export const update = async ({
  id,
  title,
  content
}: Note): Promise<AxiosCustomResponse<Note>> => {
  try {
    const response = await api.put<Note>(`/notes/${id}`, {
      title,
      content
    })

    return { data: response.data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}

export const remove = async (id: string): Promise<AxiosCustomResponse<null>> => {
  try {
    await api.delete(`/notes/${id}`)

    return { data: null }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}

export const listDetail = async (id: string): Promise<AxiosCustomResponse<Note>> => {
  try {
    const response = await api.get<Note>(`/notes/${id}`)

    return { data: response.data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}

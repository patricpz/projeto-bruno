export interface AxiosCustomError {
  response: {
    data: {
      message: string
    }
  }
}

export type AxiosCustomResponse<T> =
  | {
      data: T
      error?: undefined
    }
  | {
      data?: undefined
      error: string
    }

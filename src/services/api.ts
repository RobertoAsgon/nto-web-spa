import axios, { AxiosError } from 'axios'

export class ApiErrorLog {
  private method: string
  private status: number
  private url: string
  private message: string

  constructor(status: number, method: string, url: string, message: string) {
    this.status = status
    this.method = method
    this.url = url
    this.message = message
  }
}

export interface IApiResponse {
  status: number
  mensagem: string
}

export const BASE_URL = 'nto-api/v1/'

export const api = axios.create({
  baseURL: BASE_URL
})

// Interceptor para criar ApiErrorLog
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { config, response } = error
    const { method, url } = config
    const errorLog = new ApiErrorLog(response?.status || 0, method || '', url || '', response?.statusText || '')
    console.log(errorLog)
    return Promise.reject(error)
  }
)

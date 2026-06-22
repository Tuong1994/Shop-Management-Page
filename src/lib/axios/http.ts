import { AxiosClient } from "."
import { abortRequest } from "./abort-request"
import { HttpCode } from "./helper"
import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios"
import type { ApiConfig, ApiResponse, ResponseError } from "./type"

class HttpRequest {
  private httpMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  }

  defaultApiResponse<R>(): ApiResponse<R> {
    return { data: {} as R, success: false }
  }

  apiResponseError(error: unknown) {
    let responseError: ResponseError = { status: 0, message: "" }
    let status = 0
    let message = ""
    if (error instanceof AxiosError) {
      status = error.response?.data.statusCode
      message = error.response?.data.message
    }
    responseError = { status, message }
    return responseError
  }

  private async apiCall<P = unknown, R = any>(config: ApiConfig<P>) {
    const { method, url, abortKey, data, ...rest } = config
    let apiResponse: ApiResponse<R> = this.defaultApiResponse<R>()
    let controller: AbortController | null = null
    const initialConfig: AxiosRequestConfig<P> = {
      method,
      url,
      ...rest,
    }
    if (abortKey) {
      controller = abortRequest.create(abortKey)
      initialConfig.signal = controller.signal
    }
    if (method !== this.httpMethod.GET && data !== undefined) initialConfig.data = data
    try {
      const response = (await AxiosClient(initialConfig)) as AxiosResponse<any, R>
      if (response.status === HttpCode.NOT_FOUND) {
        apiResponse = {
          ...apiResponse,
          success: false,
          error: { status: response.status, message: response.statusText },
        }
      } else apiResponse = { ...apiResponse, success: true, data: response.data }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.name === "CancelError" || axios.isCancel(error)) {
          apiResponse = {
            ...apiResponse,
            success: false,
            error: { status: 0, message: "Request canceled" },
          }
        }
        if(abortKey) abortRequest.abort(abortKey)
        apiResponse = { ...apiResponse, success: false, error: this.apiResponseError(error) }
      } else {
        apiResponse = {
          ...apiResponse,
          success: false,
          error: { status: 500, message: "Api network failed" },
        }
      }
    }
    return apiResponse
  }

  async Get<R>(url: string, abortKey?: string, config?: AxiosRequestConfig) {
    return this.apiCall<any, R>({ method: this.httpMethod.GET, url, abortKey, ...config })
  }

  async Post<P, R>(url: string, data: P, abortKey?: string, config?: AxiosRequestConfig<P>) {
    return this.apiCall<P, R>({ method: this.httpMethod.POST, url, data, abortKey, ...config })
  }

  async Put<P, R>(url: string, data: P, abortKey?: string, config?: AxiosRequestConfig<P>) {
    return this.apiCall<P, R>({ method: this.httpMethod.PUT, url, data, abortKey, ...config })
  }

  async Delete<P, R>(url: string, abortKey?: string, config?: AxiosRequestConfig) {
    return this.apiCall<P, R>({ method: this.httpMethod.DELETE, url, abortKey, ...config })
  }
}

export const httpRequest = new HttpRequest()

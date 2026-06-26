import type { ELocale } from "@/locale/enum"
import type { ERecordStatus, ESort } from "@/models/common.enum"
import type { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"
import type { EGender, ERole } from "@/models/user/user.enum"
import type { AxiosRequestConfig } from "axios"

export type Paging<T> = {
  totalItems: number
  page: number
  limit: number
  items: T[]
}

export type List<T> = {
  totalItems: number
  items: T[]
}

export type ApiQuery = {
  page?: string
  limit?: string
  keywords?: string
  sortBy?: ESort

  ids?: string
  userId?: string
  categoryId?: string
  productId?: string
  cartId?: string
  cartItemId?: string
  imageId?: string
  cityId?: string
  districtId?: string
  wardId?: string
  supplier?: string

  cityCode?: number
  districtCode?: number
  price?: number
  unit?: EProductUnit | null
  display?: EProductDisplay | null
  status?: ERecordStatus | null
  storageStatus?: EStorageStatus | null

  admin?: boolean

  role?: ERole | null
  gender?: EGender | null
  locale?: ELocale
}

export type ApiConfig<T> = AxiosRequestConfig<T> & { abortKey?: string }  

export type ApiFetchState = {
  loading: boolean
  error: boolean
}

export type ResponseError = {
  status: number
  message: string
}

export type ResponseResult = {
  error?: ResponseError
  success?: boolean
}

export interface ApiResponse<T> extends ResponseResult {
  data: T
}

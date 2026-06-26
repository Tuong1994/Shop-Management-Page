import type { Auth } from "../auth/auth.type"
import type { Image } from "../image/image.type"
import type { EGender, ERole } from "./user.enum"

export type User = {
  id: string
  email: string
  password: string
  phone: string
  role: ERole
  firstName: string
  lastName: string
  fullName: string
  gender: EGender
  birthday: string
  isDelete: boolean
  googleId: string
  resetToken: string
  resetTokenExpires: number
  auth: Auth
  image: Image
  address: UserAddress
  permission: UserPermission
  createdAt: Date | string
  updatedAt: Date | string
}

export type UserAddress = {
  id: string
  addressEn: string
  addressVn: string
  fullAddressEn: string
  fullAddressVn: string
  cityCode: number
  districtCode: number
  wardCode: number
  isDelete: boolean
  userId: string
  user: User
  createdAt: Date | string
  updatedAt: Date | string
}

export type UserPermission = {
  id: string
  create: boolean
  update: boolean
  remove: boolean
  isDelete: boolean
  userId: string
  user: User
  createdAt: Date | string
  updatedAt: Date | string
}

export type UserDataTable = Pick<User, "id" | "fullName" | "email" | "phone" | "gender" | "role" | "birthday">

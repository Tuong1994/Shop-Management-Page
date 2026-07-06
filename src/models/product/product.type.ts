import type { Category } from "../category/category.type"
import type { ERecordStatus } from "../common.enum"
import type { Image } from "../image/image.type"
import type { EProductDisplay, EProductUnit, EStorageStatus } from "./product.enum"

export type Product = {
  id: string
  name: string;
  nameEn: string
  nameVn: string
  unit: EProductUnit
  display: EProductDisplay
  cost: number
  price: number
  status: ERecordStatus
  items: number
  boxes: number
  amount: number
  storageStatus: EStorageStatus
  supplier: string
  isNew: boolean
  isDelete: boolean
  categoryId: string
  category: Category
  image: Image
  createdAt: Date | string
  updatedAt: Date | string
}

export type ProductDataTable = Omit<Product, "nameEn" | "nameVn" | "isDelete" | "isNew" | "createdAt" | "updatedAt" | "image" | "categoryId" | "category">

export type ProductPricingData = Pick<Product, "id" | "name" | "price" | "cost"> & {
  changeDate?: Date | string;
  profit?: number;
}
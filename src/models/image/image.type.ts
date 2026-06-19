import type { Category } from "../category/category.type"
import type { Product } from "../product/product.type"
import type { User } from "../user/user.type"

export type Image = {
  id: string
  path: string
  size: number
  publicId: string
  isDelete: boolean
  categoryId: string
  productId: string
  userId: string
  user: User
  category: Category
  product: Product
  createdAt: Date | string
  updatedAt: Date | string
}

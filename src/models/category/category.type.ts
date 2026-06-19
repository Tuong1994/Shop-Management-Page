import type { Product } from "../product/product.type"
import type { Image } from "../image/image.type"
import type { ERecordStatus } from "../common.enum"

export type Category = {
  id: string
  name: string;
  nameEn: string
  nameVn: string
  status: ERecordStatus
  isDelete: boolean
  products: Product[]
  image: Image
  createdAt: Date | string
  updatedAt: Date | string
}

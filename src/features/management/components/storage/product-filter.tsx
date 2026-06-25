import type { FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import type { Table } from "@tanstack/react-table"
import { useViewport } from "@/hooks"
import ProductFilterDesktop from "./product-filter-desktop"
import ProductFilterMobile from "./product-filter-mobile"

interface ProductFilterProps {
  table: Table<ProductDataTable>
}

const ProductFilter: FC<ProductFilterProps> = ({ table }) => {
  const {isMobile} = useViewport()

 return isMobile ? <ProductFilterDesktop table={table} /> : <ProductFilterMobile table={table} />
}

export default ProductFilter

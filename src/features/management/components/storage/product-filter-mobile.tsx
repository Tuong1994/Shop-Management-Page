import { useState, type FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import type { Table } from "@tanstack/react-table"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import useLocale from "@/locale/use-locale"
import ProductFilterForm from "./product-filter-form"

interface ProductFilterMobileProps {
  table: Table<ProductDataTable>
}

const ProductFilterMobile: FC<ProductFilterMobileProps> = ({table}) => {
  const { lang } = useLocale()

  const [open, setOpen] = useState<boolean>(false)

  const handleTrigger = () => {
    setOpen(!open)
  }

  return (
    <Drawer direction="right" open={open} onOpenChange={handleTrigger}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Filter />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="font-semibold">{lang.common.actions.filter}</DrawerHeader>
        <ProductFilterForm table={table} onCancel={handleTrigger} />
      </DrawerContent>
    </Drawer>
  )
}

export default ProductFilterMobile

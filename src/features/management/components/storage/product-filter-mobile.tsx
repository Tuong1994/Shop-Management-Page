import { useState, type FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import type { Table } from "@tanstack/react-table"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import useLocale from "@/locale/use-locale"
import ProductFilterForm from "./product-filter-form"

interface ProductFilterMobileProps {
  table: Table<ProductDataTable>
}

const ProductFilterMobile: FC<ProductFilterMobileProps> = ({ table }) => {
  const { lang } = useLocale()

  const [open, setOpen] = useState<boolean>(false)

  const handleTrigger = (open: boolean) => {
    setOpen(open)
  }

  return (
    <Sheet open={open} onOpenChange={handleTrigger}>
      <SheetTrigger
        render={
          <Button variant="outline">
            <Filter />
          </Button>
        }
      />
      <SheetContent showCloseButton={false} className="p-2 overflow-y-auto">
        <SheetHeader className="font-semibold px-2">{lang.common.actions.filter}</SheetHeader>
        <ProductFilterForm table={table} onCancel={() => handleTrigger(false)} />
      </SheetContent>
    </Sheet>
  )
}

export default ProductFilterMobile

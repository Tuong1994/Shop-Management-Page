import { useState, type FC } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartIcon from "./cart-icon"
import CartTable from "./cart-table"
import CartSummary from "./cart-summary"
import useLocale from "@/locale/use-locale"

interface CartMobileProps {}

const CartMobile: FC<CartMobileProps> = () => {
  const { lang } = useLocale()

  const [open, setOpen] = useState<boolean>(false)

  const handleTrigger = () => setOpen(!open)

  return (
    <Sheet open={open} onOpenChange={handleTrigger}>
      <SheetTrigger>
        <CartIcon />
      </SheetTrigger>
      <SheetContent showCloseButton={false} className="min-w-screen">
        <SheetHeader className="flex flex-row items-center justify-between p-2">
          <SheetTitle>{lang.market.cart.title}</SheetTitle>
          <Button className="h-8 w-8 p-0" onClick={handleTrigger}>
            <X />
          </Button>
        </SheetHeader>
        <div className="no-scroll overflow-y-auto p-2">
          <CartTable />
          <div className="mt-1 rounded-[20px] bg-primary p-2 text-white">
            <CartSummary />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartMobile

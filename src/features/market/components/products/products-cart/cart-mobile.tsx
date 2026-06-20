import { useState, type FC } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
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
    <Drawer direction="right" handleOnly open={open} onOpenChange={handleTrigger}>
      <DrawerTrigger>
        <CartIcon />
      </DrawerTrigger>
      <DrawerContent className="min-w-screen">
        <DrawerHeader className="flex flex-row items-center justify-between p-2">
          <DrawerTitle>{lang.market.cart.title}</DrawerTitle>
          <Button className="h-8 w-8 p-0" onClick={handleTrigger}>
            <X />
          </Button>
        </DrawerHeader>
        <div className="no-scroll overflow-y-auto">
          <CartTable />
          <div className="mt-1 rounded-[20px] bg-primary p-2 text-white">
            <CartSummary />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CartMobile

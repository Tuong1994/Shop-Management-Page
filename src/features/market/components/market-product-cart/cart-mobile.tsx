import { useState, type FC } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import CartIcon from "./cart-icon"
import CartTable from "./cart-table"
import useLocale from "@/locale/use-locale"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <DrawerHeader className="flex flex-row justify-between items-center">
          <DrawerTitle>{lang.market.cart.title}</DrawerTitle>
          <Button className="w-8 h-8 p-0" onClick={handleTrigger}>
            <X />
          </Button>
        </DrawerHeader>
        <CartTable />
      </DrawerContent>
    </Drawer>
  )
}

export default CartMobile

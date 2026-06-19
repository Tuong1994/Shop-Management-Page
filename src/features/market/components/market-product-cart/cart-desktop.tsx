import type { FC } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import CartIcon from "./cart-icon"
import CartTable from "./cart-table"
import CartSummary from "./cart-summary"
import useLocale from "@/locale/use-locale"

interface CartDesktopProps {}

const CartDesktop: FC<CartDesktopProps> = () => {
  const { lang } = useLocale()

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <CartIcon />
      </DialogTrigger>

      <DialogContent className="h-120 min-w-max">
        <DialogHeader>
          <DialogTitle>{lang.market.cart.title}</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 overflow-hidden">
          <div className="no-scrollbar h-full overflow-y-auto">
            <CartTable />
          </div>

          <div className="flex h-full min-w-40 flex-col justify-between rounded-[20px] bg-primary p-2.5 text-white">
            <CartSummary />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CartDesktop

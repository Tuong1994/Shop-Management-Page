import InfoRow from "@/components/page/info-row"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { FC } from "react"

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = () => {
  return (
    <>
      <div>
        <InfoRow name="Order" descript="$11.10" />
        <InfoRow name="Shipping" descript="$30.00" />
        <Separator />
        <InfoRow
          name="Total"
          descript="$41.10"
          nameProps={{ className: "font-bold text-lg" }}
          descriptProps={{ className: "font-bold text-lg" }}
        />
      </div>
      <div>
        <InfoRow name="Balance" descript="$200.00" />
        <InfoRow name="Remaining" descript="$158.90" />
        <Button className="w-full cursor-pointer bg-white text-black transition-colors hover:bg-black hover:text-white">
          Purchase
        </Button>
      </div>
    </>
  )
}

export default CartSummary;
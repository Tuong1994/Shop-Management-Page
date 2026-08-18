import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = () => {
  const { lang } = useLocale()

  return (
    <>
      <div>
        <InfoRow name={lang.market.cart.order} descript="$11.10" />
        <InfoRow name={lang.market.cart.shipping} descript="$30.00" />
        <Separator />
        <InfoRow
          name={lang.market.cart.total}
          descript="$41.10"
          nameProps={{ className: "font-bold text-lg" }}
          descriptProps={{ className: "font-bold text-lg" }}
        />
      </div>
      <div>
        <InfoRow name="Balance" descript="$200.00" />
        <InfoRow name="Remaining" descript="$158.90" />
        <Button className="w-full cursor-pointer bg-white text-black transition-colors hover:bg-black hover:text-white">
          {lang.common.actions.purchase}
        </Button>
      </div>
    </>
  )
}

export default CartSummary

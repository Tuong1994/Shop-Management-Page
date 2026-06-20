import type { FC } from "react"
import { ETabType } from "../../enum"
import { Card, CardContent } from "@/components/ui/card"
import { Paragraph, TextSmall } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import QuantityControl from "@/components/page/quantity-control"
import CardProducts from "./card-products"

interface MarketCardProps {
  tabType: ETabType
}

const MarketCard: FC<MarketCardProps> = ({ tabType = ETabType.PRODUCTS }) => {
  return (
    <Card className="p-0">
      <CardContent className="grid gap-1 p-2.5 xs:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="rounded-[20px] border p-2 xs:col-span-2 lg:col-span-2">
          <CardProducts />
        </div>

        <div className="rounded-[20px] bg-primary p-2 text-white xs:col-span-1 lg:col-span-1">
          <Paragraph className="text-center">Amount</Paragraph>
          <div className="flex justify-center">
            <QuantityControl
              className="mb-2.5"
              plusButtonProps={{ variant: "secondary" }}
              minusButtonProps={{ variant: "secondary" }}
              inputProps={{ className: "w-10 lg:w-full text-center", value: 1 }}
            />
          </div>
          <Separator />
          <TextSmall className="mt-2.5 block text-center">Total</TextSmall>
          <Paragraph className="mt-1! text-center font-bold">$47.04</Paragraph>
          <Button variant="secondary" className="w-full">
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MarketCard

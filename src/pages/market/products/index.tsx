import type { FC } from "react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Paragraph, TextMuted, TextSmall } from "@/components/ui/typography"
import { PackageOpen, Warehouse } from "lucide-react"
import Image from "@/components/page/image"
import QuantityControl from "@/components/page/quantity-control"

const ProductPage: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[...Array(20)].map((_, idx) => (
        <Card key={idx} className="p-0">
          <CardContent className="grid grid-cols-3 gap-1 p-2.5">
            <div className="col-span-2 rounded-[20px] border p-2">
              <CardTitle>Product name</CardTitle>
              <CardDescription>Category name</CardDescription>

              <div className="grid grid-cols-3">
                <div className="col-span-2 mt-2.5 flex gap-1">
                  <Image size="sm" objectFit="cover" rootClassName="rounded-[20px] overflow-hidden" />
                  <div>
                    <Paragraph>Display</Paragraph>
                    <TextMuted>Shelf</TextMuted>
                    <Paragraph>Unit Price</Paragraph>
                    <TextMuted>$3.92</TextMuted>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col justify-end">
                  <div className="flex items-center justify-end gap-1">
                    <TextSmall>66</TextSmall>
                    <Warehouse size={18} />
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <TextSmall>12</TextSmall>
                    <PackageOpen size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 rounded-[20px] bg-primary p-2 text-white">
              <Paragraph className="text-center">Amount</Paragraph>
              <QuantityControl
                plusButtonProps={{ variant: "secondary" }}
                minusButtonProps={{ variant: "secondary" }}
                inputProps={{ className: "w-full", value: 1 }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProductPage

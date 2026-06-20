import type { FC } from "react"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Paragraph, TextMuted, TextSmall } from "@/components/ui/typography"
import { PackageOpen, Warehouse } from "lucide-react"
import Image from "@/components/page/image"

interface CardProductsProps {}

const CardProducts: FC<CardProductsProps> = () => {
  return (
    <>
      <CardTitle>Product name</CardTitle>
      <CardDescription>Category name</CardDescription>

      <div className="grid grid-cols-3">
        <div className="col-span-2 mt-2.5 flex items-center gap-1.5">
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
    </>
  )
}

export default CardProducts
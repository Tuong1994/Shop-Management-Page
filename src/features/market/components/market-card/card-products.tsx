import type { FC } from "react"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Paragraph, TextMuted, TextSmall } from "@/components/ui/typography"
import { PackageOpen, Warehouse } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { formatMoney } from "@/lib/utils"
import Image from "@/components/page/image"
import useLocale from "@/locale/use-locale"

interface CardProductsProps {}

const CardProducts: FC<CardProductsProps> = () => {
  const { lang } = useLocale()

  return (
    <>
      <CardTitle>Product name</CardTitle>
      <CardDescription>Category name</CardDescription>

      <div className="grid grid-cols-3">
        <div className="col-span-2 mt-2.5 flex items-center gap-1.5">
          <Image size="sm" objectFit="cover" rootClassName="rounded-[20px] overflow-hidden" />
          <div>
            <Paragraph>{lang.market.products.display}</Paragraph>
            <TextMuted>Shelf</TextMuted>
            <Paragraph>{lang.market.unitPrice}</Paragraph>
            <TextMuted>{formatMoney(3.92)}</TextMuted>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-end">
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center justify-end gap-1">
                <TextSmall>66</TextSmall>
                <TextMuted>
                  <Warehouse size={18} />
                </TextMuted>
              </div>
            </TooltipTrigger>
            <TooltipContent side="inline-end">{lang.market.products.storage}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center justify-end gap-1">
                <TextSmall>12</TextSmall>
                <TextMuted>
                  <PackageOpen size={18} />
                </TextMuted>
              </div>
            </TooltipTrigger>
            <TooltipContent side="inline-end">{lang.market.products.box}</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </>
  )
}

export default CardProducts

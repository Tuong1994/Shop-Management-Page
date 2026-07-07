import type { FC } from "react"
import { CardTitle } from "@/components/ui/card"
import { Paragraph, TextMuted, TextSmall } from "@/components/ui/typography"
import { PackageOpen } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { formatMoney } from "@/lib/utils"
import Image from "@/components/page/image"
import useLocale from "@/locale/use-locale"

interface CardFloorProps {}

const CardFloor: FC<CardFloorProps> = () => {
  const { lang } = useLocale()

  return (
    <>
      <div className="flex items-center gap-4">
        <Image size="sm" objectFit="cover" rootClassName="rounded-[20px] overflow-hidden" />
        <div>
          <CardTitle>Floor name</CardTitle>
          <Paragraph>{lang.market.unitPrice}</Paragraph>
          <TextMuted>{formatMoney(3.92)}</TextMuted>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center justify-end gap-1">
              <TextSmall>10</TextSmall>
              <TextMuted>
                <PackageOpen size={18} />
              </TextMuted>
            </div>
          </TooltipTrigger>
          <TooltipContent side="inline-end">{lang.market.products.box}</TooltipContent>
        </Tooltip>
      </div>
    </>
  )
}

export default CardFloor

import type { FC } from "react"
import { CardTitle } from "@/components/ui/card"
import { Paragraph, TextMuted } from "@/components/ui/typography"
import Image from "@/components/page/image"
import useLocale from "@/locale/use-locale"

interface CardPaintsProps {}

const CardPaints: FC<CardPaintsProps> = () => {
  const { lang } = useLocale()

  return (
    <div className="flex items-center gap-4">
      <Image size="sm" objectFit="cover" rootClassName="rounded-[20px] overflow-hidden" />
      <div>
        <CardTitle>Paints name</CardTitle>
        <Paragraph>{lang.market.unitPrice}</Paragraph>
        <TextMuted>$3.92</TextMuted>
      </div>
    </div>
  )
}

export default CardPaints

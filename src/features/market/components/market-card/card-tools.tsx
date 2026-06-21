import type { FC } from "react"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Paragraph, TextMuted } from "@/components/ui/typography"
import Image from "@/components/page/image"
import useLocale from "@/locale/use-locale"

interface CardToolsProps {}

const CardTools: FC<CardToolsProps> = () => {
  const { lang } = useLocale()

  return (
    <div className="grid grid-cols-3 gap-2">
      <Image size="sm" objectFit="cover" rootClassName="rounded-[20px] overflow-hidden col-span-1" />
      <div className="col-span-2">
        <CardTitle>Tools name</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam eaque accusamus sit assumenda
          delectus quia reiciendis praesentium quam ea.
        </CardDescription>
        <Paragraph>{lang.market.tools.price}</Paragraph>
        <TextMuted>$3.92</TextMuted>
      </div>
    </div>
  )
}

export default CardTools

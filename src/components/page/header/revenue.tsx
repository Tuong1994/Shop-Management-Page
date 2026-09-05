import type { FC } from "react"
import { Badge, EBadgeColor } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { formatMoney } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import useLocale from "@/locale/use-locale"

const Revenue: FC = () => {
  const { lang } = useLocale()

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Badge color={EBadgeColor.GREEN}>
            <TrendingUp />
            <span>{formatMoney(50000)}</span>
          </Badge>
        }
      />
      <TooltipContent>{lang.header.revenue}</TooltipContent>
    </Tooltip>
  )
}

export default Revenue

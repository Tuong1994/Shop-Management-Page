import type { FC } from "react"
import { Badge, EBadgeColor } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { formatMoney } from "@/lib/utils"

const Fund: FC = () => {
  return (
    <Badge color={EBadgeColor.GREEN}>
      <TrendingUp />
      <span>{formatMoney(50000)}</span>
    </Badge>
  )
}

export default Fund

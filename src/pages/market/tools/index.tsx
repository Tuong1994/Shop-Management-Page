import type { FC } from "react"
import { ETabType } from "@/features/market/enum"
import MarketCard from "@/features/market/components/market-card"

const ToolsPage: FC = () => {
  return [...Array(5)].map((_, idx) => <MarketCard key={idx} tabType={ETabType.TOOLS} />)
}

export default ToolsPage

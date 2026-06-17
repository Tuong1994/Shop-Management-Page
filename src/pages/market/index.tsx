import type { FC } from "react"
import ContentLayout from "@/components/page/content-layout"
import MarketProductFilter from "@/features/market/components/market-product-filter"

const MarketPage: FC = () => {
  return <ContentLayout filter={<MarketProductFilter />}>Market Page</ContentLayout>
}

export default MarketPage

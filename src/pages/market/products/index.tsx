import type { FC } from "react"
import { ETabType } from "@/features/market/enum"
import MarketCard from "@/features/market/components/market-card"

const ProductPage: FC = () => {
  return [...Array(20)].map((_, idx) => <MarketCard key={idx} tabType={ETabType.PRODUCTS} />)
}

export default ProductPage

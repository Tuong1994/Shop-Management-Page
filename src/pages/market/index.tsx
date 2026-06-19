import type { FC } from "react"
import { getTabItems } from "@/features/market/data"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import MarketProductFilter from "@/features/market/components/market-product-filter"
import MarketProductCart from "@/features/market/components/market-product-cart"
import useLocale from "@/locale/use-locale"

const MarketPage: FC = () => {
  const { lang } = useLocale()

  return (
    <ContentLayout
      pageType={EPageType.MARKET}
      tabItems={getTabItems(lang)}
      actions={<MarketProductCart />}
      bottomContent={<MarketProductFilter />}
    >
      Market Page
    </ContentLayout>
  )
}

export default MarketPage

import type { FC } from "react"
import { getTabItems } from "@/features/market/data"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import MarketProductFilter from "@/features/market/components/market-product-filter"
import useLocale from "@/locale/use-locale"

const MarketPage: FC = () => {
  const { lang } = useLocale()

  return (
    <ContentLayout pageType={EPageType.MARKET} tabItems={getTabItems(lang)} filter={<MarketProductFilter />}>
      Market Page
    </ContentLayout>
  )
}

export default MarketPage

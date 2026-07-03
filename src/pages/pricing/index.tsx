import type { FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import ProductFilter from "@/components/page/product-filter"
import PricingTable from "@/features/pricing/pricing-table"

const PricingPage: FC = () => {
  return (
    <ContentLayout pageType={EPageType.PRICING} bottomContent={<ProductFilter />}>
      <PricingTable />
    </ContentLayout>
  )
}

export default PricingPage

import type { FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"

const BankPage: FC = () => {
  return <ContentLayout pageType={EPageType.BANK}>
    Bank page
  </ContentLayout>
}

export default BankPage

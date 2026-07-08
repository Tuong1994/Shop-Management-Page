import type { FC } from "react"
import { EPageType } from "@/data/page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContentLayout from "@/components/page/content-layout"
import LoansList from "@/features/bank/loans/components/loans-list"

const BankPage: FC = () => {
  return <ContentLayout pageType={EPageType.BANK}>
    <Tabs>
      <TabsList>
        <TabsTrigger value="loans">Loans</TabsTrigger>
        <TabsTrigger value="payments">Payments</TabsTrigger>
      </TabsList>
      <TabsContent value="loans">
        <LoansList />
      </TabsContent>
      <TabsContent value="payments"></TabsContent>
    </Tabs>
  </ContentLayout>
}

export default BankPage

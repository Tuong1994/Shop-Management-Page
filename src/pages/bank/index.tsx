import type { FC } from "react"
import { EPageType } from "@/data/page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContentLayout from "@/components/page/content-layout"
import LoansList from "@/features/bank/loans/components/loans-list"
import PaymentsLayout from "@/features/bank/payments/payments-layout"
import useLocale from "@/locale/use-locale"

const BankPage: FC = () => {
  const { lang } = useLocale()

  return (
    <ContentLayout pageType={EPageType.BANK}>
      <Tabs>
        <TabsList>
          <TabsTrigger value="loans">{lang.bank.loans}</TabsTrigger>
          <TabsTrigger value="payments">{lang.bank.payments}</TabsTrigger>
        </TabsList>
        <TabsContent value="loans">
          <LoansList />
        </TabsContent>
        <TabsContent value="payments">
          <PaymentsLayout />
        </TabsContent>
      </Tabs>
    </ContentLayout>
  )
}

export default BankPage

import type { FC } from "react"
import { Paragraph } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { formatMoney } from "@/lib/utils"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"
import PaymentsCard from "./payments-card"


interface PaymentsLayoutProps {}

const PaymentsLayout: FC<PaymentsLayoutProps> = () => {
  const { lang } = useLocale()

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="h-screen overflow-hidden col-span-2 rounded-[20px] bg-primary-foreground p-4">
        <div className="mb-4 rounded-[20px] bg-black p-2">
          <Paragraph className="text-center text-lg text-white">Payments</Paragraph>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <PaymentsCard />
          <PaymentsCard />
          <PaymentsCard />
          <PaymentsCard />
          <PaymentsCard />
        </div>
      </div>

      <div className="max-h-screen overflow-hidden col-span-1 rounded-[20px] bg-primary p-4 text-white">
        <div className="rounded-[20px] bg-white p-2">
          <Paragraph className="text-center text-lg text-black">Loan details</Paragraph>
        </div>
        <Separator className="my-4" />
        <InfoRow name="Loans taken" descript="1" />
        <InfoRow name="Payments remaining" descript="12" />
        <InfoRow name="Late payments fee" descript={formatMoney(0)} />
        <Separator className="my-4" />
        <InfoRow name="Total debt" descript={formatMoney(5500)} />
      </div>
    </div>
  )
}

export default PaymentsLayout

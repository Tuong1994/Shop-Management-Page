import type { FC } from "react"
import { Separator } from "@/components/ui/separator"
import { Paragraph } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"
import InfoRow from "@/components/page/info-row"

interface PaymentsDetailProps {}

const PaymentsDetail: FC<PaymentsDetailProps> = () => {
  return (
    <>
      <div className="rounded-[20px] bg-white p-2">
        <Paragraph className="text-center text-lg text-black">Loan details</Paragraph>
      </div>
      <Separator className="my-4" />
      <InfoRow name="Loans taken" descript="1" />
      <InfoRow name="Payments remaining" descript="12" />
      <InfoRow name="Late payments fee" descript={formatMoney(0)} />
      <Separator className="my-4" />
      <InfoRow
        name="Total debt"
        descript={formatMoney(5500)}
        nameProps={{ className: "text-xl font-bold" }}
        descriptProps={{ className: "text-xl font-bold" }}
      />
    </>
  )
}

export default PaymentsDetail

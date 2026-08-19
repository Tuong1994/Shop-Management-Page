import type { FC } from "react"
import { Separator } from "@/components/ui/separator"
import { Paragraph } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"

interface PaymentsDetailProps {}

const PaymentsDetail: FC<PaymentsDetailProps> = () => {
  const { lang } = useLocale()

  return (
    <>
      <div className="rounded-[20px] bg-white p-2">
        <Paragraph className="text-center text-lg text-black">{lang.bank.loanDetail}</Paragraph>
      </div>
      <Separator className="my-4" />
      <InfoRow name={lang.bank.taken} descript="1" />
      <InfoRow name={lang.bank.remaining} descript="12" />
      <InfoRow name={lang.bank.lateFee} descript={formatMoney(0)} />
      <Separator className="my-4" />
      <InfoRow
        name={lang.bank.debt}
        descript={formatMoney(5500)}
        nameProps={{ className: "text-xl font-bold" }}
        descriptProps={{ className: "text-xl font-bold" }}
      />
    </>
  )
}

export default PaymentsDetail

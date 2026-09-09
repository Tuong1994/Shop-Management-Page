import type { FC, HTMLAttributes } from "react"
import { Separator } from "@/components/ui/separator"
import { Paragraph } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"

interface PaymentsDetailProps {}

const PaymentsDetail: FC<PaymentsDetailProps> = () => {
  const { lang } = useLocale()

  const descriptProps: HTMLAttributes<HTMLDivElement> = {
    className: "font-normal"
  }

  return (
    <>
      <div className="rounded-[20px] bg-white p-2">
        <Paragraph className="text-center text-lg text-black">{lang.bank.loanDetail}</Paragraph>
      </div>
      <Separator className="my-4" />
      <InfoRow name={lang.bank.taken} descript="1" descriptProps={descriptProps} />
      <InfoRow name={lang.bank.remaining} descript="12" descriptProps={descriptProps} />
      <InfoRow name={lang.bank.lateFee} descript={formatMoney(0)}  descriptProps={descriptProps}/>
      <Separator className="my-4" />
      <InfoRow
        name={lang.bank.debt}
        descript={formatMoney(5500)}
        nameProps={{ className: "text-lg" }}
        descriptProps={{ className: "text-lg" }}
      />
    </>
  )
}

export default PaymentsDetail

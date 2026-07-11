import type { FC } from "react"
import { Paragraph, TextMuted } from "@/components/ui/typography"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { differenceInDays, format } from "date-fns"
import { formatMoney } from "@/lib/utils"
import { useViewport } from "@/hooks"
import useLocale from "@/locale/use-locale"

interface PaymentsCardProps {}

const PaymentsCard: FC<PaymentsCardProps> = () => {
  const { lang } = useLocale()

  const { isMobile, isTabletOnly } = useViewport()

  const isResponsive = isMobile || isTabletOnly

  const billDate = new Date()

  const dueDate = new Date(new Date().setDate(new Date().getDate() + 10))

  return (
    <Card>
      <CardHeader className="text-lg">Repayment</CardHeader>
      <CardContent className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-[15px]">
        {!isResponsive && <MailOpen size={70} />}

        <div>
          <Paragraph>{lang.management.bills.billDate}</Paragraph>
          <TextMuted>{format(billDate, "dd/MM/yyyy")}</TextMuted>
        </div>

        <div>
          <div className="mb-5">
            <Paragraph>{lang.management.bills.dueDate}</Paragraph>
            <TextMuted>{format(dueDate, "dd/MM/yyyy")}</TextMuted>
          </div>
          <TextMuted>
            {differenceInDays(dueDate, billDate)} {lang.management.bills.daysLeft}
          </TextMuted>
        </div>
      </CardContent>
      <CardFooter className="items-center justify-between">
        <div>
          <Paragraph>Late fee</Paragraph>
          <TextMuted>{formatMoney(0)}</TextMuted>
          <Paragraph className="text-xl">{formatMoney(96.68)}</Paragraph>
        </div>
        <Button className="w-20">{lang.management.bills.pay}</Button>
      </CardFooter>
    </Card>
  )
}

export default PaymentsCard

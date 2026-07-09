import type { FC } from "react"
import { Paragraph, TextMuted } from "@/components/ui/typography"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { differenceInDays, format } from "date-fns"
import { formatMoney } from "@/lib/utils"
import useLocale from "@/locale/use-locale"

interface PaymentsCardProps {}

const PaymentsCard: FC<PaymentsCardProps> = () => {
  const { lang } = useLocale()

  const billDate = new Date()

  const dueDate = new Date(new Date().setDate(new Date().getDate() + 10))

  return (
    <Card>
      <CardHeader>Repayment</CardHeader>
      <CardContent className="grid grid-cols-3 gap-2">
        <div>
          <MailOpen size={70} />
          <Paragraph>Late fee</Paragraph>
          <TextMuted>{formatMoney(0)}</TextMuted>
        </div>

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
      <CardFooter className="justify-between">
        <Paragraph className="text-xl">{formatMoney(96.68)}</Paragraph>
        <Button>{lang.management.bills.pay}</Button>
      </CardFooter>
    </Card>
  )
}

export default PaymentsCard

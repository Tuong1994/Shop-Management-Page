import type { FC, HTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Paragraph, TextMuted } from "@/components/ui/typography"
import { Receipt } from "lucide-react"
import { cn, formatMoney } from "@/lib/utils"
import useLocale from "@/locale/use-locale"
import { format } from "date-fns"

interface BillsCardProps extends HTMLAttributes<HTMLDivElement> {
  billType: "bill" | "rent"
}

const BillsCard: FC<BillsCardProps> = ({ billType, className, ...restProps }) => {
  const { lang } = useLocale()

  return (
    <Card {...restProps} className={cn("bg-primary-foreground text-black", className)}>
      <CardHeader className="text-lg">
        {billType === "bill" ? lang.management.bills.bill : lang.management.bills.rent}
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div className="flex gap-2">
          <div>
            <Receipt size={70} />
            <Paragraph className="text-xl">{formatMoney(96.68)}</Paragraph>
          </div>
          <div>
            <Paragraph>{lang.management.bills.billDate}</Paragraph>
            <TextMuted>{format(new Date(), "dd/MM/yyyy")}</TextMuted>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <Paragraph>{lang.management.bills.dueDate}</Paragraph>
            <TextMuted>
              {format(new Date(new Date().setDate(new Date().getDate() + 10)), "dd/MM/yyyy")}
            </TextMuted>
          </div>
          <TextMuted>3 days left</TextMuted>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="min-w-40">{lang.management.bills.pay}</Button>
      </CardFooter>
    </Card>
  )
}

export default BillsCard

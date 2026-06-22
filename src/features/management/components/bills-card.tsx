import type { FC, HTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Paragraph, TextMuted } from "@/components/ui/typography"
import { Receipt } from "lucide-react"
import { cn } from "@/lib/utils"

interface BillsCardProps extends HTMLAttributes<HTMLDivElement> {
  billType: "bill" | "rent"
}

const BillsCard: FC<BillsCardProps> = ({ billType, className, ...restProps }) => {
  return (
    <Card {...restProps} className={cn("bg-primary-foreground", className)}>
      <CardHeader className="text-lg">{billType === "bill" ? "Bill" : "Rent"}</CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div className="flex gap-2">
          <div>
            <Receipt size={70} />
            <Paragraph className="text-xl">$96.68</Paragraph>
          </div>
          <div>
            <Paragraph>Bill date</Paragraph>
            <TextMuted>Daty 68</TextMuted>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <Paragraph>Due Date</Paragraph>
            <TextMuted>Day 72</TextMuted>
          </div>
          <TextMuted>3 days left</TextMuted>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="min-w-40">Pay</Button>
      </CardFooter>
    </Card>
  )
}

export default BillsCard

import type { FC } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Paragraph } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import InfoRow from "@/components/page/info-row"

interface LoansListCardProps {}

const LoansListCard: FC<LoansListCardProps> = () => {
  return (
    <Card>
      <CardHeader>Basic loan</CardHeader>
      <CardContent>
        <Paragraph className="text-center text-2xl">{formatMoney(750.0)}</Paragraph>
        <Separator className="my-4" />
        <div className="rounded-[20px] bg-primary p-4 text-white">
          <InfoRow name="Daily interest" descript="%0.01" />
          <InfoRow name="Return payment" descript={formatMoney(862.50)} />
          <InfoRow name="Daily payment" descript={formatMoney(57.50)} />
          <InfoRow name="Loan term length" descript="15 day" />
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Slider defaultValue={[50]} max={100} step={1} className="mx-auto w-full max-w-xs" />
        <Button>Take loan</Button>
      </CardFooter>
    </Card>
  )
}

export default LoansListCard

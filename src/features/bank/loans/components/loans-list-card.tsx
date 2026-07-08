import type { FC } from "react"
import { ELoanType } from "../enum"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Paragraph, Title } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"
import { renderLoanAmount, renderLoanInterest, renderLoanTitle } from "../data"

interface LoansListCardProps {
  loanType?: ELoanType
}

const LoansListCard: FC<LoansListCardProps> = ({ loanType = ELoanType.BASIC }) => {
  const { lang } = useLocale()

  return (
    <Card>
      <CardHeader>
        <Title level={4}>{renderLoanTitle(loanType, lang)}</Title>
      </CardHeader>
      <CardContent>
        <Paragraph className="text-center text-3xl text-primary">
          {formatMoney(renderLoanAmount(loanType))}
        </Paragraph>
        <Separator className="my-4" />
        <div className="rounded-[20px] bg-primary p-4 text-white">
          <InfoRow name={lang.bank.interest} descript={`%${renderLoanInterest(loanType)}`} />
          <InfoRow name={lang.bank.return} descript={formatMoney(862.5)} />
          <InfoRow name={lang.bank.daily} descript={formatMoney(57.5)} />
          <InfoRow name={lang.bank.length} descript="15 day" />
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

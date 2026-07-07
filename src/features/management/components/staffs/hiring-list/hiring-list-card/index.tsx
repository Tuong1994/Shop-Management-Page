import type { FC } from "react"
import { ERole } from "@/models/user/user.enum"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { HandCoins } from "lucide-react"
import { Paragraph, TextMuted, Title } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { getCardColorByRole, renderJobDescript, renderJobTitle } from "./helper"
import { formatMoney } from "@/lib/utils"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"

interface HiringListCardProps {
  role?: ERole
  onMore?: (open: boolean) => void
}

const HiringListCard: FC<HiringListCardProps> = ({ role = ERole.CASHIER, onMore }) => {
  const { lang } = useLocale()

  return (
    <Card className="gap-2 p-1">
      <CardContent className="p-2">
        <Card className={`${getCardColorByRole(role)} text-white`}>
          <CardContent> 
            <div className="mb-4 grid grid-cols-1 gap-2 xl:grid-cols-3">
              <HandCoins className="col-span-1 hidden size-16 xl:block" />

              <div className="col-span-1 xl:col-span-2">
                <Title level={4}>{renderJobTitle(role, lang)}</Title>
                <TextMuted className="mb-4 text-gray-300">{renderJobDescript(role, lang)}</TextMuted>
                <InfoRow name={lang.management.hiring.wage} descript={formatMoney(80.00)} />
                <InfoRow name={lang.management.hiring.cost} descript={formatMoney(100.00)} />
              </div>
            </div>

            <Paragraph className="text-[16px]">Candidate name</Paragraph>
          </CardContent>
        </Card>
      </CardContent>

      <CardFooter className="flex justify-center gap-2 pb-2">
        <Button variant="secondary" onClick={() => onMore?.(true)}>
          {lang.management.actions.more}
        </Button>
        <Button>{lang.management.actions.hire}</Button>
      </CardFooter>
    </Card>
  )
}

export default HiringListCard

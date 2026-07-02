import type { FC } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { HandCoins } from "lucide-react"
import { Paragraph, TextMuted, Title } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import InfoRow from "@/components/page/info-row"

interface HiringListCardProps {
  onMore?: (open: boolean) => void
}

const HiringListCard: FC<HiringListCardProps> = ({ onMore }) => {
  return (
    <Card className="p-1">
      <CardContent className="p-2">
        <Card className="bg-primary text-white">
          <CardContent>
            <div className="mb-4 grid grid-cols-3 gap-2">
              <HandCoins className="col-span-1 size-18" />
              <div className="col-span-2">
                <Title level={4}>Cashier 1</Title>
                <TextMuted className="mb-4 text-gray-300">Checkouts</TextMuted>
                <InfoRow name="Daily wage" descript="$80.00" />
                <InfoRow name="Hiring cost" descript="$100.00" />
              </div>
            </div>
            <Paragraph className="text-[16px]">Candidate name</Paragraph>
          </CardContent>
        </Card>
        <CardFooter className="flex justify-center gap-2 p-2">
          <Button variant="secondary" onClick={() => onMore?.(true)}>
            More
          </Button>
          <Button>Hire</Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default HiringListCard

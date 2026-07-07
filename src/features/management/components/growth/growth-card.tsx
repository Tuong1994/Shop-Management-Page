import type { FC } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { List, ListItem, Paragraph } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"

const GrowthCard: FC = () => {
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">Section 1</CardHeader>
      <CardContent>
        <CardDescription>
          <Paragraph className="text-lg">Purchase this section to expand your business</Paragraph>
          <List>
            <ListItem>Store expanded 4x4m</ListItem>
            <ListItem>Storage expanded 4x4m</ListItem>
          </List>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex items-center gap-2 border rounded-[20px] p-2">
          <span>{formatMoney(800.00)}</span>
          <Button>Purchase</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default GrowthCard

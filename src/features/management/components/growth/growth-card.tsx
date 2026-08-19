import type { FC } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { List, ListItem, Paragraph } from "@/components/ui/typography"
import { formatMoney } from "@/lib/utils"
import useLocale from "@/locale/use-locale"

const GrowthCard: FC = () => {
  const { lang } = useLocale()

  return (
    <Card>
      <CardHeader className="text-xl font-semibold">Section 1</CardHeader>
      <CardContent>
        <CardDescription>
          <Paragraph className="text-lg">{lang.management.growth.description}</Paragraph>
          <List>
            <ListItem>{lang.management.growth.storeExpanded} 4x4m</ListItem>
            <ListItem>{lang.management.growth.storageExpanded} 4x4m</ListItem>
          </List>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex items-center gap-2 rounded-[20px] border p-2">
          <span>{formatMoney(800)}</span>
          <Button>{lang.common.actions.purchase}</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default GrowthCard

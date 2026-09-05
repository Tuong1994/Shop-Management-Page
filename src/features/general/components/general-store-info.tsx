import type { FC } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { formatMoney, formatPhoneNumber } from "@/lib/utils"
import { Badge, EBadgeColor } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { getRouteWithSub } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import StoresSelect from "@/components/page/stores-select"
import InfoRow from "@/components/page/info-row"
import LocaleLink from "@/locale/locale-link"
import useLocale from "@/locale/use-locale"

interface GeneralStoreInfoProps {}

const GeneralStoreInfo: FC<GeneralStoreInfoProps> = () => {
  const { lang } = useLocale()

  return (
    <Card>
      <CardContent>
        <StoresSelect />
        <InfoRow name={lang.general.store.branchId} descript={<Badge color={EBadgeColor.BLUE}>#0001</Badge>} />
        <InfoRow name={lang.general.store.openHour} descript={<Badge color={EBadgeColor.GREEN}>6:00 - 23:00</Badge>} />
        <InfoRow name={lang.common.form.label.email} descript="branch.trankhanhdu@shop.com" />
        <InfoRow name={lang.common.form.label.phone} descript={formatPhoneNumber("02839753186", "VN")} />
        <InfoRow
          name={lang.common.form.label.fullAddress}
          descript="34/4 Tran Khanh Du, Tan Dinh Ward, HCMC"
        />
        <InfoRow name={lang.general.store.expanded} descript="2 slots" />
        <InfoRow name={lang.general.store.manager} descript={<Badge color={EBadgeColor.PURPLE}>John Williams</Badge>} />
        <InfoRow name={lang.general.store.revenue} descript={<Badge color={EBadgeColor.GREEN}>{formatMoney(6956)}</Badge>} />
        <Separator className="my-5" />
        <LocaleLink to={getRouteWithSub(routerPaths.MANAGEMENT.INDEX, routerPaths.MANAGEMENT.STORAGE)}>
          <Button variant="outline">{lang.management.tabItems.storage}</Button>
        </LocaleLink>
      </CardContent>
    </Card>
  )
}

export default GeneralStoreInfo

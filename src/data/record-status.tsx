import type { Locale } from "@/locale/type"
import { Badge } from "@/components/ui/badge"
import { ERecordStatus } from "@/models/common.enum"

export const renderRecordStatus = (status: ERecordStatus, lang: Locale) => {
  const statuses: Record<ERecordStatus, string> = {
    [ERecordStatus.DRAFT]: lang.common.status.draft,
    [ERecordStatus.ACTIVE]: lang.common.status.active,
    [ERecordStatus.ALL]: lang.common.status.all,
  }
  const color = status === ERecordStatus.DRAFT ? "red" : "green"
  return <Badge className={`bg-${color}-50 text-${color}-700 dark:bg-${color}-950 dark:text-${color}-300`}>{statuses[status]}</Badge>
}

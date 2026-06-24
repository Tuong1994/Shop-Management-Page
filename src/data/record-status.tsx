import type { Locale } from "@/locale/type"
import { Badge } from "@/components/ui/badge"
import { ERecordStatus } from "@/models/common.enum"
import type { ReactNode } from "react"

type RecordStatus = Exclude<ERecordStatus, ERecordStatus.ALL>

export const renderRecordStatus = (status: RecordStatus, lang: Locale) => {
  const statuses: Record<RecordStatus, ReactNode> = {
    [ERecordStatus.DRAFT]: (
      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
        {lang.common.status.draft}
      </Badge>
    ),
    [ERecordStatus.ACTIVE]: (
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        {lang.common.status.active}
      </Badge>
    ),
  }
  return statuses[status]
}

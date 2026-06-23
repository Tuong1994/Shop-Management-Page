import type { Locale } from "@/locale/type"
import { ERecordStatus } from "@/models/common.enum"

export const renderRecordStatus = (status: ERecordStatus, lang: Locale) => {
  const statuses: Record<ERecordStatus, string> = {
    [ERecordStatus.DRAFT]: lang.common.status.draft,
    [ERecordStatus.ACTIVE]: lang.common.status.active,
    [ERecordStatus.ALL]: lang.common.status.all,
  }
  return statuses[status]
}

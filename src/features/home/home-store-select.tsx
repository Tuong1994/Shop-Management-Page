import type { FC } from "react"
import { Title } from "@/components/ui/typography"
import StoresSelect from "@/components/page/stores-select"
import useLocale from "@/locale/use-locale"

interface HomeStoreSelectProps {
  className?: string
}

const HomeStoreSelect: FC<HomeStoreSelectProps> = ({ className }) => {
  const { lang } = useLocale()

  return (
    <div className={className}>
      <Title level={4} className="mb-2">
        {lang.general.branch}
      </Title>
      <StoresSelect />
    </div>
  )
}

export default HomeStoreSelect

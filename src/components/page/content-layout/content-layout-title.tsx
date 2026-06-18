import type { FC } from "react"
import { Title } from "@/components/ui/typography"
import { EPageType, getPageIcon, getPageTitle } from "@/data/page"
import useLocale from "@/locale/use-locale"

interface ContentLayoutTitleProps {
  pageType: EPageType
}

const ContentLayoutTitle: FC<ContentLayoutTitleProps> = ({ pageType }) => {
  const { lang } = useLocale()

  return (
    <div className="flex items-center gap-2 text-white">
      {getPageIcon(pageType, 20)}
      <Title level={4}>{getPageTitle(pageType, lang)}</Title>
    </div>
  )
}

export default ContentLayoutTitle

import type { FC } from "react"
import { Outlet } from "react-router"
import { EPageType } from "@/data/page"
import { getManagementTabItems } from "@/features/management/data"
import ContentLayout from "@/components/page/content-layout"
import useLocale from "@/locale/use-locale"

const ManagementPage: FC = () => {
  const {lang} = useLocale()

  return (
    <ContentLayout pageType={EPageType.MANAGEMENT} tabItems={getManagementTabItems(lang)}>
      <Outlet />
    </ContentLayout>
  )
}

export default ManagementPage

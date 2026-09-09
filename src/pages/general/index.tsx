import type { FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import GeneralStoreInfo from "@/features/general/components/general-store-info"
import GeneralUserForm from "@/features/general/components/general-user-form"

const GeneralPage: FC = () => {
  return (
    <ContentLayout pageType={EPageType.GENERAL}>
      <div className="grid grid-cols-3 gap-5">
        <div className="3xs:col-span-3 lg:col-span-2">
          <GeneralUserForm />
        </div>
        <div className="3xs:col-span-3 lg:col-span-1">
          <GeneralStoreInfo />
        </div>
      </div>
    </ContentLayout>
  )
}

export default GeneralPage

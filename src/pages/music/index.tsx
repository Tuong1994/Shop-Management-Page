import { type FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import MusicTable from "@/features/music/music-table"

const MusicPage: FC = () => {
  return (
    <ContentLayout pageType={EPageType.MUSIC}>
      <MusicTable />
    </ContentLayout>
  )
}

export default MusicPage

import type { FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import MusicList from "@/features/music/components/music-list"

const MusicPage: FC = () => {
  return (
    <ContentLayout pageType={EPageType.MUSIC}>
      <MusicList />
    </ContentLayout>
  )
}

export default MusicPage

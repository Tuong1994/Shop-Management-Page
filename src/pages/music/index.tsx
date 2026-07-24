import type { FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import MusicList from "@/features/music/components/music-list"
import useAudio from "@/features/music/hooks/use-audio"

const MusicPage: FC = () => {
  const { setCurrentTrackId, setIsPlaying } = useAudio()

  const handleOpenAudio = (id: string) => {
    setCurrentTrackId(id)
    setIsPlaying(true)
  }

  return (
    <ContentLayout pageType={EPageType.MUSIC}>
      <MusicList onPlay={handleOpenAudio} />
    </ContentLayout>
  )
}

export default MusicPage

import { useState, type FC } from "react"
import { EPageType } from "@/data/page"
import ContentLayout from "@/components/page/content-layout"
import MusicList from "@/features/music/components/music-list"
import MusicAudio from "@/features/music/components/music-audio"
import useAudio from "@/features/music/hooks/use-audio"

const MusicPage: FC = () => {
  const { playList, setCurrentTrackId, setIsPlaying } = useAudio()

  const handleOpenAudio = (id: string) => {
    setCurrentTrackId(id)
    setIsPlaying(true)
  }

  const handleCloseAudio = () => {
    setCurrentTrackId(null)
    setIsPlaying(false)
  }

  const handlePlayingStatus = (isPlaying: boolean) => setIsPlaying(isPlaying)

  return (
    <>
      <ContentLayout pageType={EPageType.MUSIC}>
        <MusicList playList={playList} onPlay={handleOpenAudio} onPlayingChange={handlePlayingStatus} />
      </ContentLayout>
      <MusicAudio
        playList={playList}
        isPlaying={isPlaying}
        currentTrackId={currentTrackId}
        open={currentTrackId !== null}
        onOpenChange={handleCloseAudio}
        onPlayingChange={handlePlayingStatus}
      />
    </>
  )
}

export default MusicPage

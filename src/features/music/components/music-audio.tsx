import { useEffect, useRef, type FC } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { Paragraph } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import AudioPlayer from "react-h5-audio-player"
import Image from "@/components/page/image"
import useAudio from "../hooks/use-audio"

const MusicAudio: FC = () => {
  const { playList, currentTrackId, isPlaying, setCurrentTrackId, setIsPlaying } = useAudio()

  const playerRef = useRef<AudioPlayer>(null)

  const currentTrack = playList.find((audio) => audio.id === currentTrackId)

  const handleCloseAudio = () => {
    setCurrentTrackId(null)
    setIsPlaying(false)
  }

  useEffect(() => {
    if (!playerRef.current) return
    const audio = playerRef.current.audio.current
    if (!audio) return
    if (isPlaying) audio.play()
    else audio.pause()
  }, [isPlaying])

  return (
    <Drawer
      modal={false}
      showSwipeHandle
      disablePointerDismissal
      open={currentTrackId !== null}
      onOpenChange={handleCloseAudio}
    >
      <DrawerContent>
        <div className="p-3 pt-5">
          <div className="flex items-center gap-4">
            <Image imgWidth="65px" imgHeight="65px" src={currentTrack?.img} />
            <Separator orientation="vertical" />
            <Paragraph>{currentTrack?.name}</Paragraph>
            <Separator orientation="vertical" />
            <div className="flex-1">
              <AudioPlayer
                autoPlay
                ref={playerRef}
                src={currentTrack?.src}
                layout="horizontal-reverse"
                className="audio-player-custom"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MusicAudio

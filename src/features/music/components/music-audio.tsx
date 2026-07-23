import { useEffect, useRef, type FC } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import AudioPlayer from "react-h5-audio-player"
import useAudio from "../hooks/use-audio"

interface MusicAudioProps {
  onOpenChange?: (open: boolean) => void
  onPlayingChange?: (isPlaying: boolean) => void
}

const MusicAudio: FC<MusicAudioProps> = () => {
  const { playList, currentTrackId, isPlaying, setCurrentTrackId, setIsPlaying } = useAudio()

  const playerRef = useRef<AudioPlayer>(null)

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
          <div className="rounded-[20px] bg-primary-foreground">
            <AudioPlayer
              ref={playerRef}
              autoPlay
              src={playList.find((audio) => audio.id === currentTrackId)?.src}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MusicAudio

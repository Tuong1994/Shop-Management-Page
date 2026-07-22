import { useEffect, useRef, type FC } from "react"
import type { PlayList } from "react-modern-audio-player"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import AudioPlayer from "react-h5-audio-player"

interface MusicAudioProps {
  playList: PlayList
  currentTrackId: number | null
  open?: boolean
  isPlaying?: boolean
  onOpenChange?: (open: boolean) => void
  onPlayingChange?: (isPlaying: boolean) => void
}

const MusicAudio: FC<MusicAudioProps> = ({
  playList,
  currentTrackId,
  open,
  isPlaying,
  onOpenChange,
  onPlayingChange,
}) => {
  const playerRef = useRef<AudioPlayer>(null)

  useEffect(() => {
    if (!playerRef.current) return
    const audio = playerRef.current.audio.current
    if (!audio) return
    if (isPlaying) audio.play()
    else audio.pause()
  }, [isPlaying])

  return (
    <Drawer modal={false} showSwipeHandle disablePointerDismissal open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="p-3 pt-5">
          <div className="rounded-[20px] bg-primary-foreground">
            <AudioPlayer
              ref={playerRef}
              autoPlay
              src={playList.find((audio) => audio.id === currentTrackId)?.src}
              onPlay={() => onPlayingChange?.(true)}
              onPause={() => onPlayingChange?.(false)}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MusicAudio

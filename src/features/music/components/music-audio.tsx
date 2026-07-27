import { useEffect, useRef, type FC } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { Paragraph } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Minus } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import AudioPlayer from "react-h5-audio-player"
import Image from "@/components/page/image"
import useAudio from "../hooks/use-audio"

const MusicAudio: FC = () => {
  const {
    playList,
    currentTrackId,
    currentTrackIdx,
    isPlaying,
    setCurrentTrackId,
    setCurrentTrackIdx,
    setIsPlaying,
  } = useAudio()

  const playerRef = useRef<AudioPlayer>(null)

  const handleCloseAudio = () => {
    setCurrentTrackId(null)
    setCurrentTrackIdx(-1)
    setIsPlaying(false)
  }

  const handlePrevTrack = () => {
    let idx = currentTrackIdx
    setCurrentTrackIdx(idx === 0 ? playList.length - 1 : idx - 1)
  }

  const handleNextTrack = () => {
    let idx = currentTrackIdx
    setCurrentTrackIdx(idx < playList.length - 1 ? idx + 1 : 0)
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
            <Image imgWidth="65px" imgHeight="65px" src={playList[currentTrackIdx]?.img} />
            <Separator orientation="vertical" />
            <Paragraph>{playList[currentTrackIdx]?.name}</Paragraph>
            <Separator orientation="vertical" />
            <div className="flex-1">
              <AudioPlayer
                autoPlay
                ref={playerRef}
                src={playList[currentTrackIdx]?.src}
                layout="horizontal-reverse"
                className="audio-player-custom"
                onClickPrevious={handlePrevTrack}
                onClickNext={handleNextTrack}
                onEnded={handleNextTrack}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary">
                    <Minus />
                  </Button>
                }
              />
              <TooltipContent>
                Collapse
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MusicAudio

import { useEffect, type FC } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import AudioPlayer, { useAudioPlayer, type PlayList } from "react-modern-audio-player"

interface MusicAudioProps {
  playList: PlayList
  currentTrackId: number | null
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onPlayingChange?: (isPlaying: boolean) => void
}

const MusicAudio: FC<MusicAudioProps> = ({
  playList,
  currentTrackId,
  open,
  onOpenChange,
  onPlayingChange,
}) => {
  const { isPlaying, play, setTrack } = useAudioPlayer()

  // Trigger play khi mở drawer và có currentTrackId
  useEffect(() => {
    if (open && currentTrackId !== null) {
      // Đảm bảo chuyển track trước rồi play
      setTrack(playList.findIndex((track) => track.id === currentTrackId))

      // Delay nhẹ để context update
      const timer = setTimeout(() => {
        play()
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [open, currentTrackId, playList, play, setTrack])

  useEffect(() => {
    console.log("trigger")
    onPlayingChange?.(isPlaying)
  }, [isPlaying, onPlayingChange])

  return (
    <Drawer modal={false} showSwipeHandle disablePointerDismissal open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="p-3 pt-5">
          <div className="rounded-[20px] bg-primary-foreground">
            <AudioPlayer
              playList={playList}
              audioInitialState={{
                volume: 0.2,
                curPlayId: currentTrackId || playList[0].id,
                isPlaying: true,
              }}
              rootContainerProps={{ className: "audio-player-custom" }}
              activeUI={{
                all: true,
                progress: "waveform",
              }}
              // placement={{
              //   interface: {
              //     // Explains: row(rowNums-colNums) / colNums / row(rowNums-colNums) / colNums
              //     itemCustomArea: {
              //       playButton: "row1-1 / 1 / row1-1 / 1",
              //       volume: "row1-2 /2 / row1-2 / 2",
              //       progress: "row1-3 / 3 / row1-3 / 7",
              //       trackTimeDuration: "row1-10 / 10 / row1-10 / 10",
              //     },
              //   },
              // }}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MusicAudio

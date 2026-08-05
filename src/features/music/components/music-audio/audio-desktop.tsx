import { useEffect, useRef, type FC } from "react"
import { Paragraph } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { FastForward, Minus, Pause, Play, Rewind } from "lucide-react"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player"
import Image from "@/components/page/image"
import useAudio from "../../hooks/use-audio"

interface AudioDesktopProps {
  isCollapsed: boolean
  showList: boolean
  onCollapsed?: () => void
  onPrevTrack?: () => void
  onNextTrack?: () => void
  onPlay?: (id: string, isPlaying: boolean, index: number) => void
}

const AudioDesktop: FC<AudioDesktopProps> = ({
  isCollapsed,
  showList,
  onCollapsed,
  onPrevTrack,
  onNextTrack,
  onPlay,
}) => {
  const { playList, currentTrackIdx, isPlaying, setIsPlaying } = useAudio()

  const playerRef = useRef<AudioPlayer>(null)

  useEffect(() => {
    if (!playerRef.current) return
    const audio = playerRef.current.audio.current
    if (!audio) return
    if (isPlaying) audio.play()
    else audio.pause()
  }, [isPlaying])

  return (
    <Accordion>
      <AccordionItem>
        <div className="flex items-center gap-2 p-2">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" onClick={onCollapsed}>
                  <Minus />
                </Button>
              }
            />
            <TooltipContent>{!isCollapsed ? "Collapse" : "Expand"}</TooltipContent>
          </Tooltip>

          {!isCollapsed && (
            <div className="flex items-center gap-8">
              <Separator orientation="vertical" />
              <Image imgWidth="65px" imgHeight="65px" src={playList[currentTrackIdx]?.img} />
              <Separator orientation="vertical" />
              <Paragraph className="text-[16px]">{playList[currentTrackIdx]?.name}</Paragraph>
              <Separator orientation="vertical" />
            </div>
          )}

          <div className="flex-1">
            <AudioPlayer
              autoPlay
              muted
              ref={playerRef}
              src={playList[currentTrackIdx]?.src}
              layout="horizontal-reverse"
              className="audio-player-custom p-0!"
              showFilledVolume
              showSkipControls={false}
              showJumpControls={!isCollapsed}
              customAdditionalControls={[]}
              customVolumeControls={[RHAP_UI.VOLUME]}
              customProgressBarSection={
                !isCollapsed
                  ? [RHAP_UI.CURRENT_TIME, RHAP_UI.PROGRESS_BAR, RHAP_UI.DURATION]
                  : [RHAP_UI.CURRENT_TIME, RHAP_UI.PROGRESS_BAR]
              }
              customIcons={{
                play: <Play size={18} />,
                pause: <Pause size={18} />,
                forward: <FastForward size={18} />,
                rewind: <Rewind size={18} />,
              }}
              onClickPrevious={onPrevTrack}
              onClickNext={onNextTrack}
              onEnded={onNextTrack}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>

          {showList && !isCollapsed && (
            <div className="transition-opacity">
              <Separator orientation="vertical" />
              <AccordionTrigger>List</AccordionTrigger>
            </div>
          )}
        </div>

        {showList && !isCollapsed && (
          <AccordionContent>
            {playList.map((audio, index) => {
              const isCurrent = playList[currentTrackIdx]?.id === audio.id
              return (
                <Card key={audio.id} className="p-0 not-last:mb-2">
                  <CardContent className="flex items-center justify-center gap-8 p-1">
                    <Image imgWidth="45px" imgHeight="45px" src={audio.img} />
                    <Separator orientation="vertical" />
                    <Paragraph>{audio.name}</Paragraph>
                    <Separator orientation="vertical" />
                    <>
                      {isCurrent && isPlaying ? (
                        <Button variant="secondary" onClick={() => onPlay?.(audio.id, false, index)}>
                          <Pause />
                        </Button>
                      ) : (
                        <Button variant="secondary" onClick={() => onPlay?.(audio.id, true, index)}>
                          <Play />
                        </Button>
                      )}
                    </>
                  </CardContent>
                </Card>
              )
            })}
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default AudioDesktop

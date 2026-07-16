import { useMemo, type FC } from "react"
import { useTheme } from "@/components/theme-provider"
import type { ColumnDef } from "@tanstack/react-table"
import AudioPlayer, { type AudioData, type PlayList } from "react-modern-audio-player"
import useLocale from "@/locale/use-locale"
import { Card, CardContent } from "@/components/ui/card"
import { Paragraph } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import Image from "@/components/page/image"

interface MusicItemProps {
  audio: AudioData
}

const MusicItem: FC<MusicItemProps> = ({ audio }) => {
  const { lang } = useLocale()

  const { theme } = useTheme()

  const columns: ColumnDef<AudioData>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => <div className="font-bold">Name</div>,
      },
      {
        accessorKey: "writer",
        header: () => <div className="font-bold">Writer</div>,
      },
      {
        id: "action",
        cell: ({ row }) => {
          const track = row.original
          const singleTrackPlaylist: PlayList = [
            {
              name: track.name,
              writer: track.writer,
              img: track.img,
              src: track.src,
              id: track.id,
            },
          ]
          return (
            <AudioPlayer
              playList={singleTrackPlaylist}
              audioInitialState={{
                volume: 0.2,
                curPlayId: track.id,
              }}
              activeUI={{
                all: true,
                artwork: false,
                trackInfo: false,
                repeatType: false,
                playList: false,
                playbackRate: false,
                prevNnext: false,
                progress: "waveform",
              }}
              placement={{
                interface: {
                  // Explains: row(rowNums-colNums) / colNums / row(rowNums-colNums) / colNums
                  itemCustomArea: {
                    playButton: "row1-1 / 1 / row1-1 / 1",
                    progress: "row1-2 / 2 / row1-2 / 7",
                    volume: "row1-9 /9 / row1-9 / 9",
                    trackTimeDuration: "row1-10 / 10 / row1-10 / 10",
                  },
                },
              }}
              rootContainerProps={{ className: "audio-player-custom" }}
            />
          )
        },
      },
    ],
    [lang]
  )

  return (
    <Card className="not-last:mb-5 overflow-visible p-0">
      <CardContent className="flex items-center justify-between gap-2">
        <Image imgWidth="60px" imgHeight="60px" src={audio.img} />
        <Separator orientation="vertical" />

        <Paragraph className="min-w-max">{audio.name}</Paragraph>
        <Separator orientation="vertical" />

        <Paragraph className="min-w-max">{audio.writer}</Paragraph>
        <Separator orientation="vertical" />

        <AudioPlayer
          playList={[audio]}
          audioInitialState={{
            volume: 0.2,
            curPlayId: audio.id,
          }}
          activeUI={{
            all: true,
            artwork: false,
            trackInfo: false,
            repeatType: false,
            playList: false,
            playbackRate: false,
            prevNnext: false,
            progress: "waveform",
          }}
          placement={{
            interface: {
              // Explains: row(rowNums-colNums) / colNums / row(rowNums-colNums) / colNums
              itemCustomArea: {
                playButton: "row1-1 / 1 / row1-1 / 1",
                progress: "row1-2 / 2 / row1-2 / 7",
                volume: "row1-9 /9 / row1-9 / 9",
                trackTimeDuration: "row1-10 / 10 / row1-10 / 10",
              },
            },
          }}
          rootContainerProps={{ className: "audio-player-custom" }}
        />
      </CardContent>
    </Card>
  )
}

export default MusicItem

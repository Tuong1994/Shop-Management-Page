import { useMemo, type FC } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import AudioPlayer, { type AudioData, type PlayList } from "react-modern-audio-player"
import useLocale from "@/locale/use-locale"
import DataTable from "@/components/page/data-table"
import { useTheme } from "@/components/theme-provider"

const playList: PlayList = [
  {
    name: "music - 1",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
    id: 1,
  },
  {
    name: "music - 2",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
    id: 2,
  },
  {
    name: "music - 3",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
    id: 3,
  },
  {
    name: "music - 4",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
    id: 4,
  },
  {
    name: "music - 5",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
    id: 5,
  },
]

interface MusicTableProps {}

const MusicTable: FC<MusicTableProps> = () => {
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

  return <DataTable<AudioData> data={playList} columns={columns} />
}

export default MusicTable

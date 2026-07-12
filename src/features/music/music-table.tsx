import { useMemo, type FC } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import AudioPlayer, { type AudioData, type InitialStates, type PlayList } from "react-modern-audio-player"
import useLocale from "@/locale/use-locale"
import DataTable from "@/components/page/data-table"

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

const initialState: InitialStates = {
  volume: 0.2,
  curPlayId: 1,
}

interface MusicTableProps {}

const MusicTable: FC<MusicTableProps> = () => {
  const { lang } = useLocale()

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
          const track = row.original // Lấy dữ liệu của row hiện tại

          // Tạo playlist chỉ có 1 bài cho row này
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
            <div className="w-full">
              <AudioPlayer
                playList={singleTrackPlaylist}
                audioInitialState={{
                  volume: 0.2,
                  curPlayId: track.id,
                }}
                activeUI={{
                  playButton: true,
                  progress: "waveform",
                  volume: true,
                  trackInfo: false,
                  artwork: false,
                }}
                placement={{
                  player: "static",
                  playList: "bottom",
                  interface: {
                    templateArea: {
                      progress: "row1-2",
                    }
                  }
                }}
                rootContainerProps={{
                  style: { width: "100%" },
                  className: "rmap-full-width",
                }}
                colorScheme="light"
              />
            </div>
          )
        },
      },
    ],
    [lang]
  )

  return <DataTable<AudioData> data={playList} columns={columns} />
}

export default MusicTable

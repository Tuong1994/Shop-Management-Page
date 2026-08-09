import type { ColumnDef } from "@tanstack/react-table"
import type { Audio } from "@/models/audio/audio.type"
import { useMemo, type FC } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"
import Image from "@/components/page/image"
import DataTable from "@/components/page/data-table"
import useLocale from "@/locale/use-locale"
import useAudio from "../hooks/use-audio"

const MusicList: FC = () => {
  const { lang } = useLocale()

  const { playList, currentTrackIdx, isPlaying, setIsPlaying, setCurrentTrackId, setCurrentTrackIdx } =
    useAudio()

  const handlePlay = (id: string, isPlaying: boolean, idx: number) => {
    setIsPlaying(isPlaying)
    setCurrentTrackId(id)
    setCurrentTrackIdx(idx)
  }

  const columns: ColumnDef<Audio>[] = useMemo(
    () => [
      {
        accessorKey: "img",
        header: () => <div className="font-bold">{lang.common.table.head.image}</div>,
        cell: ({ row }) => <Image src={row.original.img} imgWidth="60px" imgHeight="60px" />,
      },
      {
        accessorKey: "name",
        header: () => <div className="font-bold">{lang.common.table.head.songName}</div>,
      },
      {
        accessorKey: "author",
        header: () => <div className="font-bold">{lang.common.table.head.author}</div>,
      },
      {
        id: "action",
        cell: ({ row }) => {
          const isCurrent = playList[currentTrackIdx]?.id === row.original.id
          return (
            <>
              {isCurrent && isPlaying ? (
                <Button variant="secondary" onClick={() => handlePlay(row.original.id, false, row.index)}>
                  <Pause size={20} />
                </Button>
              ) : (
                <Button variant="secondary" onClick={() => handlePlay(row.original.id, true, row.index)}>
                  <Play size={20} />
                </Button>
              )}
            </>
          )
        },
      },
    ],
    [lang, currentTrackIdx, isPlaying]
  )

  return <DataTable<Audio> data={playList} columns={columns} />
}

export default MusicList

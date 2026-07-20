import type { AudioData } from "react-modern-audio-player"
import type { ColumnDef } from "@tanstack/react-table"
import { useMemo, type FC } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"
import Image from "@/components/page/image"
import DataTable from "@/components/page/data-table"
import useLocale from "@/locale/use-locale"

interface MusicListProps {
  playList: AudioData[]
  currentTrackId: number | null
  isPlaying: boolean
  onPlay?: (id: number) => void
}

const MusicList: FC<MusicListProps> = ({ playList, currentTrackId, isPlaying, onPlay }) => {
  const { lang } = useLocale()

  const columns: ColumnDef<AudioData>[] = useMemo(
    () => [
      {
        accessorKey: "img",
        header: () => <div className="font-bold">{lang.common.table.head.image}</div>,
        cell: ({ row }) => <Image src={row.original.img} imgWidth="60px" imgHeight="60px" />,
      },
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
          const isCurrent = currentTrackId === row.original.id
          return (
            <Button variant="secondary" onClick={() => onPlay?.(row.original.id)}>
              {isCurrent && isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
          )
        },
      },
    ],
    [lang, currentTrackId, isPlaying]
  )

  return <DataTable<AudioData> data={playList} columns={columns} />
}

export default MusicList

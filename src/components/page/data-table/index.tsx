import {
  type ForwardedRef,
  type TableHTMLAttributes,
  type ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react"
import {
  type ColumnDef,
  type RowSelectionState,
  type Table as TableTanstack,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { cn } from "@/lib/utils"
import { Table } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash, X } from "lucide-react"
import DataTablePagination from "./data-table-pagination"
import DataTableHeader from "./data-table-header"
import DataTableBody from "./data-table-body"
import useLocale from "@/locale/use-locale"

interface DataTableProps<T> extends TableHTMLAttributes<HTMLTableElement> {
  columns: ColumnDef<T>[]
  data: T[]
  rowKey?: keyof T
  hasSelection?: boolean
  hasFilter?: boolean
  hasPaging?: boolean
  renderFilter?: (table: TableTanstack<T>) => ReactNode
  onRowSelection?: (rows: T[]) => void
  onRowRemove?: (rows: T[]) => void
}

const DataTable = <T extends object>(
  {
    columns,
    data,
    hasSelection,
    hasFilter,
    hasPaging,
    rowKey,
    className,
    renderFilter,
    onRowSelection,
    onRowRemove,
    ...restProps
  }: DataTableProps<T>,
  ref: ForwardedRef<HTMLTableElement>
) => {
  const { lang } = useLocale()

  const [rows, setRows] = useState<T[]>([])

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const selectionColumn: ColumnDef<T> = useMemo(
    () => ({
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={Boolean(
            table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
          )}
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value)
            setRows(table.getRowModel().rows.map((row) => ({ ...row.original })))
            if (!value) setRows([])
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value)
            setRows((prev) => [...prev, row.original])
            if (!value)
              setRows((prev) =>
                [...prev].filter(
                  (selectedRow) => selectedRow[rowKey as keyof T] !== row.original[rowKey as keyof T]
                )
              )
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    }),
    []
  )

  const defaultColumns = hasSelection ? [selectionColumn, ...columns] : columns

  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
  })

  const isSelection = table.getIsSomePageRowsSelected() || table.getIsAllRowsSelected()

  useEffect(() => {
    onRowSelection?.(rows)
  }, [rows.length, isSelection])

  const handleCancelSelect = () => {
    setRows([])
    setRowSelection({})
  }

  const handleRowRemove = () => onRowRemove?.(rows)

  return (
    <>
      {hasFilter && <div className="flex items-center py-4">{renderFilter?.(table)}</div>}
      {isSelection && (
        <div className="flex items-center gap-2 pb-4">
          <Button variant="destructive" onClick={handleRowRemove}>
            <Trash />
            <span>{lang.common.actions.remove}</span>
          </Button>
          <Button variant="outline" onClick={handleCancelSelect}>
            <X />
            <span>{lang.common.actions.cancel}</span>
          </Button>
        </div>
      )}
      <div className="overflow-hidden rounded-md border">
        <Table ref={ref} {...restProps} className={cn("text-[15px]", className)}>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </Table>
      </div>
      {hasPaging && <DataTablePagination table={table} />}
    </>
  )
}

export default forwardRef(DataTable)

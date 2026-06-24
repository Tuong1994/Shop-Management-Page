import { type ForwardedRef, forwardRef, type HTMLAttributes, type ReactNode, useEffect, useMemo, useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type RowSelectionState,
  type Table as TableTanstack,
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

interface DataTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  columns: ColumnDef<T>[]
  data: T[]
  rowKey: keyof T
  hasSelection?: boolean
  hasFilter?: boolean
  hasPaging?: boolean
  renderFilter?: (table: TableTanstack<T>) => ReactNode
  onRowSelection?: (rows: T[]) => void
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
    ...restProps
  }: DataTableProps<T>,
  ref: ForwardedRef<HTMLTableElement>
) => {
  const { lang } = useLocale()

  const [rows, setRows] = useState<T[]>([])

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

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
            setRows(prev => [...prev, row.original])
            if (!value) setRows(prev => [...prev].filter(selectedRow => selectedRow[rowKey] !== row.original[rowKey]))
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
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    state: { rowSelection, columnFilters },
  })

  const isSelection = table.getIsSomePageRowsSelected() || table.getIsAllRowsSelected()

  useEffect(() => {
    onRowSelection?.(rows)
  }, [rows.length, isSelection])

  return (
    <>
      {hasFilter && <div className="flex items-center py-4">{renderFilter?.(table)}</div>}
      {isSelection && (
        <div className="flex items-center gap-2 pb-4">
          <Button variant="destructive">
            <Trash />
            <span>Delete</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              console.log(rows)
            }}
          >
            <X />
            <span>Cancel</span>
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

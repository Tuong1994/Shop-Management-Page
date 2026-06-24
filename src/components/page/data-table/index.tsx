import {
  type ForwardedRef,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react"
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
import DataTablePagination from "./data-table-pagination"
import DataTableHeader from "./data-table-header"
import DataTableBody from "./data-table-body"

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
  let rows: T[] = []
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
            const allRows = table.getRowModel().rows.map((row) => ({ ...row.original }))
            table.toggleAllPageRowsSelected(!!value)
            if (!value) onRowSelection?.([])
            onRowSelection?.(allRows)
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value)
            rows = [...rows, row.original]
            if (!value) rows = rows.filter((selectRow) => selectRow[rowKey] !== row.original[rowKey])
            onRowSelection?.(rows)
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

  return (
    <>
      {hasFilter && <div className="flex items-center py-4">{renderFilter?.(table)}</div>}
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

import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { flexRender, type Table } from "@tanstack/react-table"

interface DataTableHeaderProps<T> {
  table: Table<T>
}

const DataTableHeader = <T extends object>({ table }: DataTableHeaderProps<T>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}

export default DataTableHeader;
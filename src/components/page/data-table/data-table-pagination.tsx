import { type Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useViewport } from "@/hooks"
import useLocale from "@/locale/use-locale"

interface DataTablePaginationProps<T> {
  table: Table<T>
}

const DataTablePagination = <T extends object>({ table }: DataTablePaginationProps<T>) => {
  const { lang } = useLocale()

  const { isMobile } = useViewport()

  const content = `${table.getFilteredSelectedRowModel().rows.length} ${lang.common.pagination.of} ${table.getFilteredRowModel().rows.length} ${lang.common.pagination.rows} ${lang.common.pagination.selected}`

  return (
    <div className="flex items-center justify-center py-4 lg:justify-between">
      {!isMobile && <div className="flex-1 text-sm text-muted-foreground">{content}</div>}

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="flex items-center">
          <p className="mr-1 text-sm font-medium">
            {lang.common.pagination.rowsLimit}
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-17.5">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-center text-sm font-medium">
          {lang.common.pagination.page} {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DataTablePagination

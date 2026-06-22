import type { FC } from "react"
import { EPageType } from "@/data/page"
import { Outlet, useLocation } from "react-router"
import { routerPaths } from "@/lib/router/paths"
import { getMarketTabItems } from "@/features/market/data"
import { getRouteSubname } from "@/lib/router/helper"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import ContentLayout from "@/components/page/content-layout"
import MarketFilter from "@/features/market/components/market-filter"
import MarketCart from "@/features/market/components/market-cart"
import useLocale from "@/locale/use-locale"

const MarketPage: FC = () => {
  const { lang } = useLocale()

  const location = useLocation()

  const pathname = getRouteSubname(location)

  const hasFilter = pathname === routerPaths.MARKET.PRODUCTS

  return (
    <ContentLayout
      pageType={EPageType.MARKET}
      tabItems={getMarketTabItems(lang)}
      actions={<MarketCart />}
      bottomContent={hasFilter && <MarketFilter />}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <Outlet />
      </div>
      <Pagination className="my-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </ContentLayout>
  )
}

export default MarketPage

import { createBrowserRouter } from "react-router"
import { routerPaths } from "./paths"
import HomePage from "@/pages/home"
import MarketPage from "@/pages/market"
import ManagementPage from "@/pages/management"
import NotFoundPage from "@/pages/404"

export const router = createBrowserRouter([
  {
    path: routerPaths.HOME,
    element: <HomePage />,
  },
  {
    path: routerPaths.MARKET,
    element: <MarketPage />,
  },
  {
    path: routerPaths.MANAGEMENT,
    element: <ManagementPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])

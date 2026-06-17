import { createBrowserRouter } from "react-router"
import { routerPaths } from "./paths"
import AppLayout from "@/AppLayout"
import HomePage from "@/pages/home"
import MarketPage from "@/pages/market"
import ManagementPage from "@/pages/management"
import NotFoundPage from "@/pages/404"
import BankPage from "@/pages/bank"
import PricingPage from "@/pages/pricing"
import MusicPage from "@/pages/music"

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
        path: routerPaths.BANK,
        element: <BankPage />,
      },
      {
        path: routerPaths.PRICING,
        element: <PricingPage />,
      },
      {
        path: routerPaths.MUSIC,
        element: <MusicPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])

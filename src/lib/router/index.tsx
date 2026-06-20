import { createBrowserRouter, Navigate } from "react-router"
import { routerPaths } from "./paths"
import AppLayout from "@/AppLayout"
import HomePage from "@/pages/home"
import MarketPage from "@/pages/market"
import ManagementPage from "@/pages/management"
import NotFoundPage from "@/pages/404"
import BankPage from "@/pages/bank"
import PricingPage from "@/pages/pricing"
import MusicPage from "@/pages/music"
import ProductPage from "@/pages/market/products"
import FurnituresPage from "@/pages/market/furnitures"
import PaintsPage from "@/pages/market/paints"
import FloorPage from "@/pages/market/floor"
import ToolsPage from "@/pages/market/tools"
import VehiclesPage from "@/pages/market/vehicles"

export const router = createBrowserRouter([
  {
    path: "/:locale?",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routerPaths.MARKET,
        element: <MarketPage />,
        children: [
          {
            index: true,
            element: <Navigate to={routerPaths.PRODUCTS} replace />
          },
          {
            path: routerPaths.PRODUCTS,
            element: <ProductPage />
          },
          {
            path: routerPaths.FURNITURES,
            element: <FurnituresPage />
          },
          {
            path: routerPaths.PAINTS,
            element: <PaintsPage />
          },
          {
            path: routerPaths.FLOOR,
            element: <FloorPage />
          },
          {
            path: routerPaths.TOOLS,
            element: <ToolsPage />
          },
          {
            path: routerPaths.VEHICLES,
            element: <VehiclesPage />
          },
        ]
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

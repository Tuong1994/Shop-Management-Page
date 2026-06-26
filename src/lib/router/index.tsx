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
import BillsPage from "@/pages/management/bills"
import GrowthPage from "@/pages/management/growth"
import StoragePage from "@/pages/management/storage"
import StaffsPage from "@/pages/management/staffs"

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
        path: routerPaths.MARKET.INDEX,
        element: <MarketPage />,
        children: [
          {
            index: true,
            element: <Navigate to={routerPaths.MARKET.PRODUCTS} replace />
          },
          {
            path: routerPaths.MARKET.PRODUCTS,
            element: <ProductPage />
          },
          {
            path: routerPaths.MARKET.FURNITURES,
            element: <FurnituresPage />
          },
          {
            path: routerPaths.MARKET.PAINTS,
            element: <PaintsPage />
          },
          {
            path: routerPaths.MARKET.FLOOR,
            element: <FloorPage />
          },
          {
            path: routerPaths.MARKET.TOOLS,
            element: <ToolsPage />
          },
          {
            path: routerPaths.MARKET.VEHICLES,
            element: <VehiclesPage />
          },
        ]
      },
      {
        path: routerPaths.MANAGEMENT.INDEX,
        element: <ManagementPage />,
        children: [
          {
            index: true,
            element: <Navigate to={routerPaths.MANAGEMENT.BILLS} replace />
          },
          {
            path: routerPaths.MANAGEMENT.BILLS,
            element: <BillsPage />
          },
          {
            path: routerPaths.MANAGEMENT.GROWTH,
            element: <GrowthPage />
          },
          {
            path: routerPaths.MANAGEMENT.STORAGE,
            element: <StoragePage />
          },
          {
            path: routerPaths.MANAGEMENT.STAFFS,
            element: <StaffsPage />
          },
        ]
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

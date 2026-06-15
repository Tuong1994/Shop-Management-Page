import { RouterProvider } from "react-router"
import { router } from "./routes"
import Header from "./components/page/header"

export function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App

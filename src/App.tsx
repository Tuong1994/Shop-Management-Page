import { RouterProvider } from "react-router"
import { authRouter, mainRouter } from "./lib/router"

export function App() {
  const isAuth = true

  return <RouterProvider router={isAuth ? mainRouter : authRouter} />
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [{
      path: "",
      element: <Home/>
    }]
  }

])

ReaxtDOM.createRoot(document.getElementById("root")).render(
  <React.StrictModeMode>
    <RouterProvider router = {router} />
    </React.StrictModeMode>
)
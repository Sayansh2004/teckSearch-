import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
  {
    "path":"/",
     "index":true,
      "element":<App />,
      children:[
        {
          "path":"/about",
          "element":
        }
      ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)

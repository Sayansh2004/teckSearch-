import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pricing from './components/pages/Pricing'
import Login from './components/pages/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'pricing',
        element: <Pricing/>,
      },
      {
        path: 'login',
        element: <Login/>,
      }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
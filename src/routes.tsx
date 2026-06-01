import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import App from './App.tsx'
import { Oal } from './pages/Oal.tsx'
import { NotFound } from './components/404 ERROR/404 ERROR.tsx'
import { LibroReclamaciones } from './pages/LibroReclamaciones.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/oal", element: <Oal /> },
      { path: "/libro-reclamaciones", element: <LibroReclamaciones /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])
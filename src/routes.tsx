import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import App from './App.tsx'
import { Oal } from './pages/Oal.tsx'
import { AuthModal } from './components/AuthModal/AuthModal.tsx'
import { NotFound } from './components/404 ERROR/404 ERROR.tsx'
import { LibroReclamaciones } from './pages/LibroReclamaciones.tsx'
import { HomePage } from './pages/HomePage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/store", element: <App /> },
      { path: "/login", element: <AuthModal /> },
      { path: "/oal", element: <Oal /> },
      { path: "/libro-reclamaciones", element: <LibroReclamaciones /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import App from './App.tsx'
import { Oal } from './pages/Oal.tsx'
import { AuthModal } from './components/AuthModal/AuthModal.tsx'
import { NotFound } from './components/404 ERROR/404 ERROR.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <AuthModal /> },
      { path: "/oal", element: <Oal /> },
      { path: "*", element: <Oal /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])
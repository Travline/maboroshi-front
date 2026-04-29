import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../presentation/layouts/MainLayout.tsx'
import App from '../App.tsx'
import { Oal } from '../presentation/pages/Oal.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/oal", element: <Oal /> },
      { path: "*", element: <Oal /> }, //Este para el 404 not found
    ]
  }
])
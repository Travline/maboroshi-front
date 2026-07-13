import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout.tsx'
import App from './App.tsx'
import { AuthModal } from './components/AuthModal/AuthModal.tsx'
import { NotFound } from './components/404 ERROR/404 ERROR.tsx'
import { LibroReclamaciones } from './pages/LibroReclamaciones.tsx'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'
import { PaymentPage } from './pages/PaymentPage.tsx'
import { SearchPage } from './pages/SearchPage.tsx'
import { CheckoutPage } from './pages/CheckoutPage'
import { ProfilePage } from './pages/ProfilePage.tsx'

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
      { path: "/profile", element: <ProfilePage /> },
      { path: "/libro-reclamaciones", element: <LibroReclamaciones /> },
      { path: "/products/:slug", element: <ProductDetailPage /> },
      { path: "/payment", element: <PaymentPage /> },
      { path: "/payment/checkout", element: <CheckoutPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);
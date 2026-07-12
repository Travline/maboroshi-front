import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { SearchPage } from "./pages/Search/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PlaceholderPage title="Explore" /> },
      { path: "buscar", element: <SearchPage /> },
      { path: "artistas", element: <PlaceholderPage title="Artistas" /> },
      { path: "pre-sale", element: <PlaceholderPage title="Pre-Sale" /> },
      { path: "tienda", element: <PlaceholderPage title="Tienda" /> },
      { path: "tienda/:id", element: <PlaceholderPage title="Producto" /> },
      { path: "a11y", element: <PlaceholderPage title="A11y" /> },
      { path: "info", element: <PlaceholderPage title="Info" /> },
      { path: "vinyl/:id", element: <PlaceholderPage title="Vinyl Detail" /> },
      { path: "cd/:id", element: <PlaceholderPage title="CD Detail" /> },
      { path: "profile", element: <PlaceholderPage title="Profile" /> },
      { path: "GaboVoid", element: <PlaceholderPage title="GaboVoid" /> },
      { path: "*", element: <PlaceholderPage title="404 — Página no encontrada" /> },
    ],
  },
]);

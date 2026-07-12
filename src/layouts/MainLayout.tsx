import SiteHeader from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ToolBar } from "../components/ToolBar/ToolBar";
import { NavDrawer } from "../components/NavDrawer/NavDrawer";
import { NavCart } from "../components/NavCart/NavCart";
import { useOverlayLock } from "../hooks/useOverlayLock";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  useOverlayLock();

  return (
    <>
      <SiteHeader />
      <Outlet />
      <ToolBar />
      <NavDrawer />
      <NavCart />
      <Footer />
    </>
  );
};

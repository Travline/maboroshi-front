import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToolbarModal } from "../components/ToolbarModal/ToolbarModal";
import Footer from '../components/Footer/Footer'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <ToolbarModal />
      <Outlet />
      <Footer />
    </>
  );
};
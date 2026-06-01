import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
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
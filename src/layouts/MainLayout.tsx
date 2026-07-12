import { useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToolBar } from "../components/ToolBar/ToolBar";
import Footer from '../components/Footer/Footer';
import { AccessibilityButton } from "../components/Accessibility/AccessibilityButton";
import { AccessibilityMenu } from "../components/Accessibility/AccessibilityMenu";
import { NavDrawer } from "../components/NavDrawer/NavDrawer";

export const MainLayout = () => {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <>
      <Header />
      <ToolBar />
      <NavDrawer />
      <AccessibilityButton
        onClick={() => setAccessibilityOpen(true)}
      />

      <AccessibilityMenu
        isOpen={accessibilityOpen}
        onClose={() => setAccessibilityOpen(false)}
      />

      <Outlet />
      <Footer />
    </>
  );
};
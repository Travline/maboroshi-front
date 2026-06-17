import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToolbarModal } from "../components/ToolbarModal/ToolbarModal";
import Footer from '../components/Footer/Footer';
import { AccessibilityButton } from "../components/Accessibility/AccessibilityButton";
import { AccessibilityMenu } from "../components/Accessibility/AccessibilityMenu";

export const MainLayout = () => {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <>
      <Header />
      <ToolbarModal />
      
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
import { useLocation } from "react-router-dom";
import { getNavItemByPath } from "../../config/navigation";
import { useThemeStore } from "../../stores/themeStore";
import { useUiStore } from "../../stores/uiStore";
import "./ToolBar.css";

function ThemeToggleIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-0.00390625" y="0.214172" width="12.8193" height="12.8193" fill="currentColor" />
    </svg>
  );
}

function DrawerDotsIcon() {
  return (
    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5752" cy="1.75" r="1.75" fill="currentColor" />
      <circle cx="15.4014" cy="1.75" r="1.75" fill="currentColor" />
      <circle cx="1.75" cy="1.75012" r="1.75" fill="currentColor" />
    </svg>
  );
}

export function ToolBar() {
  const location = useLocation();
  const isDrawerOpen = useUiStore((state) => state.isDrawerOpen);
  const isCartOpen = useUiStore((state) => state.isCartOpen);
  const isInfoOpen = useUiStore((state) => state.isInfoOpen);
  const openDrawer = useUiStore((state) => state.openDrawer);
  const closeDrawer = useUiStore((state) => state.closeDrawer);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const currentNav = getNavItemByPath(location.pathname);
  const showPageScrim = isDrawerOpen || isCartOpen || isInfoOpen;

  return (
    <>
      {/* Scrim para oscurecer el fondo cuando hay un panel abierto */}
      <div className="nav-module__5O4h5a__drawerScrim" style={{opacity: showPageScrim ? 0.6 : 0, pointerEvents: showPageScrim ? "auto" : "none", transition: "opacity 0.35s ease",}} onClick={closeDrawer} aria-hidden={!showPageScrim}/>

      {!isDrawerOpen && (
        <div className="nav-module__5O4h5a__toolbar" style={{ opacity: 1 }}>
          <button type="button" className="nav-module__5O4h5a__toolbarDarkModeToggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            <ThemeToggleIcon />
          </button>

          <button type="button" className="nav-module__5O4h5a__toolbarDrawerToggle" onClick={openDrawer} aria-expanded={isDrawerOpen}>
            <span className="nav-module__5O4h5a__toolbarDrawerToggleLabel caps dot-array" style={{ opacity: 1, transform: "none" }}>
              {currentNav.shortLabel}
            </span>
            <span style={{ pointerEvents: "none" }}>
              <DrawerDotsIcon />
            </span>
          </button>
        </div>
      )}
    </>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useThemeStore } from "../../stores/themeStore";
import { useUiStore } from "../../stores/uiStore";
import { NAV_ITEMS, getNavItemByPath } from "../../config/navigation";

function ThemeToggleIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-0.00390625" y="0.214172" width="12.8193" height="12.8193" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0459 1.40075L10.6451 0L6.02295 4.62219L1.40075 0L0 1.40075L4.62219 6.02295L0 10.6451L1.40075 12.0459L6.02295 7.4237L10.6451 12.0459L12.0459 10.6451L7.4237 6.02295L12.0459 1.40075Z" fill="currentColor"/>
    </svg>
  );
}

export function NavDrawer() {
  const location = useLocation();
  const isDrawerOpen = useUiStore((state) => state.isDrawerOpen);
  const isCartOpen = useUiStore((state) => state.isCartOpen);
  const isInfoOpen = useUiStore((state) => state.isInfoOpen);
  const closeDrawer = useUiStore((state) => state.closeDrawer);
  const openCart = useUiStore((state) => state.openCart);
  const openInfo = useUiStore((state) => state.openInfo);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const pathname = location.pathname;

  const defaultIndex = NAV_ITEMS.findIndex((item) => item.path === getNavItemByPath(pathname).path);
  let activeIndex = defaultIndex;

  if (activeIndex === -1) activeIndex = 0;
  const rotation = 450 - activeIndex * 45;

  const handleLinkClick = () => {
    setTimeout(() => {
      closeDrawer();
    }, 700);
  };

  return (
    <nav className="nav-module__5O4h5a__drawer" style={{clipPath: isDrawerOpen ? "inset(0%)" : "inset(50% 0 50% 0)",transform: "none",pointerEvents: isDrawerOpen ? "auto" : "none",}}>
      <div className="nav-module__5O4h5a__drawerMenuScrim" style={{opacity: isCartOpen || isInfoOpen ? 0.72 : 0,pointerEvents: isCartOpen || isInfoOpen ? "auto" : "none",transition: "opacity 0.35s ease",}}onClick={closeDrawer}/>

      <header className="nav-module__5O4h5a__drawerHeader">

        <button type="button" className="nav-module__5O4h5a__drawerToggleDarkModeButton" onClick={toggleTheme} aria-label="Cambiar de modo">
          <ThemeToggleIcon />
        </button>

        <div className="nav-module__5O4h5a__drawerTitle caps dot-array">Maboroshi</div>

        <button type="button" className="nav-module__5O4h5a__toggle" onClick={closeDrawer} aria-label="Cerrar">
          <CloseIcon />
        </button>

      </header>

      <div className="nav-module__5O4h5a__drawerMain">
        <div className="nav-module__5O4h5a__navCircle">
          <div className="nav-module__5O4h5a__navCircleInner" />
          <div className="nav-module__5O4h5a__navIndicator" />
        </div>

        <div className="nav-module__5O4h5a__navContainer" style={{transform: `rotate(${rotation}deg)`,transition: "transform 0.75s var(--ease-out-quart)",}}>
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeIndex === index;
            const activeClass = isActive ? " nav-module__5O4h5a__navLabelActive" : "";

            if (item.isAction) {
              return (
                <a key={item.path} className={`nav-module__5O4h5a__navLabel caps dot-array${activeClass}`} href={item.path} onClick={(e) => { e.preventDefault(); if (item.actionName === "cart") openCart(); if (item.actionName === "info") openInfo();}}> {item.label}</a>
              );
            }

            return (
              <Link key={item.path} className={`nav-module__5O4h5a__navLabel caps dot-array${activeClass}`} to={item.path} onClick={handleLinkClick}>{item.label}</Link>
            );
          })}
        </div>

        <a className="nav-module__5O4h5a__navSmiley" href="/pacman">
          <img alt="Smiley" loading="lazy" width="36" height="36" decoding="async" src="/assets/smiley.gif" style={{ color: "transparent" }}/>
          <span className="sr-only">Play Pacman</span>
        </a>
      </div>

      <footer className="nav-module__5O4h5a__drawerFooter">

        <button type="button" onClick={openInfo} className="nav-module__5O4h5a__drawerFooterButton" aria-label="Abrir info">
          <span className="sr-only">favoritos</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24">
              <path d="M16.77 3.88a4 4 0 014 4 3.81 3.81 0 01-.26 1.4 8.2 8.2 0 01-.82 1.37L12 18.56l-7.63-7.89a9.41 9.41 0 01-.83-1.39 3.83 3.83 0 01-.25-1.38 4 4 0 017.33-2.3l1.42 2 1.43-2a4 4 0 013.3-1.72m0-1.79A5.76 5.76 0 0012 4.57 5.76 5.76 0 001.54 7.9a5.56 5.56 0 00.37 2A11.57 11.57 0 003 11.82l9 9.27 9-9.27a11.57 11.57 0 001.12-1.88 5.81 5.81 0 00-5.41-7.82z"></path>
            </svg>
        </button>

        <a href="/login" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">perfil</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></circle>
            </svg>
        </a>

        <button type="button" onClick={() => { openCart(); }} className="nav-module__5O4h5a__drawerFooterButton" aria-label="Abrir carrito">
          <span className="sr-only">carrito</span>
            <svg fill="currentColor" width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <circle cx="176" cy="416" r="32"></circle>
              <circle cx="400" cy="416" r="32"></circle>
              <polygon points="167.78 304 429.12 304 467.52 112 133.89 112 125.42 64 32 64 32 96 98.58 96 146.58 368 432 368 432 336 173.42 336 167.78 304"></polygon>
          </svg>
        </button>

      </footer>
    </nav>
  );
}

import { useEffect } from "react";
import { useUiStore } from "../stores/uiStore";

export function useOverlayLock() {
  const isDrawerOpen = useUiStore((state) => state.isDrawerOpen);
  const isCartOpen = useUiStore((state) => state.isCartOpen);
  const closeDrawer = useUiStore((state) => state.closeDrawer);
  const closeCart = useUiStore((state) => state.closeCart);

  const isLocked = isDrawerOpen || isCartOpen;

  useEffect(() => {
    if (!isLocked) {
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (isCartOpen) {
        closeCart();
        return;
      }

      closeDrawer();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLocked, isCartOpen, closeCart, closeDrawer]);
}

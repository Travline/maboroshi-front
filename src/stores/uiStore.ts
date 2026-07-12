import { create } from "zustand";

type UiState = {
  isDrawerOpen: boolean;
  isCartOpen: boolean;
  isInfoOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  openCart: () => void;
  closeCart: () => void;
  openInfo: () => void;
  closeInfo: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isDrawerOpen: false,
  isCartOpen: false,
  isInfoOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false, isCartOpen: false, isInfoOpen: false }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  openCart: () => set({ isCartOpen: true, isInfoOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  openInfo: () => set({ isInfoOpen: true, isCartOpen: false }),
  closeInfo: () => set({ isInfoOpen: false }),
}));

import { create } from "zustand";

type ToolbarModalStore = {
  isOpened: boolean,
  open: () => void,
  close: () => void
} 

export const useToolbarModalStore = create<ToolbarModalStore>((set) => ({
  isOpened: false,
  open: () => set((state) => (state.isOpened ? {} : {isOpened: true})),
  close: () => set((state) => (!state.isOpened ? {} : {isOpened: false})),
}))
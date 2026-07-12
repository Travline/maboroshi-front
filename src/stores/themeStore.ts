import { create } from "zustand";

type ThemePreference = "system" | "light" | "dark";

type ThemeState = {
  preference: ThemePreference;
  toggleTheme: () => void;
};

const THEME_MEDIA = "(prefers-color-scheme: dark)";

function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference === "system") {
    return window.matchMedia(THEME_MEDIA).matches ? "dark" : "light";
  }

  return preference;
}

function applyTheme(preference: ThemePreference) {
  const theme = resolveTheme(preference);
  document.documentElement.dataset.theme = theme;
  
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
    document.documentElement.classList.remove("light-mode");
  } else {
    document.documentElement.classList.add("light-mode");
    document.documentElement.classList.remove("dark-mode");
  }
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  preference: "system",
  toggleTheme: () => {
    const resolved = resolveTheme(get().preference);
    const nextPreference = resolved === "dark" ? "light" : "dark";
    applyTheme(nextPreference);
    set({ preference: nextPreference });
  },
}));

export function initTheme() {
  const media = window.matchMedia(THEME_MEDIA);

  const sync = () => applyTheme(useThemeStore.getState().preference);

  sync();
  media.addEventListener("change", sync);
  useThemeStore.subscribe((state, previous) => {
    if (state.preference !== previous.preference) {
      sync();
    }
  });
}

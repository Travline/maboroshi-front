export type NavItem = {
  path: string;
  label: string;
  shortLabel: string;
  isAction?: boolean;
  actionName?: "cart" | "info";
};

export const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "1. Explorar", shortLabel: "Explorar" },
  { path: "/buscar", label: "2. Buscar", shortLabel: "Buscar" },
  { path: "/artistas", label: "3. Artistas", shortLabel: "Artistas" },
  { path: "/pre-sale", label: "4. Pre-Sale", shortLabel: "Pre-Sale" },
  { path: "/tienda", label: "5. Tienda", shortLabel: "Tienda" },
  { path: "/a11y", label: "A11y", shortLabel: "A11y" },
  { path: "/info", label: "Info (i)", shortLabel: "Info" },
];

export function getNavItemByPath(pathname: string): NavItem {
  // Si estamos en el detalle de un vinilo o CD, asociarlo a la seccion Shop
  if (pathname.startsWith("/vinyl") || pathname.startsWith("/cd")) {
    return NAV_ITEMS[4]; // Retorna el objeto de Shop
  }

  const match =
    NAV_ITEMS.find((item) =>
      item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
    ) ?? NAV_ITEMS[0];

  return match;
}

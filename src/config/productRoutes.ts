import type { ProductType } from '../models/Product';

/**
 * Devuelve la ruta interna de navegacion segun el tipo de producto centralizar aqui hace que cambiar una ruta no afecte a multiples componentes.
 */
export function getProductPath(id: string, type: ProductType): string {
  switch (type) {
    case 'vinyl':
      return `/vinyl/${id}`;
    case 'cd':
      return `/cd/${id}`;
    default:
      return `/tienda/${id}`;
  }
}

/**
 * ProductType define las categorías del catalogo se usa para determinar la ruta de navegacion del producto.
 */
export type ProductType = 'vinyl' | 'cd' | 'bundle' | 'apparel' | 'accessory' | 'digital';

export interface Product {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  price: number;
  type: ProductType;
}

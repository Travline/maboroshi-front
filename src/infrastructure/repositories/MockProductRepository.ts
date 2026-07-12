import type { IProductRepository } from '../../domain/repositories/IProductRepository';
import type { Product } from '../../domain/models/Product';

/**
 * Adaptador mock que simula la API de Spring reemplazar esta implementacion con ApiProductRepository y cambiar una sola linea en useProducts.ts — el resto de la app no cambia.
 */
const MOCK_PRODUCTS: Product[] = [
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  },
  {
    id: 'vinyl-omakase',
    name: 'Omakase Vinyl',
    slug: 'omakase-vinyl',
    imageUrl:
      '/public/assets/omakase.png',
    price: 49.99,
    type: 'vinyl',
  }

];

export class MockProductRepository implements IProductRepository {
  async getAll(): Promise<Product[]> {
    // Simula latencia de red para detectar estados de loading durante desarrollo
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_PRODUCTS;
  }

  async getById(id: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return MOCK_PRODUCTS.find((p) => p.id === id) ?? null;
  }
}

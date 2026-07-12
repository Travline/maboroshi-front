import type { Product } from '../models/Product';

/**
 * Puerto de dominio para acceder al catalogo de productos las implementaciones deben cumplir este contrato el resto de la app solo conoce esta interfaz, nunca el adaptador concreto.
 */
export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
}

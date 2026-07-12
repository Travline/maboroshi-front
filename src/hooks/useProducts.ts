import { useState, useEffect } from 'react';
import type { Product } from '../domain/models/Product';
import { MockProductRepository } from '../infrastructure/repositories/MockProductRepository';

/**
 * Instancia singleton del repositorio Para conectar la API, cambia MockProductRepository por ApiProductRepository el hook y todos los consumidores quedan intactos.
 */
const productRepository = new MockProductRepository();

type UseProductsResult = {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
};

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    productRepository
      .getAll()
      .then((data) => {
        if (!cancelled) setProducts(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err : new Error('Error desconocido'));
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    // Cleanup para evitar setState en componente desmontado
    return () => {
      cancelled = true;
    };
  }, []);

  return { products, isLoading, error };
}

import { Hero } from "../components/Hero/Hero";
import { ToolbarModal } from "../components/ToolbarModal/ToolbarModal";

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../models/Card";

export const HomePage = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  if (products.length === 0) {
    return <h1>Cargando...</h1>;
  }

  const randomAlbum =
    products[Math.floor(Math.random() * products.length)];
  return (
    <>
      <ToolbarModal />
      <Hero album={randomAlbum} />
    </>
  );
};
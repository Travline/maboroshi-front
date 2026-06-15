import { Hero } from "../components/Hero/Hero";
import { ToolbarModal } from "../components/ToolbarModal/ToolbarModal";

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../models/Card";

export const HomePage = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      setCurrentIndex(
        Math.floor(Math.random() * products.length)
      );
    }
  }, [products]);

  const nextAlbum = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % products.length
    );
  };

  const previousAlbum = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

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

  useEffect(() => {

    if (products.length === 0) return;

    const interval = setInterval(() => {

      setCurrentIndex((prev) =>
        (prev + 1) % products.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [products]);

  if (products.length === 0) {
    return <h1>Cargando...</h1>;
  }



  const currentAlbum = products[currentIndex];

  const leftAlbum =
    products[
    (currentIndex - 1 + products.length) %
    products.length
    ];

  const rightAlbum =
    products[
    (currentIndex + 1) %
    products.length
    ];

  return (
    <>
      <ToolbarModal />
      <Hero
        album={currentAlbum}
        leftAlbum={leftAlbum}
        rightAlbum={rightAlbum}
        nextAlbum={nextAlbum}
        previousAlbum={previousAlbum}
      />
    </>
  );
};
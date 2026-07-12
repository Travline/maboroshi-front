import { useEffect, useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { ToolBar } from "../components/ToolBar/ToolBar";
import { useProducts } from "../hooks/useProducts";
import styles from "./HomePage.module.css";
import { NavDrawer } from "../components/NavDrawer/NavDrawer";

export const HomePage = () => {
  const { products, isLoading, error } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products]);

  const nextAlbum = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const previousAlbum = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  if (isLoading) return <main className={styles.hero}><h1>Cargando...</h1></main>;
  if (error) return <main className={styles.hero}><h1>Error al cargar los productos</h1></main>;
  if (products.length === 0) return <main className={styles.hero}><h1>No hay productos disponibles</h1></main>;

  const currentAlbum = products[currentIndex];
  const leftAlbum = products[(currentIndex - 1 + products.length) % products.length];
  const rightAlbum = products[(currentIndex + 1) % products.length];

  return (
    <>
      <ToolBar />
      <NavDrawer/>
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyPurchasesPage.module.css";
import { ENV } from "../api/environment";

// 1. Definición estricta de la estructura del ítem comprado
interface PurchasedItem {
  productId: string;
  productName: string;
  slug: string;
  productImage: string;
  quantity: number;
  salePrice: number;
  date: string;
  adress: string;
}

// 2. Función asíncrona simulada para traer los datos del API
// Reemplaza esta simulación con tu llamada real a tu servicio de backend/API
const fetchPurchasedItems = async (): Promise<PurchasedItem[]> => {
  // Simular delay de red de 1 segundo
  const resApi = await fetch(`${ENV.VITE_API_URL}/v1/order`, {
    method: "GET",
    credentials: "include"
  })

  const data = await resApi.json()

  return data
};

export const MyPurchasesPage: React.FC = () => {
  const [purchases, setPurchases] = useState<PurchasedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchPurchasedItems();
        if (isMounted) {
          setPurchases(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("No se pudieron cargar las compras.");
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className={styles.loading}>Cargando historial de compras...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis Compras</h1>

      {purchases.length === 0 ? (
        <div className={styles.error}>Aún no has realizado ninguna compra.</div>
      ) : (
        <div className={styles.list}>
          {purchases.map((item) => (
            <div key={item.productId} className={styles.item}>

              {/* Contenedor 1:1 rodeado por un Link para la imagen */}
              <Link to={`/productos/${item.slug}`} className={styles.imageWrapper}>
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className={styles.image}
                  loading="lazy"
                />
              </Link>

              <div className={styles.info}>
                {/* Nombre del producto envuelto en Link */}
                <Link to={`/productos/${item.slug}`} className={styles.productLink}>
                  {item.productName}
                </Link>

                <div className={styles.metadata}>
                  <span><strong>Fecha:</strong> {item.date}</span>
                  <span><strong>Dirección de entrega:</strong> {item.adress}</span>
                  <span><strong>Cantidad:</strong> {item.quantity} ud.</span>

                  <div className={styles.priceDetails}>
                    Total: S/ {item.salePrice.toFixed(2)}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};
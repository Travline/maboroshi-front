import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyPurchasesPage.module.css";

// 1. Definición estricta de la estructura del ítem comprado
interface PurchasedItem {
  id: string;
  productName: string;
  productSlug: string;
  productImage: string;
  quantity: number;
  finalPrice: number; // Monto acumulado final por este item (ej: precio unitario * cantidad)
  purchaseDate: string;
  shippingAddress: string;
}

// 2. Función asíncrona simulada para traer los datos del API
// Reemplaza esta simulación con tu llamada real a tu servicio de backend/API
const fetchPurchasedItems = async (): Promise<PurchasedItem[]> => {
  // Simular delay de red de 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "compra-101",
      productName: "Teclado Mecánico Custom 60%",
      productSlug: "teclado-mecanico-custom-60",
      productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
      quantity: 1,
      finalPrice: 350.00,
      purchaseDate: "2026-07-10",
      shippingAddress: "Av. Larco 123, Miraflores, Lima"
    },
    {
      id: "compra-102",
      productName: "Mouse Pad Gamer XL (Negro)",
      productSlug: "mouse-pad-gamer-xl-negro",
      productImage: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop",
      quantity: 2,
      finalPrice: 90.00,
      purchaseDate: "2026-07-10",
      shippingAddress: "Av. Larco 123, Miraflores, Lima"
    },
    {
      id: "compra-103",
      productName: "Cable Aviador Tipo C Coiled",
      productSlug: "cable-aviador-tipo-c-coiled",
      productImage: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop",
      quantity: 1,
      finalPrice: 75.00,
      purchaseDate: "2026-06-28",
      shippingAddress: "Jr. Batallón Callao 456, Surco"
    }
  ];
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
            <div key={item.id} className={styles.item}>

              {/* Contenedor 1:1 rodeado por un Link para la imagen */}
              <Link to={`/productos/${item.productSlug}`} className={styles.imageWrapper}>
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className={styles.image}
                  loading="lazy"
                />
              </Link>

              <div className={styles.info}>
                {/* Nombre del producto envuelto en Link */}
                <Link to={`/productos/${item.productSlug}`} className={styles.productLink}>
                  {item.productName}
                </Link>

                <div className={styles.metadata}>
                  <span><strong>Fecha:</strong> {item.purchaseDate}</span>
                  <span><strong>Dirección de entrega:</strong> {item.shippingAddress}</span>
                  <span><strong>Cantidad:</strong> {item.quantity} ud.</span>

                  <div className={styles.priceDetails}>
                    Total: S/ {item.finalPrice.toFixed(2)}
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
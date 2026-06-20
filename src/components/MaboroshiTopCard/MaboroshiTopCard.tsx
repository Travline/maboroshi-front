import { useEffect, useState } from "react";
import styles from "./MaboroshiTopCard.module.css";
import { ENV } from "../../api/environment";

interface DetailedProductType {
  productName: string;
  artist: string;
  realPrice: number;
  salePrice: number;
  slug: string;
  images: string[];
  tracklist: string[];
}

export const MaboroshiTopCard = () => {
  const [product, setProduct] = useState<DetailedProductType | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRandomProduct = async () => {
      try {
        setLoading(true);
        const listResponse = await fetch(`${ENV.VITE_API_URL}/v1/catalog/products`);
        if (!listResponse.ok) throw new Error("Error al obtener productos");

        const catalogProducts = await listResponse.json();
        if (!catalogProducts || catalogProducts.length === 0) return;

        const randomIndex = Math.floor(Math.random() * catalogProducts.length);
        const randomProductSelected = catalogProducts[randomIndex];

        const detailResponse = await fetch(
          `${ENV.VITE_API_URL}/v1/catalog/products/${randomProductSelected.slug}`
        );
        const detailedData = await detailResponse.json();
        setProduct(detailedData);
      } catch (error) {
        console.error("Error en MaboroshiTopCard:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRandomProduct();
  }, []);

  if (loading || !product) {
    return (
      <div className={`${styles.cardContainer} dot-array`}>
        <h1 className={styles.topTitle}>MABOROSHI TOP</h1>
        <div className={styles.mainRow}>
          <span style={{ color: 'var(--color-gray-dark)', fontSize: '1.4rem' }}>CARGANDO...</span>
        </div>
      </div>
    );
  }

  const displayPrice = product.salePrice > 0 ? product.salePrice : product.realPrice;
  const mainImage = product.images?.[0] ?? "/assets/logo.png";

  return (
    <div className={`${styles.cardContainer} dot-array`}>
      <h1 className={styles.topTitle}>
        {showDetails ? "MABOROSHI NEWS" : "MABOROSHI TOP"}
      </h1>

      <div className={`${styles.mainRow} ${showDetails ? styles.showLinesInFront : styles.showLinesBehind}`}>

        <div className={styles.leftGroup}>
          <span className={styles.sideLabel}>{product.productName.toUpperCase()}</span>
          <span className={styles.sideLabel}>
            {showDetails ? `S/. ${Number(displayPrice).toFixed(2)}` : product.artist.toUpperCase()}
          </span>
        </div>

        <div className={styles.imageContainer}>
          <div className={`${styles.imageWrapper} ${showDetails ? styles.blurred : ""}`}>
            <img src={mainImage} alt={product.productName} />
          </div>
        </div>

        <div className={styles.rightGroup}>
          <button
            className={styles.sideLabel}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowDetails(!showDetails)}
          >
            DETALLES
          </button>
          {showDetails && (
            <div className={styles.tracklistPanel}>
              <div className={styles.albumHeader}>
                <h2>{product.productName.toUpperCase()}</h2>
                <p>{product.artist.toUpperCase()}</p>
                <span className={styles.tracklistTitle}>TRACKLIST</span>
              </div>

              <div className={styles.tracksContainer}>
                {product.tracklist && product.tracklist.length > 0 ? (
                  <ol className={styles.tracks}>
                    {product.tracklist.map((track, index) => (
                      <li key={index}>{index + 1}. {track.toUpperCase()}</li>
                    ))}
                  </ol>
                ) : (
                  <p style={{ color: 'var(--color-gray-dark)' }}>NO TRACKLIST AVAILABLE</p>
                )}
              </div>
            </div>
          )}

          <button
            className={styles.detailTrigger}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "-" : "+"}
          </button>
        </div>

      </div>

      <button className={`${styles.cartButton} dot-array ${showDetails ? styles.cartActive : ""}`}>
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};
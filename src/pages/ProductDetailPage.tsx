import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail, getProducts, type DetailedProductType } from "../api/products";
import type { Product } from "../models/Card";
import { Cards } from "../components/Cards/Cards";
import styles from "./ProductDetailPage.module.css";

interface CustomDetailedProductType extends DetailedProductType {
    spotifyId?: string;
}

export const ProductDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<CustomDetailedProductType | null>(null);
    const [recommended, setRecommended] = useState<Product[]>([]);
    const [activeImage, setActiveImage] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const loadPageData = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                const detailData = await getProductDetail(slug);
                setProduct(detailData);
                setActiveImage(detailData.images?.[0] || "");

                const allProducts = await getProducts();
                setRecommended(allProducts.filter(p => p.id !== detailData.id).slice(0, 4));
            } catch (error) {
                console.error("Error al cargar el detalle del disco:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPageData();
    }, [slug]);

    useEffect(() => {
        if (showInfo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [showInfo]);

    if (loading) return <h1 className={styles.loading}>CARGANDO DISCO...</h1>;
    if (!product) return <h1 className={styles.loading}>DISCO NO ENCONTRADO</h1>;

    const displayPrice = product.salePrice > 0 ? product.salePrice : product.realPrice;

    return (
        <main className={`${styles.container} ${showInfo ? styles.infoOverlayActive : ""}`}>
            <div className={`${styles.upperSection} ${showInfo ? styles.blurredBackground : ""}`}>
                <div className={styles.imageColumn}>
                    <div className={styles.mainImageWrapper}>
                        <img src={activeImage} alt={product.productName} className={styles.mainImage} />
                    </div>
                    <div className={styles.thumbnailsGrid}>
                        {product.images?.map((img, index) => (
                            <button
                                key={index}
                                className={`${styles.thumbButton} ${activeImage === img ? styles.thumbActive : ""}`}
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img} alt={`preview-${index}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.infoColumn}>
                    <div className={styles.meta}>
                        <h1 className={styles.productName}>
                            {`${product.productName} ${product.type || ""}`.trim().toUpperCase()}
                        </h1>
                        <p className={styles.artistName}>{product.artist.toUpperCase()}</p>
                        <p className={styles.price}>S/.{Number(displayPrice).toFixed(2)}</p>
                    </div>

                    <div className={styles.actionsBar}>
                        <button className={styles.actionBtn} aria-label="Añadir al carrito">+</button>
                        <button className={styles.actionBtn} aria-label="Compartir">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                        </button>
                        <button className={styles.infoBadgeBtn} onClick={() => setShowInfo(true)}>
                            INFO
                        </button>
                    </div>

                    <div className={styles.detailsBlock}>
                        <span className={styles.blockLabel}>PREVIEW</span>

                        {product.spotifyId ? (
                            <iframe
                                data-testid="embed-iframe"
                                className={styles.spotifyPlayer}
                                style={{ borderRadius: "12px" }}
                                src={`https://open.spotify.com/embed/album/${product.spotifyId}`}
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        ) : (
                            <p className={styles.noDetails}>PREVIEW NO DISPONIBLE</p>
                        )}
                    </div>
                </div>
            </div>

            {showInfo && product.tracklist && (
                <div className={styles.fullscreenTracks}>
                    <button className={styles.closeInfoBtn} onClick={() => setShowInfo(false)}>✕</button>
                    <span className={styles.blockLabel}>TRACKLIST</span>
                    <ol className={styles.tracklistExtended}>
                        {product.tracklist.map((track, index) => (
                            <li key={index}>
                                <span className={styles.trackNumber}>{index + 1}.</span> {track.toUpperCase()}
                            </li>
                        ))}
                    </ol>
                </div>
            )}

            <section className={styles.recommendedSection}>
                <h2 className={styles.sectionTitle}>TAMBIÉN DISPONIBLE</h2>
                <div className={styles.recommendedGrid}>
                    {recommended.map((item) => (
                        <Cards key={item.id} product={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};
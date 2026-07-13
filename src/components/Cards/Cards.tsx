import styles from "./Cards.module.css"
import type { Product } from "../../models/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ENV } from "../../api/environment";
import { useCartStore } from "../../stores/cartStore";

interface Props {
    product: Product;
    viewMode?: 'grid' | 'list';
}

export const Cards = ({ product, viewMode = 'grid' }: Props) => {
    const [hover, setHover] = useState(false);
    const { addItem } = useCartStore()

    async function addToCart() {
        const res = await fetch(`${ENV.VITE_API_URL}/v1/cart/${product.id}`)
        const newItem = await res.json()
        addItem({
            id: newItem.id,
            productId: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.image
        })
    }

    return (
        <div className={styles.Card}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Link to={`/products/${product.slug}`}>
                <div className={styles.ImgContainer}>
                    <img className={styles.ImgCard} src={hover ? product.hoverImage : product.image} alt="Loading..." />
                </div>

                <div className={viewMode === 'list' ? styles.ContainerHidden : styles.InfoCard}>
                    <h1>{product.name}</h1>
                    <h2>{product.artist}</h2>
                    <h3 className={styles.PriceCard + " dot-array"}>S/.{Number(product.price ?? 0).toFixed(2)}</h3>
                </div>

                <div className={viewMode === 'grid' ? styles.ContainerHidden : ""}>
                    <div className={styles.InteractionContainer}>
                        <div className={styles.Like}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                        </div>
                        <div className={styles.Share}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                        </div>
                        <div onClick={addToCart} className={styles.Cart + " dot-array"}>
                            <h2>AÑADIR AL CARRITO</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
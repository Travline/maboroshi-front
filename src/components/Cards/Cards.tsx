import styles from "./Cards.module.css"
import type { Product } from "../../models/Card";

interface props {
    product: Product;
}

export const Cards = ({ product }: props) => {
    return (
        <div className={styles.Card}>
            <a href="">
                <img className={styles.ImgCard} src={product.image} alt="Loading..." />
                <h3 className={styles.NameCard}>{product.name}</h3>
                <h3 className={styles.ArtistCard}>{product.artist}</h3>
                <h3 className={styles.PriceCard}>S/.{product.price.toFixed(2)}</h3>
            </a>
        </div>
    )
}

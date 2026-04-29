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
                <div className={styles.InfoCard}>
                    <h3>{product.name}</h3>
                    <h2>{product.artist}</h2>
                    <h3 className={styles.PriceCard}>S/.{Number(product.price ?? 0).toFixed(2)}</h3>
                </div>
            </a>
        </div>
    )
}

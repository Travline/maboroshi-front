import { Cards } from '../Cards/Cards';
import styles from "./Collections.module.css"
import type { Product } from "../../models/Card";

interface props {
    products: Product[];
}

export const Collection = ({ products }: props) => {
    return (
        <div className={styles.Slider}>
            <div className={styles.Tittle}>
                <h1>MABOROSHI COLLECTIONS</h1>
                <a href="">Ver todo &gt; </a>
            </div>
            <div className={styles.Products}>
                {products.map((product) => (
                    <Cards key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
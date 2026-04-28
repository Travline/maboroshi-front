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

            <div className={styles.ProductsContainer}>
                <div className={styles.Arrow}>
                    <button className={styles.LeftArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-back-icon lucide-skip-back"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" /><path d="M3 20V4" /></svg>
                    </button>
                    <button className={styles.RightArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-forward-icon lucide-skip-forward"><path d="M21 4v16" /><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" /></svg>
                    </button>
                </div>
                <div className={styles.Products}>
                    {products.map((product) => (
                        <Cards key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

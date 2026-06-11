import styles from './Collections.module.css';

export const Collections = () => {
    return (
        <div className={styles.Container}>
            <h1 className=' dot-array'>COLLECCIONES</h1>
            <div className={styles.CollectionsContainer}>
                    <div className={styles.Collection}>
                        <a href="">
                            <img src="https://external-preview.redd.it/e-t-d-s-cd-player-v0-fyp9tSSVjOqbTVPNbKm9iXa3s-Blh4meS0EbqKRGJZo.png?width=1080&crop=smart&auto=webp&s=3494cdb6208f3100f4c184fa5f000262c296e741" alt="" />
                            <div className={styles.CollectionTitle}>
                                <p>COLECCION DE CDS</p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.Collection}>
                       <a href="">
                         <img src="https://shop.ca7rielypacoamoroso.com/cdn/shop/files/FREESPIRITS-LP_1.png?v=1773962124" alt="" />
                         <div className={styles.CollectionTitle}>
                            <p>COLECCION DE VINILOS</p>
                         </div>
                       </a>
                    </div>
            </div>
        </div>
    )
}

import styles from "./Hero.module.css";
import type { Product } from "../../models/Card";
import { useNavigate } from "react-router-dom";

interface Props {
    album: Product;
    leftAlbum?: Product;
    rightAlbum?: Product;

    nextAlbum: () => void;
    previousAlbum: () => void;
}

export const Hero = ({
    album,
    leftAlbum,
    rightAlbum,
    nextAlbum,
    previousAlbum
}: Props) => {

    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <img
                src="/assets/Captura de pantalla 2026-05-26 231402.png"
                className={styles.logo}
                alt="Maboroshi"
            />

            <h1 className={styles.heroTitle}>
                MABOROSHI RANDOM
            </h1>

            <div className={styles.albumContainer}>

                {leftAlbum && (
                    <img
                        onClick={previousAlbum}
                        className={styles.sideAlbum}
                        src={leftAlbum.image}
                        alt={leftAlbum.name}
                    />
                )}

                {/* Imagen principal actualizada con el cursor pointer */}
                <img
                    className={styles.albumImage}
                    src={album.image}
                    alt={album.name}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/products/${album.slug}`)}
                />

                {rightAlbum && (
                    <img
                        onClick={nextAlbum}
                        className={styles.sideAlbum}
                        src={rightAlbum.image}
                        alt={rightAlbum.name}
                    />
                )}

            </div>

            <p className={styles.albumTitle}>
                {album.name}
            </p>


        </section>
    );
};
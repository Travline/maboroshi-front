import styles from "./Hero.module.css";
import { useToolbarModalStore } from "../../hooks/ToolbarModalStore";
import type { Product } from "../../models/Card";

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

    const { open } = useToolbarModalStore();

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

                <img
                    className={styles.albumImage}
                    src={album.image}
                    alt={album.name}
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

            <button
                className={styles.exploreButton}
                onClick={open}
            >
                EXPLORA
            </button>

        </section>
    );
};
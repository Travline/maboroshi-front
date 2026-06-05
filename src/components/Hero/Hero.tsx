import styles from "./Hero.module.css";
import { useToolbarModalStore } from "../../hooks/ToolbarModalStore";
import type { Product } from "../../models/Card";

interface Props {
    album: Product;
}

export const Hero = ({ album }: Props) => {

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

            <img
                className={styles.albumImage}
                src={album.image}
                alt={album.name}
            />

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
import styles from "./Hero.module.css";
import { useToolbarModalStore } from "../../hooks/ToolbarModalStore";

export const Hero = () => {

    const { open } = useToolbarModalStore();

    const currentAlbum = {
        name: "OCTANE",
        image: "https://i.scdn.co/image/ab67616d0000b27325c28f3c9fbdbab1a88dd619"
    };

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
                src={currentAlbum.image}
            />

            <p className={styles.albumTitle}>
                {currentAlbum.name}
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
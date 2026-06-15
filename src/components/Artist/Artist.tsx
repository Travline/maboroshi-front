import type { Artist } from "../../models/Artist";
import styles from "./Artist.module.css"

interface props {
    artist: Artist[];
}

export const ArtistCard = ({ artist }: props) => {

    const randomArtists = [...artist]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    return (
        <div className={styles.Section}>
            <h1>ARTISTAS</h1>

            <div className={styles.Container}>
                {randomArtists.map((a) => (
                    <div className={styles.ArtistContainer} key={a.id}>
                        <div className={styles.artistCard}>
                            <img
                                src={a.image}
                                alt={a.name}
                                className={styles.Image}
                            />

                            <div className={styles.Name}>
                                <h2>{a.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.VerMas}>
                Ver más
            </button>
        </div>
    );
};

import type { Artist } from "../../models/Artist";
import styles from "./Artist.module.css";

interface Props {
    artist: Artist[];
}

export const ArtistCard = ({ artist }: Props) => {

    if (artist.length === 0) return null;

    const randomArtist = artist[Math.floor(Math.random() * artist.length)];

    return (
        <div className={styles.Section}>
            <h1 className="dot-array">ARTISTAS</h1>

            <div className={styles.Container}>
                <div className={styles.ArtistContainer}>
                    <div className={styles.artistCard}>
                        <a href="/store">
                            <img
                                src={randomArtist.image}
                                alt={randomArtist.name}
                                className={styles.Image}
                            />
                            <div className={styles.Name}>
                                <h2 className="dot-array">
                                    {randomArtist.name}
                                </h2>
                                <h3>MAS INFORMACION</h3>
                            </div>
                        </a>
                    </div>

                    <div className={styles.AlbumsGrid}>
                        {randomArtist.albums.slice(0, 4).map((album) => (
                            <div key={album.id} className={styles.AlbumCard}>
                                <a href="/store">
                                    <img
                                        src={album.img}
                                        alt={album.name}
                                        className={styles.AlbumImage}
                                    />
                                    <div className={styles.Name}>
                                        <h4 className="dot-array">
                                            {album.name}
                                        </h4>
                                        <button className={styles.Cart}>
                                            {/* SVG */}
                                        </button>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <a className={styles.VerMas + " dot-array"}>
                    Ver más
                </a>
            </div>
        </div>
    );
};
import type { Artist } from "../../models/Artist";
import styles from "./Artist.module.css"

interface props {
    artist: Artist[];
}

export const ArtistCard = ({ artist }: props) => {
    return (
        <div className={styles.Section}>
            <h1>ARTISTAS</h1>
            <div className={styles.Container}>
                {artist.map((a) => (
                    <div className={styles.ArtistContainer} key={a.id}>
                        <div key={a.id} className={styles.artistCard}>
                            <img src={a.image} alt={a.name} className={styles.Image} />
                            <div className={styles.Name}>
                                <h2>
                                    {a.name}
                                </h2>
                                <h3>MAS INFORMACION</h3>
                            </div>
                        </div>
                        <div className={styles.AlbumsGrid}>
                            {a.albums.slice(0, 4).map((album) => (
                                <div key={album.id} className={styles.AlbumCard}>
                                    <img src={album.img} alt={album.name} className={styles.AlbumImage} />
                                    <div className={styles.Name}>
                                        <h4>{album.name}</h4>
                                        <button className={styles.Cart}>

                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button>Ver más</button>
        </div>
    )
}
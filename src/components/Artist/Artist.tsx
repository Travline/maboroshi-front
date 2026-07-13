import type { Artist } from "../../models/Artist";
import styles from "./Artist.module.css";
import { Link } from "react-router-dom";

interface Props {
    artist: Artist[];
}

export const ArtistCard = ({ artist }: Props) => {

    if (artist.length === 0) return null;

    const artistsWithAlbums = artist.filter(a => a.albums.length >= 4);

    if (artistsWithAlbums.length === 0) return null;

    const randomArtist =
        artistsWithAlbums[Math.floor(Math.random() * artistsWithAlbums.length)];

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
                                
                                <Link to={`/products/${album.slug}`}>
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
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                        </button>
                                    </div>
                                </Link>
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
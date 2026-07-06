import type { Artist } from "../../models/Artist";
import styles from "./Artist.module.css"

interface props {
    artist: Artist[];
}

export const ArtistCard = ({ artist }: props) => {
    return (
        <div className={styles.Section}>
            <h1 className= ' dot-array'>ARTISTAS</h1>
            <div className={styles.Container}>
                {artist.map((a) => (
                    <div className={styles.ArtistContainer} key={a.id}>
                        <div key={a.id} className={styles.artistCard}>
                            <a href="/store">
                                <img src={a.image} alt={a.name} className={styles.Image} />
                            <div className={styles.Name}>
                                <h2 className='dot-array'>
                                    {a.name}
                                </h2>
                                <h3>MAS INFORMACION</h3>
                            </div>
                            </a>
                        </div>
                        <div className={styles.AlbumsGrid}>
                            {a.albums.slice(0, 4).map((album) => (
                                <div key={album.id} className={styles.AlbumCard}>
                                    <a href="/store">
                                        <img src={album.img} alt={album.name} className={styles.AlbumImage} />
                                        <div className={styles.Name}>
                                            <h4 className='dot-array'>{album.name}</h4>
                                            <button className={styles.Cart}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                            </button>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <a className={styles.VerMas + ' dot-array'}>Ver más</a>
            </div>
        </div>
    )
}
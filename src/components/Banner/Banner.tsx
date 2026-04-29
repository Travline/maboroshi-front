import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

type BannerProps = {
  title: string;
  artist: string;
  price: number;
  image: string;
  date: string;
};

export const Banner = ({
  title,
  artist,
  price,
  image,
  date,
}: BannerProps) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2>MABOROSHI ARCHIVES</h2>

        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{artist}</p>
        <p className={styles.date}>{date}</p>
        <span>S/.{price}</span>

        <button>+</button>

        <Link to="/oal" className={styles.info}>
          INFORMACION
        </Link>
      </div>
    </section>
  );
};
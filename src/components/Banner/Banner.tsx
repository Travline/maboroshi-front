import styles from "./Banner.module.css";

type BannerProps = {
  title: string;
  artist: string;
  price: number;
  image: string;
  background: string;
};

export const Banner = ({
  title,
  artist,
  price,
  image,
  background,
}: BannerProps) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2>MABOROSHI ARCHIVES</h2>

        <img src={image} alt={title} />

        <h3>{title}</h3>
        <p>{artist}</p>
        <span>S/.{price}</span>

        <button>+</button>
      </div>
    </section>
  );
};
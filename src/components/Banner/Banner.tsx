import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.card}>
        <h2>MABOROSHI ARCHIVES</h2>

        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
          alt="album"
        />

        <h3>Nombre del disco</h3>
        <p>Autor</p>
        <span>$200.00</span>

        <button>+</button>
      </div>
    </section>
  );
};
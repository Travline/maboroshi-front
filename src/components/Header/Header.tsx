import styles from "./Header.module.css"
// Usando CSS Modules

export const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">GENEROS</a>
        <a href="#">VINYL</a>
        <a href="#" className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo Maboroshi" />
        </a>
        <a href="#">CD</a>
        <a href="#">PRE - VENTA</a>
      </nav>
    </header>
  )
}
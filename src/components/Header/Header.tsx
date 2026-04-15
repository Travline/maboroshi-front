import styles from "./Header.module.css"
import { Link } from "react-router-dom"
// Usando CSS Modules

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"#"}>GENEROS</Link>
        <Link to={"#"}>VINYL</Link>
        <Link to={"/"} className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo Maboroshi" />
        </Link>
        <Link to={"#"}>CD</Link>
        <Link to={"#"}>PRE - VENTA</Link>
      </nav>
    </header>
  )
}
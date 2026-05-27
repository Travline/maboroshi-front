import styles from "./Header.module.css"
import { Link, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Link to={"#"}>GENEROS</Link>
        <Link to={"#"}>VINYL</Link>
        <Link to={"/"} className={styles.logo}>
          <img src="/assets/Captura de pantalla 2026-05-26 231402.png" alt="Logo Maboroshi" />
        </Link>
        <Link to={"#"}>CD</Link>
        <Link to={"#"}>PRE - VENTA</Link>
        <button className={styles.authBtn} onClick={() => navigate("/login")}>
          LOGIN
        </button>
      </nav>
    </header>
  )
}
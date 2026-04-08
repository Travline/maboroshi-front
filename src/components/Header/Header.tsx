import styles from "./Header.module.css"
// Usando CSS Modules

export const Header = () => {
  return (
    <header
      className={styles.header}
    >
      <h1>Maboroshi</h1>
    </header>
  )
}
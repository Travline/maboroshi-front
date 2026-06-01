import { useToolbarModalStore } from "../../hooks/ToolbarModalStore"
import styles from "./Header.module.css"

export const Header = () => {
  const { open, close, isOpened } = useToolbarModalStore()
  
  return (
    <header>
        <div onClick={() => {isOpened ? close() : open()}} className={styles.logo}>
          <img src="/assets/smiley 1.png" alt="Logo Maboroshi" />
        </div>
    </header>
  )
}
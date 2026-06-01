import styles from "./ToolbarModal.module.css";
import { Link } from "react-router-dom";
import smiley from "/assets/smiley 1.png";
import { useToolbarModalStore } from "../../hooks/ToolbarModalStore";

export const ToolbarModal = () => {
  const { isOpened, close } = useToolbarModalStore()

  return (
    <div className={isOpened ? styles.overlay : styles.overlayClosed}>
      <div className={styles.modal}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.square}>
            <svg width="20" height="20" viewBox="0 0 14 13"><rect width="16" height="16" fill="white" /></svg>
          </div>

          <span className={styles.title}>MABOROSHI</span>

          <button
            onClick={close}
            className={styles.close}>
            <svg width="20" height="20" viewBox="0 0 13 13"><path d="M12.0459 1.40075L10.6451 0L6.02295 4.62219L1.40075 0L0 1.40075L4.62219 6.02295L0 10.6451L1.40075 12.0459L6.02295 7.4237L10.6451 12.0459L12.0459 10.6451L7.4237 6.02295L12.0459 1.40075Z" fill="white" /></svg>
          </button>
        </div>

        {/* Centro */}
        <div className={styles.center}>

          {/* SVG círculo */}
          <div>
            <svg width="135" height="130" viewBox="0 0 135 130">
              <circle cx="70" cy="65" r="64.75" stroke="#424242" stroke-width="0.5" />
              <circle cx="70.5" cy="65" r="22.75" stroke="#424242" stroke-width="0.5" />
              <circle cx="5" cy="65" r="5" fill="#424242" />
            </svg>
          </div>

          {/* Imagen central */}
          <Link onClick={close} to="/" className={styles.imageWrapper}>
            <img
              src={smiley}
              alt="central"
              className={styles.image}
            />
          </Link>

          {/* Opciones rotadas */}
          <Link onClick={close} to="/explore" className={`${styles.option} ${styles.left}`}>
            EXPLORAR
          </Link>

          <Link onClick={close} to="/store" className={`${styles.option} ${styles.top}`}>
            TIENDA
          </Link>

          <Link onClick={close} to="/presale" className={`${styles.option} ${styles.right}`}>
            PRE-SALE
          </Link>

          <Link onClick={close} to="/artists" className={`${styles.option} ${styles.bottom}`}>
            ARTISTAS
          </Link>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <Link onClick={close} to="/favorites" className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5471 1.88431C15.5604 1.88431 16.5322 2.32792 17.2488 3.11754C17.9653 3.90716 18.3678 4.97812 18.3678 6.09481C18.3698 6.59887 18.2855 7.09883 18.1195 7.56849C17.9016 8.07612 17.6392 8.55911 17.3362 9.01059L9.99101 17.3369L2.70312 9.03164C2.4012 8.56993 2.13596 8.0804 1.91033 7.56849C1.75028 7.10461 1.66933 6.61214 1.67154 6.11587C1.6539 5.20428 1.90526 4.31102 2.38781 3.57037C2.87037 2.82972 3.55805 2.28172 4.34747 2.00874C5.13689 1.73576 5.98539 1.75256 6.7654 2.05662C7.54541 2.36068 8.21479 2.93555 8.67289 3.69483L10.0292 5.80008L11.3951 3.69483C11.748 3.13415 12.2193 2.67641 12.7684 2.36102C13.3175 2.04562 13.928 1.88203 14.5471 1.88431ZM14.5471 0.000112177C13.6523 -0.00588586 12.7697 0.228735 11.9758 0.683634C11.1818 1.13853 10.5006 1.79998 9.99101 2.61062C9.31611 1.56079 8.35565 0.774774 7.24859 0.366269C6.14152 -0.042237 4.94523 -0.0520514 3.83277 0.338245C2.72031 0.728542 1.74934 1.49871 1.06033 2.53736C0.371309 3.576 -3.68472e-05 4.82926 2.7185e-06 6.11587C-0.000658068 6.8356 0.11915 7.54929 0.353413 8.22112C0.641204 8.92983 0.989833 9.60659 1.39454 10.2422L9.99101 20L18.5875 10.2422C19 9.62124 19.3582 8.95863 19.6573 8.26322C19.9655 7.34216 20.0679 6.35287 19.956 5.37896C19.8441 4.40505 19.5211 3.47514 19.0143 2.66782C18.5075 1.86049 17.8318 1.19948 17.0443 0.740652C16.2568 0.28182 15.3806 0.0386497 14.4898 0.0316909L14.5471 0.000112177Z" fill="white" />
            </svg>

          </Link>

          <Link onClick={close} to="/login" className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1.75069C10.6402 1.75725 11.2642 1.95257 11.7933 2.31205C12.3225 2.67153 12.7331 3.1791 12.9736 3.77085C13.2141 4.3626 13.2736 5.01207 13.1447 5.63749C13.0157 6.2629 12.7041 6.83629 12.2491 7.28546C11.794 7.73462 11.2159 8.03949 10.5875 8.16166C9.95903 8.28383 9.3084 8.21784 8.71749 7.97201C8.12659 7.72618 7.62183 7.31149 7.26678 6.78017C6.91173 6.24885 6.72226 5.62464 6.72222 4.98615C6.72071 4.55803 6.8047 4.1339 6.9693 3.7385C7.13391 3.34309 7.37582 2.98434 7.68094 2.68316C7.98605 2.38199 8.34826 2.14442 8.74642 1.98432C9.14458 1.82423 9.57073 1.74481 10 1.75069ZM10 0C9.01109 0 8.0444 0.292433 7.22215 0.840318C6.3999 1.3882 5.75904 2.16693 5.3806 3.07803C5.00216 3.98913 4.90315 4.99168 5.09607 5.9589C5.289 6.92612 5.7652 7.81456 6.46447 8.51189C7.16373 9.20922 8.05464 9.6841 9.02455 9.87649C9.99445 10.0689 10.9998 9.97014 11.9134 9.59275C12.827 9.21536 13.6079 8.57627 14.1573 7.75631C14.7068 6.93634 15 5.97232 15 4.98615C15 3.66374 14.4732 2.39549 13.5355 1.46041C12.5979 0.525325 11.3261 0 10 0ZM10 12.9751C13.6222 12.9751 18.2333 14.7812 18.2333 16.1994V18.1828H1.72222V16.1994C1.72222 14.7812 6.34444 12.9751 9.95556 12.9751M10 11.2687C6.66667 11.2687 0 12.9418 0 16.2548V20H20V16.1994C20 12.8753 13.3333 11.2133 10 11.2133V11.2687Z" fill="#FFF9F9" />
            </svg>

          </Link>

          <Link onClick={close} to="/cart" className={styles.icon}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4167 5.89062H4.08333C2.24238 5.89062 0.75 7.22119 0.75 8.86252V17.7782C0.75 19.4195 2.24238 20.7501 4.08333 20.7501H17.4167C19.2576 20.7501 20.75 19.4195 20.75 17.7782V8.86252C20.75 7.22119 19.2576 5.89062 17.4167 5.89062Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M5.88477 5.20783C5.88477 2.74585 8.12327 0.75 10.8848 0.75C13.6463 0.75 15.8848 2.74585 15.8848 5.20783" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};
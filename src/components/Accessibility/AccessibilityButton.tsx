import styles from "./Accessibility.module.css";

interface Props {
    onClick: () => void;
}

export const AccessibilityButton = ({ onClick }: Props) => {
  return (
        <button
            className={styles.accessibilityButton}
            onClick={onClick}
        >
            <img
                src="/assets/accessibility-icon.png"
                alt="Accesibilidad"
                className={styles.accessibilityIcon}
            />
        </button>
    );
};
import { useState, useEffect } from "react";
import styles from "./Accessibility.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityMenu = ({ isOpen, onClose }: Props) => {
  // Estados para los niveles
  const [fontLevel, setFontLevel] = useState(0);
  const [contrastLevel, setContrastLevel] = useState(0);
  const [lineHeightLevel, setLineHeightLevel] = useState(0);
  const [cursorLevel, setCursorLevel] = useState(0);
  const [dyslexiaMode, setDyslexiaMode] = useState(false);

  // --- EFECTOS (Deben ir antes del if (!isOpen)) ---

  // Aplicar tamaño de fuente con variables CSS
  useEffect(() => {
    const root = document.documentElement;

    const scales = [
      { base: "1rem", medium: "1.25rem", large: "1.56rem", larger: "1.95rem" },
      { base: "1.1rem", medium: "1.35rem", large: "1.66rem", larger: "2.05rem" },
      { base: "1.2rem", medium: "1.45rem", large: "1.76rem", larger: "2.15rem" },
      { base: "1.3rem", medium: "1.55rem", large: "1.9rem", larger: "2.3rem" },
      { base: "1.4rem", medium: "1.7rem", large: "2rem", larger: "2.5rem" }
    ];

    const current = scales[fontLevel];

    root.style.setProperty("--base-font-size", current.base);
    root.style.setProperty("--medium-font-size", current.medium);
    root.style.setProperty("--large-font-size", current.large);
    root.style.setProperty("--larger-font-size", current.larger);

    root.style.setProperty("--cards-font-size", `${1.4 + fontLevel * 0.2}rem`);
    root.style.setProperty("--slider-title-font-size", `${2.4 + fontLevel * 0.2}rem`);
    root.style.setProperty("--section-title-font-size", `${3.2 + fontLevel * 0.2}rem`);
  }, [fontLevel]);

  // Aplicar contraste
  useEffect(() => {
    document.documentElement.classList.remove(
      "contrast-medium",
      "contrast-high"
    );

    if (contrastLevel === 1) {
      document.documentElement.classList.add("contrast-medium");
    }
    if (contrastLevel === 2) {
      document.documentElement.classList.add("contrast-high");
    }
  }, [contrastLevel]);

  // Aplicar interlineado
  useEffect(() => {
    const heights = ["normal", "1.8", "2.2"];
    document.body.style.lineHeight = heights[lineHeightLevel];
  }, [lineHeightLevel]);

  // Aplicar tamaño del Cursor
  useEffect(() => {
    document.documentElement.classList.toggle(
      "cursor-large",
      cursorLevel === 1
    );
  }, [cursorLevel]);

  // Aplicar fuente para dislexia
  useEffect(() => {
    document.body.classList.toggle(
      "dyslexia-font",
      dyslexiaMode
    );
  }, [dyslexiaMode]);

  // El renderizado condicional va DESPUÉS de los hooks
  if (!isOpen) return null;

  // --- FUNCIONES DE MANEJO DE EVENTOS ---

  // Funciones de cambio cíclico
  const handleFontSize = () => {
    setFontLevel((prev) => (prev + 1) % 5);
  };

  const handleContrast = () => {
    setContrastLevel((prev) => (prev + 1) % 3);
  };

  const handleLineHeight = () => {
    setLineHeightLevel((prev) => (prev + 1) % 3);
  };

  const handleCursor = () => {
    setCursorLevel((prev) => (prev + 1) % 2);
  };

  // Función de cambio para modo dislexia (ON / OFF)
  const handleDyslexia = () => {
    setDyslexiaMode(prev => !prev);
  };

  // Función de restablecimiento
  const handleReset = () => {
    setFontLevel(0);
    setContrastLevel(0);
    setLineHeightLevel(0);
    setCursorLevel(0);
    setDyslexiaMode(false);

    const root = document.documentElement;

    // Resetear fuentes
    root.style.setProperty("--base-font-size", "1rem");
    root.style.setProperty("--medium-font-size", "1.25rem");
    root.style.setProperty("--large-font-size", "1.56rem");
    root.style.setProperty("--larger-font-size", "1.95rem");
    root.style.setProperty("--cards-font-size", "1.4rem");
    root.style.setProperty("--slider-title-font-size", "2.4rem");
    root.style.setProperty("--section-title-font-size", "3.2rem");

    // Resetear clases globales
    document.documentElement.classList.remove(
      "contrast-medium",
      "contrast-high",
      "cursor-large"
    );

    // Resetear body
    document.body.classList.remove("dyslexia-font");
    document.body.style.lineHeight = "normal";
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.menu}>
        <div className={styles.header}>
          <h2>Accesibilidad</h2>

          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.grid}>
          {/* Botón de Tamaño de texto */}
          <button className={styles.option} onClick={handleFontSize}>
            <span className={styles.icon}>Aa</span>
            <span>Tamaño de texto</span>
            
            <div className={styles.progress}>
              <span className={fontLevel >= 1 ? styles.active : ""}></span>
              <span className={fontLevel >= 2 ? styles.active : ""}></span>
              <span className={fontLevel >= 3 ? styles.active : ""}></span>
              <span className={fontLevel >= 4 ? styles.active : ""}></span>
            </div>
          </button>

          {/* Botón de Contraste */}
          <button className={styles.option} onClick={handleContrast}>
            <span className={styles.icon}>◐</span>
            <span>Contraste</span>

            <div className={styles.progress}>
              <span className={contrastLevel >= 1 ? styles.active : ""}></span>
              <span className={contrastLevel >= 2 ? styles.active : ""}></span>
            </div>
          </button>

          {/* Botón de Interlineado */}
          <button className={styles.option} onClick={handleLineHeight}>
            <span className={styles.icon}>↕</span>
            <span>Interlineado</span>

            <div className={styles.progress}>
              <span className={lineHeightLevel >= 1 ? styles.active : ""}></span>
              <span className={lineHeightLevel >= 2 ? styles.active : ""}></span>
            </div>
          </button>

          {/* Tarjeta visual del Cursor */}
          <button className={styles.option} onClick={handleCursor}>
            <span className={styles.icon}>🖱</span>
            <span>Cursor</span>

            <div className={styles.progress}>
              <span className={cursorLevel >= 1 ? styles.active : ""}></span>
            </div>
          </button>

          {/* Tarjeta visual de Dislexia amigable */}
          <button className={styles.option} onClick={handleDyslexia}>
            <span className={styles.icon}>Ab</span>
            <span>Dislexia amigable</span>

            <div className={styles.progress}>
              <span className={dyslexiaMode ? styles.active : ""}></span>
            </div>
          </button>

          {/* Botón de Restablecer */}
          <button className={styles.option} onClick={handleReset}>
            <span className={styles.icon}>↺</span>
            <span>Restablecer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
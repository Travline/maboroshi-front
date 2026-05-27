import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthModal.module.css";

type View = "login" | "register" | "forgot";

export const AuthModal = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<View>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetFields = () => {
    setEmail(""); setPassword(""); setConfirmPassword("");
  };

  const switchView = (v: View) => { resetFields(); setView(v); };

  return (
    <>
    <div className={styles.page}>
      <div className={styles.bg} />

      <div className={styles.box}>
        <h2 className={styles.title}>SIGN UP / LOGIN</h2>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${view === "login" ? styles.active : ""}`}
            onClick={() => switchView("login")}
          >
            SIGN UP
          </button>
          <button
            className={`${styles.tab} ${view === "forgot" ? styles.active : ""}`}
            onClick={() => switchView("forgot")}
          >
            FORGOT PASSOWRD?
          </button>
        </div>

        {view === "login" && (
          <div className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>EMAIL ADRESS</label>
              <input className={styles.input} type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>PASSOWRD</label>
              <input className={styles.input} type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <span className={styles.hint}>
                AL MENOS 10 CARACTERES, UNA LETRA MAYÚSCULA, UNA LETRA MINÚSCULA Y UN NÚMERO.
              </span>
            </div>

            <button className={styles.submitBtn} onClick={() => navigate("/")} >
              NEXT →
            </button>
          </div>
        )}

        {view === "register" && (
          <div className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>EMAIL ADRESS</label>
              <input className={styles.input} type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>PASSOWRD</label>
              <input className={styles.input} type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <span className={styles.hint}>
                AL MENOS 10 CARACTERES, UNA LETRA MAYÚSCULA, UNA LETRA MINÚSCULA Y UN NÚMERO.
              </span>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>CONFIRMAR PASSOWRD</label>
              <input className={styles.input} type="password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {/* TODO: conectar handleRegister() cuando esté el backend */}
            <button className={styles.submitBtn} onClick={() => navigate("/")}>
              CREAR CUENTA →
            </button>
            <button className={styles.switchLink} onClick={() => switchView("login")} type="button">
              ¿YA TENÉS CUENTA? INICIÁ SESIÓN
            </button>
          </div>
        )}

        {view === "forgot" && (
          <div className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>EMAIL ADRESS</label>
              <input className={styles.input} type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* TODO: conectar handleForgot() cuando esté el backend */}
            <button className={styles.submitBtn} type="button">
              ENVIAR LINK DE RESET →
            </button>
          </div>
        )}
      </div>
    </div>
    <footer className={styles.loginFooter}>
        <div className={styles.loginFooterBar}>
          <span className={styles.loginSquare}></span>
          <span className={styles.loginExplora}>EXPLORA</span>
          <span className={styles.loginDots}>•••</span>
        </div>
      </footer>
      </>
  );
};
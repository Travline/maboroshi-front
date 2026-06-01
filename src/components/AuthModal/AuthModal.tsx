import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthModal.module.css";

type View = "login" | "register" | "forgot";

const BASE_URL = "http://localhost:3000/v1";

export const AuthModal = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<View>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetFields = () => {
    setEmail(""); setPassword(""); setConfirmPassword("");
    setUsername(""); setPhone(""); setError("");
  };

  const switchView = (v: View) => { resetFields(); setView(v); };

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ mail: email, pwd: password }),
      });
      const body = await res.text();
      if (!res.ok) {
        setError(res.status === 401 ? "Correo o contraseña incorrectos." : body);
        return;
      }
      navigate("/");
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) { setError("Las contraseñas no coinciden."); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, mail: email, pwd: password, phone }),
      });
      const body = await res.text();
      if (!res.ok) {
        setError(res.status === 409 ? "Ya existe una cuenta con ese correo." : body);
        return;
      }
      switchView("login");
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

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
            LOGIN
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

            {error && <span className={styles.hint}>{error}</span>}

            <button className={styles.submitBtn} onClick={handleLogin} disabled={loading}>
              {loading ? "INGRESANDO…" : "NEXT →"}
            </button>
            <button className={styles.switchLink} onClick={() => switchView("register")} type="button">
              ¿NO TIENES CUENTA? REGISTRATE
            </button>
          </div>
        )}

        {view === "register" && (
          <div className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>NOMBRE DE USUARIO</label>
              <input className={styles.input} type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
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
            <div className={styles.fieldGroup}>
              <label className={styles.label}>TELÉFONO</label>
              <input className={styles.input} type="tel" value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </div>

            {error && <span className={styles.hint}>{error}</span>}

            <button className={styles.submitBtn} onClick={handleRegister} disabled={loading}>
              {loading ? "CREANDO CUENTA…" : "CREAR CUENTA →"}
            </button>
            <button className={styles.switchLink} onClick={() => switchView("login")} type="button">
              ¿YA TIENES CUENTA? INICIÁ SESIÓN
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
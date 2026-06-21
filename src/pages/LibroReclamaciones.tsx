import { useState } from "react";
import styles from "./LibroReclamaciones.module.css";
import { ENV } from "../api/environment";

export const LibroReclamaciones = () => {
    const [fullName, setFullName] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [complaintType, setComplaintType] = useState("");
    const [detail, setDetail] = useState("");
    const [expectedSolution, setExpectedSolution] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage("");
        if (dni.length !== 8) {
            alert("El DNI debe tener 8 dígitos");
            return;
        }

        if (phone && phone.length !== 9) {
            alert("El teléfono debe tener 9 dígitos");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${ENV.VITE_API_URL}/v1/complaints`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullName,
                        dni,
                        email,
                        phone,
                        complaintType,
                        detail,
                        expectedSolution
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Error al enviar reclamación");
            }

            setSuccessMessage("✓ Reclamación enviada correctamente");

            // Limpiar el formulario
            setFullName("");
            setDni("");
            setEmail("");
            setPhone("");
            setComplaintType("");
            setDetail("");
            setExpectedSolution("");

        } catch (error) {
            console.error(error);
            alert("No se pudo enviar la reclamación");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <h1>LIBRO DE RECLAMACIONES</h1>

                <p>
                    Conforme al Código de Protección y Defensa del Consumidor,
                    Maboroshi pone a disposición el presente Libro de
                    Reclamaciones Virtual.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <h2>Datos del consumidor</h2>

                    <input
                        type="text"
                        placeholder="Nombres y Apellidos"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="DNI"
                        required
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <h2>Detalle</h2>

                    <select
                        required
                        value={complaintType}
                        onChange={(e) => setComplaintType(e.target.value)}
                    >
                        <option value="">
                            Seleccione tipo
                        </option>

                        <option value="reclamo">
                            Reclamo
                        </option>

                        <option value="queja">
                            Queja
                        </option>
                    </select>

                    <p className={styles.info}>
                        Reclamo: Disconformidad relacionada con los productos o servicios.
                        <br />
                        Queja: Malestar respecto a la atención recibida.
                    </p>

                    <textarea
                        rows={5}
                        placeholder="Detalle de la reclamación"
                        required
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />

                    <textarea
                        rows={4}
                        placeholder="¿Qué solución espera?"
                        required
                        value={expectedSolution}
                        onChange={(e) => setExpectedSolution(e.target.value)}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "ENVIANDO..." : "ENVIAR RECLAMACIÓN"}
                    </button>

                    {successMessage && (
                        <p className={styles.successMessage}>
                            {successMessage}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
};
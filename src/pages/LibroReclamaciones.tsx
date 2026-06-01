import styles from "./LibroReclamaciones.module.css";

export const LibroReclamaciones = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert("Reclamación enviada correctamente");
    };

    return (
        <main className={styles.container}>
            <div className={styles.card}>

                <h1>Libro de Reclamaciones</h1>

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
                    />

                    <input
                        type="text"
                        placeholder="DNI"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Teléfono"
                    />

                    <h2>Detalle</h2>

                    <select required>
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
                    />

                    <textarea
                        rows={4}
                        placeholder="¿Qué solución espera?"
                        required
                    />

                    <button type="submit">
                        Enviar reclamación
                    </button>

                </form>

            </div>
        </main>
    );
};
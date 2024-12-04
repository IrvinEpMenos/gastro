import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Importa la instancia de autenticación
import { getDatabase, ref, set } from "firebase/database"; // Importa las funciones necesarias para interactuar con Realtime Database
import { useNavigate } from "react-router-dom";

const RegistrarUsuario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Crear el usuario con correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualizar el perfil del usuario
      await updateProfile(user, {
        displayName: nombre,
      });

      // Guardar los datos del usuario en la base de datos en tiempo real
      const db = getDatabase();
      const userRef = ref(db, 'usuarios/' + user.uid); // Crea una referencia a la tabla 'usuarios' con el uid del usuario
      await set(userRef, {
        nombre: nombre,
        email: email,
      });

      // Guardar el usuario en la sesión
      sessionStorage.setItem("user", JSON.stringify({ email: user.email, uid: user.uid, displayName: nombre }));

      // Redirigir al Dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Error al registrar el usuario: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToDashboard = () => {
    navigate("/"); // Regresa al dashboard
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Botón para regresar al Dashboard */}
        <button
          onClick={handleBackToDashboard}
          style={styles.button}
        >
          Regresar
        </button>

        <h2 style={styles.title}>Registrar Usuario</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Registrando..." : "Registrar"}
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6", // Fondo claro
    fontFamily: "'Roboto', sans-serif", // Fuente moderna
  },
  container: {
    width: "100%",
    maxWidth: "600px", // Ajustar el tamaño máximo para el diseño de escritorio
    padding: "40px",
    borderRadius: "10px",
    backgroundColor: "#ffffff", // Fondo blanco
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Sombra sutil
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "15px 0",
    padding: "15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#f9f9f9",
    color: "#333333",
    outline: "none",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#3498db", // Cambia de color al enfocar
  },
  button: {
    padding: "15px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#2980b9", // Azul más oscuro al pasar el ratón
  },
  error: {
    marginTop: "10px",
    color: "red",
    fontSize: "14px",
  },
};

export default RegistrarUsuario;

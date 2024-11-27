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
    <div style={styles.container}>

      {/* Botón para regresar al Dashboard */}
      <button
        onClick={handleBackToDashboard}
        style={{
          padding: "8px 16px",
          backgroundColor: "#FF5733",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Regresar
      </button>

      <h2>Registrar Usuario</h2>
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
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "30px",
    borderRadius: "8px",
    backgroundColor: "#2c3e50", // Fondo oscuro
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
    color: "#fff", // Texto blanco
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "12px 0",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #34495e", // Color más suave para los bordes
    backgroundColor: "#34495e", // Fondo de los campos de entrada más oscuro
    color: "#fff", // Color del texto de los campos
  },
  button: {
    padding: "12px",
    backgroundColor: "#3498db", // Color azul suave
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease", // Transición suave al pasar el ratón
  },
  buttonHover: {
    backgroundColor: "#2980b9", // Cambia el color al pasar el ratón
  },
  error: {
    marginTop: "10px",
    color: "red",
  },
};


export default RegistrarUsuario;

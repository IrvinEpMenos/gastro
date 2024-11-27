import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Importa la instancia de autenticación
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar el usuario en la sesión
      sessionStorage.setItem("user", JSON.stringify({ email: user.email, uid: user.uid }));
      alert("Inicio de sesión exitoso");

      // Redirigir al Dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Error al iniciar sesión: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleLogin} style={styles.form}>
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
          <p style={styles.text}>
            ¿No tienes cuenta?{" "}
            <a href="/registro" style={styles.link}>
              Regístrate aquí
            </a>
          </p>
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Cargando..." : "Ingresar"}
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
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#ffffff", // Fondo blanco
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Sombra sutil
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
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
  text: {
    marginTop: "10px",
    color: "#555555",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "bold",
  },
  error: {
    marginTop: "10px",
    color: "red",
    fontSize: "14px",
  },
};

export default LoginForm;

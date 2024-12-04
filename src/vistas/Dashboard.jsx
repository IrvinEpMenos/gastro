import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../firebaseConfig";  // Asegúrate de importar 'auth'
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const user = auth.currentUser;  // Obtener el usuario autenticado desde Firebase

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirigir al login si no hay un usuario autenticado
      return;
    }

    // Obtén los usuarios desde la base de datos
    const db = getDatabase();
    const usuariosRef = ref(db, "usuarios");

    get(usuariosRef).then((snapshot) => {
      if (snapshot.exists()) {
        const usuariosData = snapshot.val();
        const usuariosList = Object.keys(usuariosData)
          .filter((uid) => uid !== user.uid) // Filtramos al usuario actual
          .map((uid) => ({ uid, ...usuariosData[uid] }));
        setUsuarios(usuariosList);
      }
      setLoading(false);
    });
  }, [user, navigate]);

  // Maneja la redirección al chat
  const handleChatClick = (contactId) => {
    navigate(`/chat/${contactId}`); // Redirigir al chat con el contacto seleccionado
  };
  const styles = {
    container: {
      display: "flex",
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#f5f6fa",
      height: "100vh",
      margin: 0,
    },
    mainContent: {
      marginLeft: "250px", // Espacio para el Sidebar
      padding: "40px",
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#2c3e50",
    },
    subHeader: {
      fontSize: "1.2rem",
      marginBottom: "30px",
      color: "#34495e",
    },
    card: {
      width: "100%",
      maxWidth: "800px",
      padding: "20px",
      backgroundColor: "#ecf0f1",
      borderRadius: "10px",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      textAlign: "left",
    },
    cardHeader: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#2c3e50",
    },
    cardContent: {
      fontSize: "1rem",
      color: "#7f8c8d",
    },
    footer: {
      marginTop: "20px",
      fontSize: "0.9rem",
      color: "#95a5a6",
      textAlign: "center",
    },
  };
  
 
    return (
      <div style={styles.container}>
        {/* Sidebar */}
        <Sidebar />
  
        {/* Contenido Principal */}
        <div style={styles.mainContent}>
          <h1 style={styles.header}>WEB APP REACT</h1>
          <p style={styles.subHeader}>
            Aplicación de Chat con Firebase
          </p>
  
          <div style={styles.card}>
            <h2 style={styles.cardHeader}>Información del Proyecto</h2>
            <p style={styles.cardContent}>
              Esta aplicación fue desarrollada por <strong>Irvin Sánchez Ayala</strong>, estudiante del grupo <strong>DGS 10-1</strong>, bajo la guía del profesor <strong>Juan Ángel Sotero Flores</strong>.
            </p>
          </div>
  
          <div style={styles.card}>
            <h2 style={styles.cardHeader}>Funcionalidades Clave</h2>
            <ul style={styles.cardContent}>
              <li>Chat en tiempo real utilizando Firebase.</li>
              <li>Interfaz moderna y responsiva.</li>
              <li>Gestión de usuarios autenticados.</li>
              <li>Integración segura con Firebase Authentication.</li>
            </ul>
          </div>
  
          
        </div>
      </div>
    );
  }
export default Dashboard;

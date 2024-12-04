import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import userIcon from "./user.png"; // Importar la imagen de usuario

const Sidebar = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const db = getDatabase();
    const usuariosRef = ref(db, "usuarios");

    get(usuariosRef).then((snapshot) => {
      if (snapshot.exists()) {
        const usuariosData = snapshot.val();
        const usuariosList = Object.keys(usuariosData)
          .filter((uid) => uid !== user.uid)
          .map((uid) => ({ uid, ...usuariosData[uid] }));
        setUsuarios(usuariosList);
      }
      setLoading(false);
    });
  }, [user, navigate]);

  const handleChatClick = (contactId) => {
    navigate(`/chat/${contactId}`);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Contactos</h2>
      <div>
        {loading ? (
          <p style={styles.loadingText}>Cargando...</p>
        ) : (
          <ul style={styles.userList}>
            {usuarios.map((contact) => (
              <li key={contact.uid} style={styles.userItem}>
                <button
                  onClick={() => handleChatClick(contact.uid)}
                  style={styles.chatButton}
                >
                  <img src={userIcon} alt="Icono de usuario" style={styles.icon} />
                  <span>{contact.nombre}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleLogout} style={styles.logoutButton}>
        Cerrar sesión
      </button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px",
    position: "fixed",
    height: "100%",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  loadingText: {
    textAlign: "center",
    color: "#bdc3c7",
  },
  userList: {
    listStyleType: "none",
    padding: 0,
    overflowY: "auto",
    flexGrow: 1,
  },
  userItem: {
    marginBottom: "10px",
  },
  chatButton: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#34495e",
    color: "#ecf0f1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    gap: "10px",
    width: "100%",
    textAlign: "left",
  },
  logoutButton: {
    padding: "10px 20px",
    marginBottom: "40px",
    backgroundColor: "#e74c3c",
    color: "#ecf0f1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    marginTop: "50px",
  },
  icon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
};

export default Sidebar;

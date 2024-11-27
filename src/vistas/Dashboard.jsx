import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = auth.currentUser;

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

  const handleChatClick = (contactId) => {
    // Redirige al chat con el contacto seleccionado
    navigate(`/chat/${contactId}`);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra sesión del usuario
      sessionStorage.clear(); // Limpia la sesión
      navigate("/"); // Redirige al login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("Hubo un problema al cerrar sesión. Intenta de nuevo.");
    }
  };

  return (
    <div style={styles.container}>
      {/* Mensaje de bienvenida */}
      <h1>BIENVENIDO A WEWECHAT</h1>
      <h1>{user?.displayName || user?.email}</h1>
      <h2>CHATS</h2>

      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul style={styles.userList}>
            {usuarios.map((contact) => (
              <li key={contact.uid} style={styles.userItem}>
                <button
                  onClick={() => handleChatClick(contact.uid)}
                  style={styles.chatButton}
                >
                  {contact.nombre}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botón para cerrar sesión */}
      <button onClick={handleLogout} style={styles.logoutButton}>
        Cerrar Sesión
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  userList: {
    listStyle: "none",
    padding: 0,
  },
  userItem: {
    margin: "10px 0",
  },
  chatButton: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  chatButtonHover: {
    backgroundColor: "#0056b3",
  },
  logoutButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#DC3545",
    color: "#FFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, get, onValue } from "firebase/database"; 
import { auth } from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";

const Chat = () => {
  const { contactId } = useParams(); // Obtener el ID del contacto desde la URL
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactName, setContactName] = useState(""); // Guardar el nombre del contacto
  const user = auth.currentUser;
  const navigate = useNavigate();

  // Redirigir si el usuario intenta chatear consigo mismo
  useEffect(() => {
    if (user.uid === contactId) {
      navigate("/dashboard"); // Redirigir a la vista de dashboard si es el mismo usuario
    }
  }, [contactId, user.uid, navigate]);

  // Obtener el nombre del contacto desde la base de datos de usuarios
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, `usuarios/${contactId}`);

    get(contactRef).then((snapshot) => { 
      if (snapshot.exists()) {
        setContactName(snapshot.val().nombre); 
      } else {
        console.log("El contacto no existe.");
      }
    }).catch((error) => {
      console.error("Error al obtener el nombre del contacto:", error);
    });
  }, [contactId]);

  // Generar un ID único para el chat basado en los IDs de los usuarios
  const chatId = [user.uid, contactId].sort().join("-"); // ID único para la conversación entre usuarios

  // Escuchar los mensajes en la base de datos
  useEffect(() => {
    const db = getDatabase();
    const chatRef = ref(db, `chats/${chatId}`); // Usar el ID único del chat

    onValue(chatRef, (snapshot) => {
      if (snapshot.exists()) {
        const mensajesData = snapshot.val();
        const mensajesList = Object.keys(mensajesData).map((key) => ({
          id: key,
          ...mensajesData[key],
        }));
        setMensajes(mensajesList); // Actualizar los mensajes
      } else {
        setMensajes([]); // Si no hay mensajes, asegurarse de que el array esté vacío
      }
      setLoading(false); // Termina el estado de carga
    });
  }, [contactId, user.uid]);

  const handleSendMessage = async () => {
    if (mensaje.trim() && !loading) {
      console.log("Enviando mensaje...");

      setLoading(true); // Establecer como cargando antes de enviar el mensaje

      const db = getDatabase();
      const newMessageRef = push(ref(db, `chats/${chatId}`)); // Usar el ID único del chat

      const newMessageData = {
        mensaje,
        timestamp: Date.now(),
        sender: user.uid,
      };

      try {
        await set(newMessageRef, newMessageData); // Guardar en la ruta del chat
        console.log("Mensaje enviado correctamente");
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
      } finally {
        setMensaje(""); // Limpiar el campo de mensaje
        setLoading(false); // Establecer como no cargando después de enviar
      }
    }
  };
  const handleBackToDashboard = () => {
    navigate("/dashboard"); // Regresa al dashboard
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chat con {contactName || "Cargando..."}</h2>

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
        Regresar al Dashboard
      </button>

      <div>
        {loading ? (
          <p>Cargando mensajes...</p>
        ) : (
          <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {mensajes.length > 0 ? (
                mensajes.map((msg) => (
                  <li key={msg.id} style={{ marginBottom: "10px" }}>
                    <strong>{msg.sender === user.uid ? "Tú" : contactName}:</strong> {msg.mensaje}
                  </li>
                ))
              ) : (
                <p>No hay mensajes aún.</p>
              )}
            </ul>

            <div style={{ display: "flex", marginTop: "10px" }}>
              <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe un mensaje"
                style={{ width: "300px", marginRight: "10px", padding: "8px" }}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !mensaje.trim()}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, get, onValue } from "firebase/database";
import { auth } from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const Chat = () => {
  const { contactId } = useParams();
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactName, setContactName] = useState("");
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.uid === contactId) {
      navigate("/dashboard");
    }
  }, [contactId, user.uid, navigate]);

  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, `usuarios/${contactId}`);

    get(contactRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setContactName(snapshot.val().nombre);
        } else {
          console.log("El contacto no existe.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el nombre del contacto:", error);
      });
  }, [contactId]);

  const chatId = [user.uid, contactId].sort().join("-");

  useEffect(() => {
    const db = getDatabase();
    const chatRef = ref(db, `chats/${chatId}`);

    onValue(chatRef, (snapshot) => {
      if (snapshot.exists()) {
        const mensajesData = snapshot.val();
        const mensajesList = Object.keys(mensajesData).map((key) => ({
          id: key,
          ...mensajesData[key],
        }));
        setMensajes(mensajesList);
      } else {
        setMensajes([]);
      }
      setLoading(false);
    });
  }, [contactId, user.uid]);

  const handleSendMessage = async () => {
    if (mensaje.trim() && !loading) {
      setLoading(true);

      const db = getDatabase();
      const newMessageRef = push(ref(db, `chats/${chatId}`));

      const newMessageData = {
        mensaje,
        timestamp: Date.now(),
        sender: user.uid,
      };

      try {
        await set(newMessageRef, newMessageData);
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
      } finally {
        setMensaje("");
        setLoading(false);
      }
    }
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.chatContent}>
        <h2>Chat con {contactName || "Cargando..."}</h2>

        <button onClick={handleBackToDashboard} style={styles.backButton}>
          Regresar al Dashboard
        </button>

        <div style={styles.messagesContainer}>
          {loading ? (
            <p>Cargando mensajes...</p>
          ) : (
            <div>
              <ul style={styles.messageList}>
                {mensajes.length > 0 ? (
                  mensajes.map((msg) => (
                    <li
                      key={msg.id}
                      style={{
                        ...styles.messageItem,
                        backgroundColor: msg.sender === user.uid ? "#4CAF50" : "#E3F2FD",
                        marginLeft: msg.sender === user.uid ? "500px" : "0px",
                      }}
                    >
                      <div style={styles.messageContent}>
                        <p style={styles.messageText}>{msg.mensaje}</p>
                        <div style={styles.timestamp}>{formatTimestamp(msg.timestamp)}</div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No hay mensajes aún.</p>
                )}
              </ul>

              <div style={styles.inputContainer}>
                <input
                  type="text"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe un mensaje"
                  style={styles.input}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !mensaje.trim()}
                  style={styles.sendButton}
                >
                  Enviar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#f4f7fc",
  },
  chatContent: {
    marginLeft: "250px",
    padding: "20px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  backButton: {
    padding: "8px 16px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  messagesContainer: {
    marginLeft: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "400px",
    overflowY: "scroll",
    marginBottom: "20px",
  },
  messageList: {
    listStyleType: "none",
    padding: 0,
  },
  messageItem: {
    padding: "12px 18px",
    borderRadius: "15px",
    marginBottom: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "30%",
    wordWrap: "break-word",
  },
  messageContent: {
    maxWidth: "100%",
  },
  messageText: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  timestamp: {
    fontSize: "10px",
    color: "#777",
    marginTop: "5px",
  },
  inputContainer: {
    display: "flex",
    marginTop: "10px",
  },
  input: {
    marginLeft: "20px",
    width: "80%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  sendButton: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Chat;

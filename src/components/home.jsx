import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { ref, push, onValue } from "firebase/database";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const messagesRef = ref(database, "messages");

  // Load messages from Firebase
  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = data ? Object.values(data) : [];
      setMessages(loadedMessages);
    });
  }, [messagesRef]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    // Save message to Firebase
    push(messagesRef, {
      name: userName,
      text: newMessage,
      timestamp: Date.now(),
    });

    setNewMessage(""); // Clear input field
  };

  const styles = {
    container: {
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    chatBox: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "10px",
      height: "300px",
      overflowY: "scroll",
    },
    message: {
      textAlign: "left",
      padding: "5px",
      margin: "5px 0",
      borderRadius: "5px",
      backgroundColor: "#f0f0f0",
    },
    ownMessage: {
      backgroundColor: "#d1e7dd",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h1>Enter Your Name</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Start Chatting
          </button>
        </form>
      ) : (
        <>
          <h1>Chat App</h1>
          <div style={styles.chatBox}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(message.name === userName ? styles.ownMessage : {}),
                }}
              >
                <strong>{message.name}:</strong> {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Home;

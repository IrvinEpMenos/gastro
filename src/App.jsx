import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./vistas/LoginForm";
import RegistrarUsuario from "./vistas/RegistrarUsuario";
import Dashboard from "./vistas/Dashboard";
import Chat from "./vistas/Chat";  // Asegúrate de que la ruta sea correcta

const App = () => {
  const user = sessionStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registro" element={<RegistrarUsuario />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Ruta con un parámetro dinámico para el chat */}
        <Route path="/chat/:contactId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

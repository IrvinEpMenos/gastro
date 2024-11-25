import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Inicio</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>Acerca de</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
};

export default Navbar;

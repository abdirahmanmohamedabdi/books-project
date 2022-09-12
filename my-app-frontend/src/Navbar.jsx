import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo">Kenyan-books</div>
      <ul className="nav-links">
      
        <Link to="/Home">Home</Link>
        <Link to="/books">Books</Link>
      </ul>
    </div>
  );
}

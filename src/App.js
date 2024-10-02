import React from 'react';
import './App.css';
import AppRoutes from "./routes"
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
      <AppRoutes/>
    </div>
  );
}

export default App;

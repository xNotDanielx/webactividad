import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aviones from './components/Aviones/Aviones'
import Aeropuertos from './components/Aeropuertos/Aeropuertos';
import Vuelos from './components/Vuelos/Vuelos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/Aviones"
            element={
              <>
                <Navbar />
                <Aviones />
              </>
            }
          />
          <Route
            path="/Aeropuertos"
            element={
              <>
                <Navbar />
                <Aeropuertos />
              </>
            }
          />
          <Route
            path="/Vuelos"
            element={
              <>
                <Navbar />
                <Vuelos />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

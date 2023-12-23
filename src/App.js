import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Productos from './views/Productos';
import Detalles from './views/Detalles';
import Carrito from './views/Carrito';

import Registrar from './views/Registrar';
import IniciarSesion from './views/IniciarSesion';

import Salir from './views/Salir'; // Importamos el componente Salir

import NotFound from './views/NotFound';

import {BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
//Importación de los Hooks que serán utilizados.

import Context from "./context/Context";
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [producto, setProducto] = useState([]);
  const [session, setSession] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const globalState = { producto, setProducto, products, setProducts,session,setSession, carrito, setCarrito};

  useEffect(() => {
  }, []);

  return (
    <Router>
      <Context.Provider value={globalState}>
        <Routes>
        <Route path="/" element={!session ? <Home /> : <Navigate to="/Productos" />} />
          <Route path="/registrar" element={session ? <Productos /> : <Registrar /> } />
          <Route path="/iniciar_sesion" element={session ? <Productos /> : <IniciarSesion/>} />
          <Route path="/productos" element={session ? <Productos /> : <Navigate to="/Productos" />} />
          <Route path="/detalles/:id_producto" element={session ? <Detalles /> : <Navigate to="/" />} />
          <Route path="/carro_compras" element={session ? <Carrito /> : <Navigate to="/" />} />
          <Route path="/salir" element={<Salir />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Context.Provider>
    </Router>
  );

}
export default App

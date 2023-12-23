import Navbar from "./NavbarJwt";
import { useState, useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import productos from '../data/productos.json';
import Context from "../context/Context";
import { ToastContainer, toast } from 'react-toastify';
// import decodeTokenPayload from '../services/services'

const Productos = () => {
  // const token = localStorage.getItem("token");
  // const payload = decodeTokenPayload(token);

  const {carrito, setCarrito} = useContext(Context);

  const agregarAlCarrito = (id) => {
    const producto = productos.find(
      (producto) => producto.id === id
    );

    if (producto) {
      if (carrito && carrito.length > 0) {
        const productoEnCarrito = carrito.find((item) => item.id === id);
        if (productoEnCarrito) {
          toast.warning("Este celular ya está en el carrito");
        } else {
          const nuevoProductoEnCarrito = {
            ...producto,
            cantidad: 1,
          };

          setCarrito((prevCarrito) => [...prevCarrito, nuevoProductoEnCarrito]);
          toast.success("Celular agregado al carrito con éxito");
          console.log("Celular agregado al carrito:", nuevoProductoEnCarrito);
        }
      } else {
        // Si el carrito está vacío, agregar el cómic directamente
        const nuevoProductoEnCarrito = {
          ...producto,
          cantidad: 1,
        };

        setCarrito([nuevoProductoEnCarrito]);

        toast.success("Célular agregado al carrito con éxito");
        console.log("Célular agregado al carrito:", nuevoProductoEnCarrito);
      }
    }
  };

  return (
    <div>
      <Navbar />

      <div style={{ backgroundColor: "black", padding: "1rem" }}>
        <div style={{ backgroundColor: "gold", padding: "1rem" }}>
          <div
            style={{
              backgroundColor: "black",
              padding: "1rem",
              border: "1px solid white",
            }}
          >
            <div style={{ wordBreak: "break-all", color: "white" }}>
              {/* Renderiza el payload en la interfaz
                            {payload ? (
                                <pre> {payload.id_usuario}<br/>
                                    {payload.email}<br/>
                                    {payload.administrador}<br/></pre>
                            ) : (
                                <p>Token no válido o no disponible.</p>
                            )} */}
              {/*<img
                className="rounded-5 border border-white border-4"
                src="img/productos/d_grande01.jpg"
                alt="Imagen"
                          /> */}
              <div className="container mt-4">
                <div className="row">
                  {productos.map((producto) => (
                    <div key={producto.id} className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                      <Card>
                        <Card.Img variant="top" src={`${producto.ruta_imagen}`} />
                        <Card.Body>
                          <Card.Title>{producto.nombre}</Card.Title>
                          <Card.Text>Número: {producto.numero}</Card.Text>
                          <Card.Text>Precio: ${producto.precio}</Card.Text>
                          <div className="w-100 justify-content-between">
                            <Link to={"/detalles/" + producto.id}>
                            <Button
                            variant="primary"
                            className="m-1 mr-2 text-uppercase"
                            style={{
                              backgroundColor: "black",
                              borderColor: "gold",
                              color: "gold",
                              fontSize: "12px",
                            }} 
                          >
                            Detalles
                            </Button>
                            </Link>
                            <Button
                            variant="primary"
                            className="mr-2 text-uppercase"
                            style={{
                              backgroundColor: "black",
                              borderColor: "#ebca6d",
                              color: "#ebca6d",
                              fontSize: "12px",
                            }}
                            onClick={() => agregarAlCarrito(producto.id)}
                          >
                            Agregar al carro
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
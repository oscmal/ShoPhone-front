import Navbar from "./NavbarJwt";
import { useEffect } from "react";
import Context from '../context/Context';
import { useContext } from 'react';
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productos from '../data/productos.json';
// import decodeTokenPayload from '../services/services'

const Detalles = () => {
  // const token = localStorage.getItem("token");
  // const payload = decodeTokenPayload(token);

  const { id_producto } = useParams();
  const { producto, setProducto } = useContext(Context);

  useEffect(() => {
    // Función para obtener el token de JWT almacenado en el navegador
    const filtered = productos.filter(prod =>prod.id ==id_producto);
    console.log(filtered);
    setProducto(filtered[0]);
    
  }, [setProducto, id_producto]);


  return (
    <div>
      <Navbar />

      <div style={{ backgroundColor: "black", padding: "1rem" }}>
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
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
              <div className="card-container d-flex flex-wrap justify-content-center">
                <div className="row">
                    <div key={producto.id} className="col-12">
                      <Card className="cardDetail d-flex flex-row">
                        <Card.Img variant="top" src={`${producto.ruta_imagen}`} alt={producto.nombre} style={{width: "200px"}} />
                        <Card.Body>
                          <Card.Title>{producto.nombre}</Card.Title>
                          <Card.Text>Número: {producto.numero}</Card.Text>
                          <Card.Text>{producto.detalle}</Card.Text>
                          <Card.Text>Stock: {producto.stock}</Card.Text>
                          <Card.Text>Precio: ${producto.precio}</Card.Text>
                          <div className="w-100 justify-content-between">
                            <Button
                            variant="primary"
                            className="mr-2 text-uppercase"
                            style={{
                              backgroundColor: "black",
                              borderColor: "gold",
                              color: "gold",
                              fontSize: "12px",
                            }}
                          >
                            Agregar al carro
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
import { useContext, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Context from "../context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/Carrito.css";

const Carrito = () => {
  const { carrito, setCarrito } = useContext(Context);
  const [detalleFinal, setDetalleFinal] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const eliminarDelCarrito = (id) => {
    const nuevosProductos = carrito.filter(
      (producto) => producto.id !== id
    );
    setCarrito(nuevosProductos);
    toast.error("Producto eliminado del carrito");
  };

  const aumentarCantidad = (id) => {
    const nuevosProductos = carrito.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    setCarrito(nuevosProductos);
  };


  const disminuirCantidad = (id) => {
    const nuevosProductos = carrito.map((producto) => {
      if (producto.id === id && producto.cantidad > 1) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setCarrito(nuevosProductos);
  };

  const getTotalPorProducto = (producto) => {
    return producto.precio * producto.cantidad;
  };

  const getTotalGeneral = () => {
    return carrito.reduce(
      (total, producto) => total + getTotalPorProducto(producto),
      0
    );
  };

    const formatearNumeroConPunto = (numero) => {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
  return (
    <div>
      {/* Mostrar "Cargando..." mientras los datos se están cargando */}
      <ToastContainer position="top-right" autoClose={1000} newestOnTop />
      <>
        {carrito.length === 0 && !detalleFinal ? (
          <div>
            <p style={{ color: "gold", textTransform: "uppercase" }}>
              El carrito está vacío
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </>

      {carrito.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div className="card-body">
            <Table striped bordered hover className="gradient-table">
              <thead>
                <tr>
                  <th className="d-none d-md-table-cell">Imagen</th>
                  <th className="d-none d-sm-table-cell">Nombre</th>
                  <th className="d-none d-md-table-cell texto-derecha" >Número</th>
                  <th className="d-none d-md-table-cell texto-derecha">Precio</th>
                  <th className="d-none d-sm-table-cell">Cantidad</th>
                  <th className="d-none d-sm-table-cell texto-derecha">Total</th>
                  <th className="d-none d-sm-table-cell">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((producto) => (
                  <tr className="tr-border" key={producto.id}>
                    <td className="d-none d-md-table-cell">
                      <img
                        src={producto.ruta_imagen}
                        alt={producto.nombre}
                        style={{ maxHeight: "50px", maxWidth: "50px" }}
                      />
                    </td>
                    <td>{producto.nombre}</td>
                    <td className="d-none d-md-table-cell texto-derecha">{formatearNumeroConPunto(producto.numero)}</td>
                    <td className="d-none d-md-table-cell texto-derecha">{formatearNumeroConPunto(producto.precio)}</td>
                    <td className="td-cantidad">
                      <Button
                        className="btn-table"
                        variant="primary"
                        onClick={() => disminuirCantidad(producto.id)}
                      >
                        -
                      </Button>{" "}
                      {producto.cantidad}{" "}
                      <Button
                        className="btn-table mas"
                        variant="primary"
                        onClick={() => aumentarCantidad(producto.id)}
                      >
                        +
                      </Button>
                    </td>
                    <td className="texto-derecha">
                      {formatearNumeroConPunto(getTotalPorProducto(producto))}
                    </td>
                    <td className="td-eliminar">
                      <Button
                        className="btn-table"
                        variant="danger"
                        onClick={() => eliminarDelCarrito(producto.id)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div>
            <h4
              style={{
                backgroundColor: "black",
                color: "gold",
                fontSize: "24px",
              }}
            >
              Total general: ${formatearNumeroConPunto(getTotalGeneral())}
            </h4>
          </div>
          <Button
            variant="primary"
            className="mr-2 text-uppercase"
            style={{
              backgroundColor: "black",
              borderColor: "gold",
              color: "gold",
              fontSize: "12px",
            }}
            disabled={isProcessing} // Deshabilitar el botón mientras se está procesando
          >
            Procesar carrito
          </Button>
        </div>
      )}
      <div>
        {/* Utilizamos el componente <pre> para preservar los saltos de línea */}
        {detalleFinal.length === 0 ? (
          <div></div>
        ) : (
          <p
            className="detalle_final"
            dangerouslySetInnerHTML={{ __html: detalleFinal }}
          ></p>
        )}
      </div>
    </div>
  );
};

export default Carrito;
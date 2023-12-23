import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <Navbar bg="black" variant="dark">
            <Container >
                <Navbar.Brand href="/">
                    <div className="circle-border">
                        <img
                            src="celular_navbar.png"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </div>
                </Navbar.Brand>
                <h2 className="mx-auto" style={{ color: 'gold' }}>
                    ShoPhone - Venta de Celulares
                </h2>
                <Nav className="ml-auto">
                    <Link to="/registrar">
                        <Button variant="primary" className="mr-2 text-uppercase" style={{ backgroundColor: 'black', borderColor: 'gold', color: 'gold', fontSize: '12px' }}>Regístrarse aquí</Button>
                    </Link>
                    <Link to="/iniciar_sesion">
                        <Button variant="primary" className="text-uppercase" style={{ backgroundColor: 'black', borderColor: 'gold', color: 'gold', marginLeft: '10px', fontSize: '12px' }}>Iniciar sesión</Button>
                    </Link>
                </Nav>
            </Container>
        </Navbar >
    )
}
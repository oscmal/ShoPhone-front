import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import Navbar from './NavbarJwt';

const Salir = () => {
    const navigate = useNavigate();
    const { setSession } = useContext(Context);

    const handleSalir = () => {
        // Eliminar el token del localStorage y el estado global
        setSession(false);
        // Redirigir al usuario a la página de inicio
        navigate('/');
    };

    return (
        <div>
            <Navbar />
            <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                    <div style={{ backgroundColor: 'black', padding: '1rem', border: '1px solid white' }}>
                        <h3 style={{ color: 'gold' }}>¿Estás seguro que deseas salir?</h3>
                        <button style={{ backgroundColor: 'black', borderColor: 'gold', color: 'gold', fontSize: '14px' }} onClick={handleSalir}>Salir</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Salir;
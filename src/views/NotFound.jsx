import Navbar from "../components/NavbarNotFouns";
export default function NotFound() {
    return (
        <div>
        <Navbar />
        <div style={{ backgroundColor: 'black', padding: '1rem' }}>
            <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem', border: '1px solid white' }}>
                    <h3 style={{ color: 'gold' }}>Página no encontrada</h3>
                </div>
            </div>
        </div>
    </div>
    );
}
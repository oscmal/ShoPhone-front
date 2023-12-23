import fotos from "../assets/img/fondop-f.png";

export default function Home() {
    return (
        <div style={{ backgroundColor: 'black', padding: '1rem' }}>
            <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem', border: '1px solid white' }}>

                    <h2 className="my-auto" style={{ color: 'gold' }}>
                        BIENVENIDO A SHOPHONE
                    </h2>
                    <h2 className="my-auto" style={{ color: 'gold' }}>
                        VENTA DE CELULARES
                    </h2>
                    <div className="container">
                        <img className="rounded-5 border border-white border-4" src={fotos} alt="Imagen" style={{ width: '80%', height: '80%'}} />

                    </div>
                </div>
            </div>
        </div>
    )
}
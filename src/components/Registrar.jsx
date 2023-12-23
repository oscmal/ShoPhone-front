import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const RegistroUsuario = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        telefono: '',
        contrasena: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //toast.error('Error al procesar el formulario. Intente nuevamente más tarde.');
        localStorage.setItem('usuario', formData.email);
        localStorage.setItem('pass', formData.contrasena);
        navigate("/iniciar_sesion")
    };

    const textFieldStyle = {
        background: 'white',
    };

    return (
        <div>
            <h2 style={{ color: 'gold' }}>REGISTRO DE USUARIO</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>Nombre:</label>
                    <div className="col-sm-10">
                        <TextField
                            key="1"
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'given-name', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>Apellido:</label>
                    <div className="col-sm-10">
                        <TextField
                        key="2"
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'family-name', // suggested autocomplete attribute
                            }}
                            
                        />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>E-mail:</label>
                    <div className="col-sm-10">
                        <TextField
                            key="3"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'email', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>Dirección:</label>
                    <div className="col-sm-10">
                        <TextField
                            key="4"
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'street-address', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>Teléfono:</label>
                    <div className="col-sm-10">
                        <TextField
                            key="5"
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'tel', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>Contraseña:</label>
                    <div className="col-sm-10">
                        <TextField
                            key="6"
                            type="password"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'current-password', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>

                <div className="form-group row justify-content-end">
                    <div className="col-sm-10 text-right">
                        <Button variant="contained" style={{ backgroundColor: 'black', color: 'gold', marginLeft: '10px', fontSize: '12px', border: '2px solid gold'  }} type="submit">Registrar</Button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default RegistroUsuario;
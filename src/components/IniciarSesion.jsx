import { useState, useEffect } from 'react';
import Context from '../context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material'; 

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        contrasena: '',
    });

    const navigate = useNavigate();
    const { session, setSession } = useContext(Context);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let  usuario = localStorage.getItem('usuario');
       let pass = localStorage.getItem('pass');

        if(usuario == formData.email && pass == formData.contrasena){
            setSession(true);
            navigate("/productos")
        }else{
            setSession(false);
            toast.error('Usuario y/o contraseña inválidos');
        }
    };


    const textFieldStyle = {
        background: 'white',
    };
    return (
        <div>
            <h2 style={{ color: 'gold' }}>INICIAR SESIÓN</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>E-mail:</label>
                    <div className="col-sm-10">
                        <TextField
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'email-name', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: 'gold' }}>Contraseña:</label>
                    <div className="col-sm-10">
                        <TextField
                            type="password"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'password-name', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-10 text-right">
                        <Button type="submit" variant="contained" style={{ backgroundColor: 'black', color: 'gold', marginLeft: '10px', fontSize: '12px', border: '2px solid gold' }}>
                            Iniciar sesión
                        </Button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
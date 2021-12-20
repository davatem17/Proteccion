import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const API = 'http://localhost:3000/api/auth/sign-up';

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const{name, email, password} = user;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API, {name, email,password}).then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => {
            console.log('error')
        })
         
    }
    return ( 
        <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                    <div className="card-body p-3 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <h2 className="fw-bold mb-2 text-uppercase">Registrarse</h2>
                            <br />
                            <form className="login100-form validate-form" onSubmit={handleSubmit}>
                                <div className="form-outline form-white mb-4">
                                    <input type="text"  className="form-control form-control-lg"
                                        name="name" placeholder="Usuario" onChange={handleChange}/>
                                    <label className="form-label">Usuario</label>
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input type="email"  className="form-control form-control-lg"
                                         name="email" placeholder="Correo electronico" onChange={handleChange}/>
                                    <label className="form-label">Correo</label>
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input type="password"  className="form-control form-control-lg"
                                        name="password" pattern="[A-Za-z0-9_-]{1,15}" requiered
                                        placeholder="Contraseña" onChange={handleChange}/>
                                    <label className="form-label" for="typePasswordX">Contraseña</label>
                                </div>
                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Crear Cuenta</button>
                            </form><br/>
                            <Link to="/" className="btn btn-outline-light btn-lg px-5 btn-danger">Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Register;
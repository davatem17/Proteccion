import React, {useState, useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import AppContext from "../context/AppContext";
import axios from 'axios';

const dev = process.env.API_DEV;
const API_DEV = 'http://localhost:3000';
const API_VIRTUAL = 'http://192.168.100.85:3000'

const Login = () => {
    const navigate = useNavigate();
    const {addToEq} = useContext(AppContext);
    const API = `${API_DEV}/api/auth/sign-in`;
 
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const{email, password} = user;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API, {email,password}).then(res => {
            console.log(res);
            addToEq(res.data.token);
            navigate('/home');
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
                            <h2 className="fw-bold mb-2 text-uppercase">Inicio de Sesión</h2>
                            <br />
                            <form className="login100-form validate-form" onSubmit={handleSubmit}>
                                <div className="form-outline form-white mb-4">
                                    <input type="email"  className="form-control form-control-lg"
                                       name="email" placeholder="Correo Electronico" onChange={handleChange}/>
                                    <label className="form-label">Correo</label>
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input type="password"  className="form-control form-control-lg"
                                        name="password" pattern="[A-Za-z0-9_-]{1,15}" requiered
                                        placeholder="Contraseña" onChange={handleChange}/>
                                    <label className="form-label" for="typePasswordX">Contraseña</label>
                                </div>
                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                            </form><br/>
                            <Link to="/register" className="btn btn-outline-light btn-lg px-5 btn-primary">Registro</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Login;
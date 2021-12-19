import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return ( 
        <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                    <div class="card-body p-3 text-center">
                        <div class="mb-md-5 mt-md-4 pb-5">
                            <h2 class="fw-bold mb-2 text-uppercase">Inicio de Sesión</h2>
                            <br />
                            <form class="login100-form validate-form" method='post' action='index.php'>
                                <div class="form-outline form-white mb-4">
                                    <input type="email"  class="form-control form-control-lg"
                                       name="username" placeholder="Correo Electronico" />
                                    <label class="form-label">Correo</label>
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password"  class="form-control form-control-lg"
                                        name="password" pattern="[A-Za-z0-9_-]{1,15}" requiered
                                        placeholder="Contraseña" />
                                    <label class="form-label" for="typePasswordX">Contraseña</label>
                                </div>
                                <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
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
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import { Tabla } from './Tabla';
import { useNavigate } from 'react-router-dom';


const dev = process.env.API_DEV;

const Hierba = () => {
    const [plantas, setPlantas] = useState([]);
    const API = `${dev}/api/recipes`;
    const { state } = useContext(AppContext);
    function func() {
        axios.get(API, {
            headers: {'Authorization': `Bearer ${state.token.payload}`}
        }).then(res => {
            setPlantas(res.data.data);
        })
    }
    useEffect(() => {
        if (plantas.length) {
            func()
        }else{
            console.log("algo")
        }
        
    }, []);

    const navigate = useNavigate();

    const logOut = () => {
        navigate('/');
        window.location.reload();
    }
    
    return ( 
        <section className="vh-100 gradient-custom">
            <div className="container">
                <div className="row">
                    <div className="col md-6">
                    <button className='btn btn-success'
                onClick={func}
            >
                Consultar
            </button>
                    </div>
                    <div className="col md-6">
                    <button className='btn btn-danger '
                onClick={logOut}
            >
                Cerrar Sesion
            </button>
                    </div>
                </div>
           
            
            </div>
           
            <div className='container'>
                <table className="table table-dark">
                    <thead>
                        <tr className="table-active">
                            <th>
                                Nombre
                            </th>
                            <th>
                                Ingredientes
                            </th>
            
                        </tr>
                    </thead>
                    <tbody>
                        {plantas.map(planta => (<Tabla key={planta._id} Perro={planta}/>))}
                    </tbody>
                </table>
            </div>
            
            
        </section>
     );
}
 
export default Hierba;
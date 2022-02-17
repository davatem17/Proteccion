import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import { Tabla } from './Tabla';

const Hierba = () => {
    const [plantas, setPlantas] = useState([]);
    const API = 'http://localhost:3000/api/recipes';
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

    console.log(plantas);
    
    return ( 
        <section className="vh-100 gradient-custom">
        
            <button className='btn btn-success'
                onClick={func}
            >
                Consultar
            </button>
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
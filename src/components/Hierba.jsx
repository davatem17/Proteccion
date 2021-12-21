import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';

const Hierba = () => {
    const [plantas, setPlantas] = useState([]);
    const API = 'http://localhost:3000/api/recipes';
    const { state } = useContext(AppContext);
    useEffect(() => {
        axios.get(API, {
            headers: {'Authorization': `Bearer ${state.token.payload}`}
        }).then(res => {
            setPlantas(res.data.data);
        })
    }, []);

    console.log(plantas);
    
    return ( 
        <>
            {plantas.map(planta => (<h1 key={planta._id}>{planta.name}</h1>))}
        </>
     );
}
 
export default Hierba;
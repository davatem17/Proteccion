import React, {useContext, useEffect} from 'react';
import AppContext  from '../context/AppContext';
import Hierba from './Hierba';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
const Home = () => {
    const { state } = useContext(AppContext);
    const navigate = useNavigate()
    
    return ( <>
        {Object.keys(state.token).length > 0 ? <Hierba/> : <Login/>}
    </>
        
     );
}
 
export default Home;
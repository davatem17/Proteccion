import React, {useContext } from 'react';
import AppContext  from '../context/AppContext';
import Hierba from './Hierba';
import { useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
const Home = () => {
    const { state } = useContext(AppContext);
    
    return ( <>
        {Object.keys(state.token).length > 0 ? <Hierba/> : <NotFound/>}
    </>
        
     );
}
 
export default Home;
import React, {useContext} from 'react';
import AppContext  from '../context/AppContext';
import Hierba from './Hierba';
const Home = () => {
    const { state } = useContext(AppContext);

    return ( <>
        {Object.keys(state.token).length > 0 ? <Hierba/> : <h1>No estas logeado</h1>}
    </>
        
     );
}
 
export default Home;
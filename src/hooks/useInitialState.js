import {useState} from 'react';

const initialState = {
    token: {}
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToEq = (payload) => {
        setState({
            ...state,
            token: {...state.token, payload},
        });
    }

    return {
        state,
        addToEq
    }
}

export default useInitialState;
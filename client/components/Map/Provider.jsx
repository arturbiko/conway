import React from 'react';
import useMap from "../map";

const Context = React.createContext({map: new Map(), actions: {}});

const Wrapper = ({children}) => {
    const [map, actions] = useMap();

    return (
        <Context.Provider value={{
            map: map,
            actions
        }}>
            {children}
        </Context.Provider>
    )
}

export default Wrapper;
export {
    Context
}

//filename Aux.js is reserved by windows, had to change to UnreservedAux
import React from 'react';


const aux = (props) => {
    return ( 
        <div className={props.className}>
        {props.children}
        </div>
     );
}
 
export default aux;
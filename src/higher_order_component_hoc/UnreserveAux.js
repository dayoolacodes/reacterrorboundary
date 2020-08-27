// name of the file Aux.js, is reserved for windows, had to change to UnreservedAux
import React from 'react';


const aux = (props) => {
    return ( 
        <div className={props.className}>
        {props.children}
        </div>
     );
}
 
export default aux;
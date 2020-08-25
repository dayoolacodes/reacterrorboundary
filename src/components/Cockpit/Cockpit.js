import React from 'react';
import Radium from 'radium'

const cockpit = (props) => {
    const style ={
        backgroundColor: "white",
        border: "1px solid green",
        borderRadius: "5px",
        padding: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 3px #cecece",
        outline: "none",
        ':hover' : {
          backgroundColor: "green",
          color: "white"
        }
      }
      style.border= "1px solid salmon"
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "white"
    }
    return ( 
    <div>
        <h1>Nĭ Hăo</h1>
        <button style={style} onClick={props.Toggle}>Toggle_Me</button>
    </div>
  );
}
 
export default Radium(cockpit);
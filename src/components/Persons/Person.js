import React from 'react';

const person = (props) => {
    const style = {
        margin: "16px auto",
        width: "60%", 
        border: '1px solid #cecece',
        boxShadow: "0 2px 3px #ccc",
        padding: "16px",
        textAlign: "center", 
        borderRadius: "10px",
        cursor: "pointer"
      }
    return ( 
        <div style={style} >
        <h3 onClick={props.deleteClick}>This is a component by {props.name} </h3>
        <input type="text" style={{textAlign:"center", borderRadius:"20px", outline:"none"}} placeholder="type name..."  onChange={props.onchanger} />
        </div>
     );
}
 
export default person;
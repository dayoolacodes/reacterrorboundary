import React from 'react';

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

const Persons = (props) => {
    return ( 
        <div style={style} >
        <h3 onClick={props.deleteClick}>This is a component by {props.name} </h3>
        <input type="text" placeholder="type name..."  onChange={props.onchanger} />
        </div>
     );
}
 
export default Persons;
import React from 'react';

const style = {
    margin: "16px auto",
    width: "60%", 
    border: '1px solid #cecece',
    boxShadow: "0 2px 3px blue",
    padding: "16px",
    textAlign: "center"
  }

const Persons = (props) => {
    return ( 
        <div style={style} onClick={props.click}>
        <h3>This is a component by {props.name}</h3>
        </div>
     );
}
 
export default Persons;
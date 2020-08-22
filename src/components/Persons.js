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
  // let rand = Math.random();
  // console.log(rand)
  //       if (rand > 0.7){
  //         throw new Error("something broke!!!");
  //       }
    return ( 
        <div style={style} >
        <h3 onClick={props.deleteClick}>This is a component by {props.name} </h3>
        <input type="text" style={{textAlign:"center", borderRadius:"20px", outline:"none"}} placeholder="type name..."  onChange={props.onchanger} />
        </div>
     );
}
 
export default Persons;
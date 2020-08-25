import React from 'react';
import Person from "./Person";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// let rand = Math.random();
 // console.log(rand)
 //       if (rand > 0.7){
 //         throw new Error("something broke!!!");
 //       }

const Persons = (props) => props.person.map((n, index) => {
    return (
    <ErrorBoundary key={n.id}>
    <Person onchanger={(event) => 
      props.onChanger(event, n.id)} 
      deleteClick={()=>props.deleteperson(index)} 
      name= {n.name} />
    </ErrorBoundary>
    )
    })

 
export default Persons;
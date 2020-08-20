import React, { Component } from 'react';
import Persons from './components/Persons'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Radium from "radium"
import './App.css';


class App extends Component {
  state = { 
    person :[
      {
        id: "hfualsdj",
        name: "Dayo"
      },
      {
        id: "sdjke",
        name: "Yele"
      },
      {
        id: "shdska",
        name: "Ayoola"
      }
    ],
    showDivToggle: false
   }
   
   deleteperson = (idNum) =>{
    console.log("clicked", idNum)
    const person = this.state.person
    person.splice(idNum, 1);
    this.setState({person: person})
  }
  
 
Toggle=()=>{
  this.setState({showDivToggle:!(this.state.showDivToggle)})
}

onChanger =(e, id)=>{
  
  // console.log(e.target.value)
  const personId = this.state.person.findIndex(n =>{
    return id===n.id
  })
  // console.log(personId)
  const person = {...this.state.person[personId]}
// console.log(person)
  person.name =  e.target.value;
    // console.log(person.name)
    const perss = [...this.state.person];
    perss[personId] = person
    this.setState({person:perss})

  }
 
  render() { 
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
    let persons = null
    
    if (this.state.showDivToggle){
    persons = 
      this.state.person.map((n, index) => {
      return (
      <ErrorBoundary key={n.id}>
      <Persons  onchanger={(event) => this.onChanger(event, n.id)} deleteClick={()=>this.deleteperson(index)} name= {n.name}/>
      </ErrorBoundary>
      )
      })
      style.border= "1px solid salmon"
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "white"

      } 
    }



    return ( 
    <div className="App">
      <h1>Nĭ Hăo</h1>
      <button style={style} onClick={this.Toggle}>Toggle_Me</button>
      {persons}
    </div>

     );
  }
}
 
export default Radium(App);


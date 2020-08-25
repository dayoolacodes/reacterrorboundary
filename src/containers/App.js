import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
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
  // console.log("clicked")
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
 
    let persons = null
    
    if (this.state.showDivToggle){
    persons = 
    <Persons 
    onChanger={this.onChanger} 
    deleteperson={this.deleteperson} 
    person ={this.state.person}/>
    } 
  

    return ( 
    <div className="App">
      <Cockpit Toggle={this.Toggle}/>
      {persons}
    </div>

     );
  }
}
 
export default Radium(App);


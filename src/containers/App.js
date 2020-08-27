import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Radium from "radium"
import './App.css';


export const Auth = React.createContext(false)
class App extends Component {
  state = { 
    person :[
      {
        id: "hfualsdj",
        name: "Jeff"
      },
      {
        id: "sdjke",
        name: "Mark"
      },
      {
        id: "shdska",
        name: "Bill"
      }
    ],
    showDivToggle: false,
    authenticated: false
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

  loginHandler =()=>{
    this.setState({authenticated:!(this.state.authenticated)})
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
      <Cockpit Toggle={this.Toggle}
      showDivToggle = {this.state.showDivToggle}
      login={this.loginHandler}
      loginText={this.state.authenticated? "Logout" : "Login"}
      />
      <Auth.Provider value={this.state.authenticated}>
      {persons}
      </Auth.Provider>
    </div>

     );
  }
}
 
export default Radium(App);


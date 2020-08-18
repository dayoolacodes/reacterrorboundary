import React, { Component } from 'react';
import Persons from './components/Persons'
import './App.css';


class App extends Component {
  state = { 
    person :[
      {
        id: 1,
        name: "Dayo"
      },
      {
        id: 2,
        name: "Yele"
      },
      {
        id: 3,
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

  render() { 
    let persons = null
    if (this.state.showDivToggle){
      persons = 
      this.state.person.map( (n, index) => (
        <Persons key={n.id} click={()=>this.deleteperson(index)} name= {n.name}/>
      ))
    }


    return ( 
    <div className="App">
      <h1>Ni Hao</h1>
      <button onClick={this.Toggle}>Toggle_Me</button>
      {persons}
    </div>

     );
  }
}
 
export default App;


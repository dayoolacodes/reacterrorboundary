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

    ]
   }

  deleteperson = (id) =>{
    console.log("clicked")
    const person = this.state.person.splice(id);
    this.setState({person: person})
  }
  

  render() { 
    return ( 
    <div className="App">
      <h1>Ni Hao</h1>

      {this.state.person.map( n => (
        <Persons key={n.id} click={this.deleteperson} name= {n.name}/>
      ))}

    </div>

     );
  }
}
 
export default App;


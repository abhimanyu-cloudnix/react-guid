import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component{

  state = ({
    persons : [
      {id : 1 , name : 'abhi', age: 19},
      {id : 2 , name : 'asdasd', age: 20},
      {id : 3 , name : 'abhi3', age: 19},
    ],
    showPerson : false
  });


  newNameHandler = (event) =>{
    console.log(event.target);
    this.setState({
      persons : [
        {id : 1, name : event.target.value, age: 19},
        {id : 2, name : "hi", age: 20},
        {id : 3, name : 'abhi3', age: 19},
      ]
    })
  }

  togglePersonHandler = () =>{
    console.log("Was onClick");
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
    
  }

  deletePersonHandler = (personIndex) =>{
    console.log(personIndex);
    const personnew = [...this.state.persons];
    personnew.splice(personIndex, 1);
    this.setState({ persons : personnew})
  }

  render(){
  let persons = null;
  if( this.state.showPerson ){
    
    persons =  <Persons  
                clicked={this.deletePersonHandler}
                persons={this.state.persons} 
                changed={this.newNameHandler} 
                      />
    ;
  }
    return (
      <div className="App">
        <Cockpit 
          title={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi, i\'m abhi!!!'));
}

export default App;



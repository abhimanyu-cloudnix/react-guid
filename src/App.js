import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

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
    const personnew = [...this.state.persons];
    personnew.splice(personIndex, 1);
    this.setState({ persons : personnew})
  }

  render(){


  const style={
    backgroundColor: 'white',
    font:'inerit',
    padding:'10px'
  }
  
  let persons = null;

  if( this.state.showPerson ){
    console.log("sdsdfsdf");
    persons = (
      <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                        clicked={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        key={person.id}
                      />
            })}
            
          </div>
    );

  }
    return (
      <div className="App">
        <h1>Hii this is react app</h1>
        <button onClick={this.togglePersonHandler} style={style} >Switch it</button>
        
        {persons}
      </div>
    );
  }
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi, i\'m abhi!!!'));
}

export default App;



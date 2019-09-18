import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = prop =>{

  const [ personsState, setPersonsState] = useState ({
    persons : [
      {name : 'abhi', age: 19},
      {name : 'asdasd', age: 20},
      {name : 'abhi3', age: 19},
    ],
    showPerson : false
  });

  // const switchHandler = () =>{
  //   // console.log("Was onClick");
  //   setPersonsState({
  //     persons : [
  //     {name : 'abhi', age: 19},
  //     {name : 'kumar', age: 543},
  //     {name : 'kjhsfk', age: 19},
  //   ]
  //   });
    
  // }

  const newNameHandler = (event) =>{
    console.log(event.target);
    setPersonsState({
      persons : [
        {name : event.target.value, age: 19},
        {name : "hi", age: 20},
        {name : 'abhi3', age: 19},
      ]
    })
  }

  const togglePersonHandler = () =>{
    console.log("Was onClick");
    const doesShow = personsState.showPerson;
    setPersonsState({
      persons : [
        {name : 'abhi', age: 19},
        {name : 'kumar', age: 543},
        {name : 'kjhsfk', age: 19},
      ],
      showPerson : !doesShow
    }); 
    
  }

  const style={
    backgroundColor: 'white',
    font:'inerit',
    padding:'10px'
  }
  
  let persons = null;

  if( personsState.showPerson ){
    console.log("sdsdfsdf");
    persons = (
      <div>
            {personsState.persons.map(person => {
              return <Person 
                        name={person.name} 
                        age={person.age} 
                      />
            })}
            
          </div>
    );

  }
    return (
      <div className="App">
        <h1>Hii this is react app</h1>
        <button onClick={togglePersonHandler} style={style} >Switch it</button>
        
        {persons}
      </div>
    );
  
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi, i\'m abhi!!!'));
}

export default App;



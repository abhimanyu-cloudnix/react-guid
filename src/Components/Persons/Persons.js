import React from 'react';
// import './Person.css';
import Person from './Person/Person';

const persons = (prop) => prop.persons.map((person, index) => {
        return <Person 
                  click={() => prop.clicked(index)}
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event) => prop.changed(event, person.id)}
                />
      });

export default persons;
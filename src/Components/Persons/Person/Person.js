import React from 'react';
import './Person.css';

const person = (prop) => {
	let classes= ['red', 'bold'].join(' ');
	return (
		<div className="Person">
			<p onClick={prop.click} className={classes} >Hii, i am {prop.name} and i am {prop.age}</p>
			<input type="text" onChange={prop.changed} value={prop.name} />
		</div>
	
		)
		

}


export default person;
import React from 'react';
import './Cockpit.css';

const cockpit = ( prop ) => {
    
    let btnClass=['btn'];
    if(prop.showPerson ){
        btnClass.push('red');
    }

    const classes= [];
	if(prop.persons.length <= 2){
        classes.push('red');
    }
    if(prop.persons.length <= 1){
        classes.push('bold');

    }
    return(
        <div> 
            <h1 >{prop.title}</h1>
            <p className={classes.join(' ')}>Color changeer</p>
            <button 
                className={btnClass.join(' ')}
                onClick={prop.clicked} 
                >Switch it</button>
        </div>
    );
};

export default cockpit;
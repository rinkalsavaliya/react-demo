import React from 'react';
import './Person.css';

/*
* JSX to render person block
*/
const person = (props) => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age : {props.age}</p>
      <p className={(props.children) ? '' : 'red'}>{props.children || 'Hobby getting loaded..... '}</p>
      <div className='display-inline-flex'>
        <button onClick={props.shuffle}>Shuffle Others</button>
        <button onClick={props.delete}>Delete</button><br/>
      </div>
    </div>
  )
};

export default person;

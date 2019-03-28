import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age : {props.age}</p>
      <p>{props.children}</p>
      <button onClick={props.click.bind(this, props.index)}>Shuffle Other Persons</button><br/>
    </div>
  )
};

export default person;

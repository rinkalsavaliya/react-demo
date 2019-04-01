import React from 'react';
import './Person.css';
import Radium from 'radium';
/*
* JSX to render person block
*/
const person = (props) => {
  // use of radium for sudo selectors
  const btnStyle = {
    ':hover': { color: 'grey' }
  };
  const personStyle = {
    ':hover': { color: 'grey' },
    '@media (max-width: 512px)': {
      width: '450px'
    }
  };
  return (
    <div className='person' key={props.id} style={personStyle}>
      <h1>{props.name}</h1>
      <p>Your Age : {props.age}</p>
      <p className={(props.children) ? '' : 'red'}>{props.children || 'Hobby getting loaded..... '}</p>
      <div className='display-inline-flex'>
        <button onClick={props.shuffle}>Shuffle Others</button>
        <button style={btnStyle} onClick={props.delete}>Delete</button><br/>
      </div>
    </div>
  )
};

export default Radium(person);

import React from 'react';
import personClasses from './Person.module.css';
import Radium from 'radium';

/*
* JSX to render person block
*/
const Person = (props) => {
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
    <div className={personClasses.person} key={props.id} style={personStyle}>
      <h1>{props.name}</h1>
      <p>Your Age : {props.age}</p>
      <p className={(props.children) ? '' : personClasses.red}>{props.children || 'Hobby getting loaded..... '}</p>
      <div className={personClasses['display-inline-flex']}>
        <button className={personClasses.btn} onClick={props.shuffle}>Shuffle Others</button>
        <button className={personClasses.btn} style={btnStyle} onClick={props.delete}>Delete</button><br/>
      </div>
    </div>
  )
};

export default Radium(Person);

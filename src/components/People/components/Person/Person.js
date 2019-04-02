import React from 'react';
import personClasses from './Person.module.css';
import Radium from 'radium';
/*
* JSX to render person block
*/
class Person extends React.Component {
  render() {
    // this use of radium styled hover makes the life cycle run again
    // if you comment the hover part (line-27), you won't get **getDerivedStateFromProps** called
    // this hover doesn't affect in parent component
    // i.e., by using this hover, parent does not change either state or props
    // so it should not re-render the component
    // So, I guess other life cycle methods must also be called, if we overwrite them

    // because react updates virtual dom when radium is used, so it calls all life cycle methods
    // and actual DOM updates itself when radium is not used
    const personStyle = {
      ':hover': { backgroundColor: 'tan' }
    };
    return (
      <div id={this.props.person.id} className={personClasses.person} style={personStyle}>
        <h1>{this.props.person.name}</h1>
        <p>Your Age : {this.props.person.age}</p>
        <p className={(this.props.person.children) ? personClasses.green : personClasses.red}>{this.props.person.children || 'Hobby getting loaded..... '}</p>
        <div className={personClasses['display-inline-flex']}>
          <button className={personClasses.btn} onClick={this.props.shuffle}>Shuffle Others</button>
          <button className={personClasses.btn + ' ' + personClasses['dlt-btn']} onClick={this.props.delete}>Delete</button><br/>
        </div>
      </div>
    )
  }
};

export default Radium(Person);

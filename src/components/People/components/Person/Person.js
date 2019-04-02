import React from 'react';
import personClasses from './Person.module.css';
import Radium from 'radium';
/*
* JSX to render person block
*/
class Person extends React.Component {
  static getDerivedStateFromProps = (props, state) => {
    console.log('getDerivedStateFromProps :', props, state);
    return props;
  }
  // shouldComponentUpdate = (props, state) => {
  //   console.log('shouldComponentUpdate', this.props.id === props.id, this.props.id, props.id);
  //   if (this.props.id === props.id) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    // this use of radium styled hover makes the life cycle run again
    // if you comment the hover part (line-23), you won't get **getDerivedStateFromProps** called
    const personStyle = {
      ':hover': { color: 'red' }
    };
    return (
      <div key={this.props.id} className={personClasses.person} style={personStyle}>
        <h1>{this.props.name}</h1>
        <p>Your Age : {this.props.age}</p>
        <p className={(this.props.children) ? '' : personClasses.red}>{this.props.children || 'Hobby getting loaded..... '}</p>
        <div className={personClasses['display-inline-flex']}>
          <button className={personClasses.btn} onClick={this.props.shuffle}>Shuffle Others</button>
          <button className={personClasses.btn + ' ' + personClasses['dlt-btn']} onClick={this.props.delete}>Delete</button><br/>
        </div>
      </div>
    )
  }
};

export default Radium(Person);

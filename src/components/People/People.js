import React, { Component } from 'react';
import Person from '../Person/Person';
import _ from 'lodash';
import personList from '../../person-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personState: { persons: _.shuffle(personList) }
    }
  }


  /*
  * function to shuffle persons
  */
  shufflePersons = (index) => {
    const persons = this.shuffleAllExceptSelf(this.state.personState.persons, index);
    // set perosn-state
    this.setState({ personState: { persons } });
  }


  /*
  * a function to shuffle all people except self
  */
  shuffleAllExceptSelf = (array, arrIndex) => {
    let index = -1;
    const size = array.length;
    const lastIndex = size - 1;
    while (++index < size) {
      const random = index + Math.floor(Math.random() * (lastIndex - index + 1));
      if (random !== arrIndex && index !== arrIndex) {
        const value = array[random];
        array[random] = array[index];
        array[index] = value;
      }
    }
    return array;
  }


  /*
  * restore all the persons from the actual list
  */
  restorePersons = () => {
    this.setState({
      personState: {
        persons: JSON.parse(JSON.stringify(personList))
      }
    });
  }


  /*
  * delete the person from the list
  */
  deletePerson = (arrIndex) => {
    this.state.personState.persons.splice(arrIndex, 1);
    this.setState({
      personState: {
        persons: this.state.personState.persons
      }
    });
  }


  /*
  * call render method
  */
  render = () => {
    return (
      <div className='display-block'>
        <button className='btn' onClick={this.shufflePersons}>Shuffle All Persons</button>
        <button className='btn' onClick={this.restorePersons}>Restore All Persons</button><br/>
        {
          this.state.personState.persons.map((person, index) => {
            return (
              <Person key={`${person.id}-${person.name}`} id={`${person.id}-${person.name}`} name={person.name} age={person.age} shuffle={() => this.shufflePersons(index)} delete={() => this.deletePerson(index)}>
                {person.hobby}
              </Person>
            )
          })
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Char from './Char/Char';
import Text from './Validation/Text';
import _ from 'lodash';
import personList from './person-list';
import { StyleRoot } from 'radium';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personState: { persons: _.shuffle(personList) },
      textState: { text: '', count: 0, minText: 5 }
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
  * change event for the text
  */
  changeText = (event) => {
    this.setState({
      textState: {
        ...this.state.textState,
        text: event.target.value,
        count: (event.target.value || '').length
      }
    });
  }


  /*
  * delete character from the text
  */
  deleteChar = (index) => {
    let text = this.state.textState.text.split('');
    text.splice(index, 1);
    this.setState({
      textState: {
        ...this.state.textState,
        text: text.join(''),
        count: text.length
      }
    });
  }


  /*
  * call render method
  */
  render = () => {
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a Demo React App, and I show a list of people</h1>
          <p>you can shuffle all people, or you can stick to one person, and shuffle all except him/her.</p>
          <input className='text' onChange={this.changeText} value={this.state.textState.text}/>
          <Text count={this.state.textState.count} min={this.state.textState.minText}/>
          {
            this.state.textState.text.split('').map((char, key) => {
              return (
                <Char key={key} deleteChar={() => this.deleteChar(key)} char={char}/>
              )
            })
          }
          <br/>
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
      </StyleRoot>
    );
  }
}

export default App;

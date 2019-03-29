import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import _ from 'lodash';
import personList from './person-list';

/*
* define state
*/
const app = props => {
  const [ personState, setPersonsState] = useState({
    persons: _.shuffle(personList)
  });


  /*
  * function to shuffle persons
  */
  const shufflePersons = (index) => {
    const persons = shuffleAllExceptSelf(personState.persons, index);
    // set perosn-state
    setPersonsState({ persons });
  }


  /*
  * a function to shuffle all people except self
  */
  const shuffleAllExceptSelf = (array, arrIndex) => {
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

  const restorePersons = () => {
    setPersonsState({ persons: JSON.parse(JSON.stringify(personList)) });
  }


  /*
  * delete the person from the list
  */
  const deletePerson = (arrIndex) => {
    personState.persons.splice(arrIndex, 1);
    setPersonsState({ persons: personState.persons });
  }


  /*
  * return JSX
  */
  return (
    <div className="App">
      <h1>Hi, I'm a Demo React App, and I show a list of people</h1>
      <p>you can shuffle all people, or you can stick to one person, and shuffle all except him/her.</p>
      <button onClick={shufflePersons}>Shuffle All Persons</button>
      <button onClick={restorePersons}>Restore All Persons</button><br/>
      {
        personState.persons.map((person, key) => {
          return (
            <Person key={key} name={person.name} age={person.age} shuffle={() => shufflePersons(key)} delete={() => deletePerson(key)}>
              {person.hobby}
            </Person>
          )
        })
      }
    </div>
  );
  // not a very good way of creating element
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
}

export default app;

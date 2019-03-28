import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/*
* define state
*/
const app = props => {
  const [ personState, setPersonsState] = useState({
    persons: [
      { name: 'Rinkal', age: 23, hobby: 'My Hobby is to help others' },
      { name: 'Dinesh', age: 2000, hobby: 'My Hobby is to irritate others' },
      { name: 'iMehul', age: 50, hobby: 'My Hobby is to bluff about me and Deepi' },
      { name: 'Alisha', age: 21, hobby: 'Hobby getting loaded..... ' },
      { name: 'Jeet', age: 15, hobby: 'Hobby getting loaded..... ' },
      { name: 'Bhavesh', age: 3, hobby: 'My Hobby is to irritate Rinkal' },
      { name: 'Darshan', age: 40, hobby: 'I like to make people drink salt-water' },
      { name: 'Vikas', age: 5, hobby: 'My Hobby is to find Math mistakes' },
      { name: 'Ayush', age: 7, hobby: 'Hobby getting loaded..... ' },
      { name: 'Vineet', age: 65, hobby: 'My Hobby is feka marva' },
      { name: 'Bhoomi', age: 28, hobby: 'Hobby getting loaded..... ' },
      { name: 'Daxesh', age: 26, hobby: 'My Hobby is jugaad karvo' },
      { name: 'Daxesh-J', age: 21, hobby: 'Hobby getting loaded..... ' },
      { name: 'Bhautik', age: 26, hobby: 'Hobby getting loaded..... ' }
    ]
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

  /*
  * return JSX
  */
  return (
    <div className="App">
      <h1>Hi, I'm a Demo React App, and I show a list of people</h1>
      <p>you can shuffle all people, or you can stick to one person, and shuffle all except him/her.</p>
      <button onClick={shufflePersons}>Shuffle All Persons</button><br/>
      {
        personState.persons.map((person, key) => {
          return (
            <Person key={key} index={key} name={person.name} age={person.age} click={shufflePersons}>
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

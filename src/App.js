import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import _ from 'lodash';

// this.shufflePersons = this.shufflePersons.bind(this);
const app = props => {
  const [ personState, setPersonsState] = useState({
    persons: [
      { name: 'Rinkal', age: 23, children: 'hi' },
      { name: 'Dinesh', age: 2000, children: 'hi' },
      { name: 'iMehul', age: 50, children: 'hi' },
      { name: 'Alisha', age: 21, children: 'test' },
      { name: 'Jeet', age: 15, children: 'hi' },
      { name: 'Bhavesh', age: 3, children: 'hi' },
      { name: 'Darshan', age: 40, children: 'hi' },
      { name: 'Vikas', age: 5, children: 'hi' },
      { name: 'Ayush', age: 7, children: 'hi' },
      { name: 'Vineet', age: 65, children: 'hi' },
      { name: 'Vineet', age: 25, children: 'hi' },
      { name: 'Daxesh', age: 26, children: 'hi' },
      { name: 'Daxesh-J', age: 21, children: 'hi' },
      { name: 'Bhautik', age: 26, children: 'hi' }
    ]
  });

  const shufflePersons = (index) => {
    const persons = shuffleSelf(JSON.parse(JSON.stringify(personState.persons)), index);
    setPersonsState({
      persons
    });
  }


  const shuffleSelf = (array, arrIndex) => {
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

  return (
    <div className="App">
      <h1>Hi, I'm a Demo React App</h1>
      {/*<button onClick={shufflePersons}>Shuffle Persons</button><br/>*/}
      {
        personState.persons.map((person, key) => {
          return (
            <Person key={key} index={key} name={person.name} age={person.age} click={shufflePersons}>
              {/*{person.children}*/}
            </Person>
          )
        })
      }
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
}

export default app;

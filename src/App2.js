import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import _ from 'lodash';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Rinkal', age: 23, children: 'hi' },
        { name: 'Dinesh', age: 75, children: 'hi' },
        { name: 'iMehul', age: 50, children: 'hi' },
        { name: 'Alisha', age: 21, children: 'test' },
        { name: 'Jeet', age: 15, children: 'hi' },
        { name: 'Bhavesh', age: 3, children: 'hi' },
      ]
    }
    this.shufflePersons = this.shufflePersons.bind(this);
  }

  shufflePersons = () => {
    this.setState({
      persons: _.shuffle(this.state.persons)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a Demo React App</h1>
        <button onClick={this.shufflePersons}>Shuffle Persons</button><br/>
        {
          this.state.persons.map((person, key) => {
            return (
              <Person key={key} name={person.name} age={person.age}>
                {/*{person.children}*/}
              </Person>
            )
          })
        }
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;



/*
* define state
*/
// const app = props => {
//   const minText = 5;
//   const [ personState, setPersonsState] = useState({
//     persons: _.shuffle(personList)
//   });
//
//   const [ textState, setTextState] = useState({
//     text: '', count: 0
//   });
//
//
//   /*
//   * function to shuffle persons
//   */
//   const shufflePersons = (index) => {
//     const persons = shuffleAllExceptSelf(personState.persons, index);
//     // set perosn-state
//     setPersonsState({ persons });
//   }
//
//
//   /*
//   * a function to shuffle all people except self
//   */
//   const shuffleAllExceptSelf = (array, arrIndex) => {
//     let index = -1;
//     const size = array.length;
//     const lastIndex = size - 1;
//     while (++index < size) {
//       const random = index + Math.floor(Math.random() * (lastIndex - index + 1));
//       if (random !== arrIndex && index !== arrIndex) {
//         const value = array[random];
//         array[random] = array[index];
//         array[index] = value;
//       }
//     }
//     return array;
//   }
//
//   const restorePersons = () => {
//     setPersonsState({ persons: JSON.parse(JSON.stringify(personList)) });
//   }
//
//
//   /*
//   * delete the person from the list
//   */
//   const deletePerson = (arrIndex) => {
//     personState.persons.splice(arrIndex, 1);
//     setPersonsState({ persons: personState.persons });
//   }
//
//
//   const changeTextArea = (event) => {
//     setTextState({
//       text: event.target.value,
//       count: (event.target.value || '').length
//     });
//   }
//
//   const deleteChar = (index) => {
//     let text = textState.text.split('');
//     text.splice(index, 1);
//     text = text.join('');
//     setTextState({ text, count: text.length });
//   }
//
//
//   /*
//   * return JSX
//   */
//   return (
//     <div className="App">
//       <h1>Hi, I'm a Demo React App, and I show a list of people</h1>
//       <p>you can shuffle all people, or you can stick to one person, and shuffle all except him/her.</p>
//       <textarea rows="5" cols="150" onChange={changeTextArea} value={textState.text}></textarea><br/>
//       <Text count={textState.count} min={minText}/>
//       {
//         textState.text.split('').map((char, key) => {
//           return (
//             <Char key={key} deleteChar={() => deleteChar(key)} char={char}/>
//           )
//         })
//       }
//       <br/>
//       <button onClick={shufflePersons}>Shuffle All Persons</button>
//       <button onClick={restorePersons}>Restore All Persons</button><br/>
//       {
//         personState.persons.map((person, key) => {
//           return (
//             <Person key={key} name={person.name} age={person.age} shuffle={() => shufflePersons(key)} delete={() => deletePerson(key)}>
//               {person.hobby}
//             </Person>
//           )
//         })
//       }
//     </div>
//   );
//   // not a very good way of creating element
//   // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
// }

// export default app;

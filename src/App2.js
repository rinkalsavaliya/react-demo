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

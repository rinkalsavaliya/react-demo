import React, { Component } from 'react';
import './App.css';
import { Introduction, TextInput, People, ErrorBoundary } from './components';
import { StyleRoot } from 'radium';
import personList from './person-list';

/*
* main parent component - App, which wraps all the child components
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [...personList],
      textState: {
        minText: 5
      }
    }
  }

  /*
  * call render method
  */
  render = () => {
    return (
      <StyleRoot>
        <div className="app">
          <ErrorBoundary>
            <Introduction/>
            <TextInput textState={this.state.textState}/>
            <People personList={this.state.personList}/>
          </ErrorBoundary>
        </div>
      </StyleRoot>
    );
  }
}

export default App;

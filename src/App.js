import React, { Component } from 'react';
import './App.css';
import { Introduction, TextInput, People, ErrorBoundary } from './components';
import { StyleRoot } from 'radium';

/*
* main parent component - App, which wraps all the child components
*/
class App extends Component {

  /*
  * call render method
  */
  render = () => {
    return (
      <StyleRoot>
        <div className="app">
          <ErrorBoundary>
            <Introduction/>
            <TextInput/>
            <People/>
          </ErrorBoundary>
        </div>
      </StyleRoot>
    );
  }
}

export default App;

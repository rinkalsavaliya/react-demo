import React, { Component } from 'react';
import './App.css';
import { Introduction, TextInput, People } from './components';
import { StyleRoot } from 'radium';

class App extends Component {

  /*
  * call render method
  */
  render = () => {
    return (
      <StyleRoot>
        <div className="app">
          <Introduction/>
          <TextInput/>
          <People/>
        </div>
      </StyleRoot>
    );
  }
}

export default App;

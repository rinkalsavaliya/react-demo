import React, { Component } from 'react';
import './App.css';
import { Introduction, TextInput, People, ErrorBoundary, Login } from './components';
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
      },
      user: {
        authenticated: true,
        loginErrors: {},
        loginParams: { username: '', password: '' }
      }
    }
  }

  componentDidMount = () => {
    document.querySelector('input').focus();
  }

  changeLoginParams = (param, event) => {
    let user = {...this.state.user};
    user.loginParams[param] = event.target.value;
    user.loginErrors[param] = '';
    this.setState({
      user
    });
  }

  loginHandler = (event) => {
    event.preventDefault();
    let user = {...this.state.user};
    if (!this.state.user.loginParams.username) {
      user.loginErrors.username = 'username is required';
    } else if (!user.loginParams.password) {
      user.loginErrors.password = 'password is required';
    } else {
      user = {
        authenticated: true
      };
    }
    this.setState({
      user
    })
  }


  /*
  * call render method
  */
  render = () => {
    if (this.state.user.authenticated) {
      return (
        <StyleRoot>
          <div className="app">

            <Introduction/>

            <ErrorBoundary>
              <TextInput textState={this.state.textState}/>
            </ErrorBoundary>

            <ErrorBoundary>
              <People personList={this.state.personList}/>
            </ErrorBoundary>

          </div>
        </StyleRoot>
      );
    }
    return (
      <Login login={this.loginHandler} changeParam={this.changeLoginParams} user={this.state.user}></Login>
    );
  }
}

export default App;

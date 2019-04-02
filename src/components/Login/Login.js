import React from 'react';
import './Login.css';

/*
* JSX to render char block
*/
const login = (props) => (
  <div>
    <div className='login-page'>
      <h1>React Demo</h1>
      <form>
        <div className='form-content'>
          <div className='form-group'>
            <label className='label'>username</label>
            <input type='text' onChange={props.changeParam.bind(this, 'username')} value={props.user.loginParams.username} className='form-control' placeholder='Username'/>
            <span className='error'>{props.user.loginErrors.username}</span>
          </div>
          <div className='form-group'>
            <label className='label'>password</label>
            <input type='password' onChange={props.changeParam.bind(this, 'password')} className='form-control' value={props.user.loginParams.password} placeholder='Password'/>
            <span className='error'>{props.user.loginErrors.password}</span>
          </div>
        </div>
        <button className='btn rounded-btn' type='submit' onClick={props.login}> Log in </button>
      </form>
    </div>
  </div>
);

export default login;

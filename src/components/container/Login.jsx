import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className='Login'>
          <div className='signin-area'>
            <h1 className='signin-title'>Questioner</h1>
            <h4 className='signin-title-description'>
              Crowd-source questions platform for meetup
            </h4>
            <div className='signin-card'>
              <h4 className='signin-card-title'>Sign-in</h4>
              <form action='./index.html'>
                <div className='signin-input-section'>
                  <input type='email' placeholder='Email' />
                </div>
                <div className='signin-input-section'>
                  <input type='password' placeholder='Password' />
                </div>
                <div className='signin-submit'>
                  <button type='submit'>Submit</button>
                </div>
              </form>
              <div className='signin-card-footer'>
                <small>
                  <Link to='/signup'>New here? Sign up</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;

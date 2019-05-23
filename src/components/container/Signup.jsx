import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <Fragment>
        <div className='Signup'>
          <div className='signup-area'>
            <h1 className='signup-title'>Questioner</h1>
            <h4
              className='signup-title-description'
            >
            Crowd-source questions platform for meetup
            </h4>
            <div className='signup-card'>
              <h4 className='signup-card-title'>Sign-up</h4>
              <form action='./index.html'>
                <div className='signup-input-section'>
                  <input type='text' placeholder='First Name' />
                </div>
                <div className='signup-input-section'>
                  <input type='text' placeholder='Last Name' />
                </div>
                <div className='signup-input-section'>
                  <input type='email' placeholder='Email' />
                </div>
                <div className='signup-input-section'>
                  <input type='password' placeholder='Password' />
                </div>
                <div className='signup-input-section'>
                  <input type='password' placeholder='Retype Password' />
                </div>
                <div className='signup-submit'>
                  <button type='submit'>Submit</button>
                </div>
              </form>
              <div className='signup-card-footer'>
                <small>
                  <Link to='/login'>Aleady have an account? Sign In</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Signup;

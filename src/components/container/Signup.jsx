import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { signup } from '../../actions';
import jsonFormatter from '../../utils/jsonFormat.utils';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      othername: '',
      phoneNumber: '',
      username: '',
      password: '',
      email: '',
    };
  }

  handleSignup = async (e) => {
    e.preventDefault();
    const { signupAction } = this.props;
    const {
      firstname,
      lastname,
      othername,
      phoneNumber,
      username,
      password,
      email
    } = this.state;

    await signupAction({
      firstname,
      lastname,
      othername,
      phoneNumber,
      username,
      password,
      email
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {
      firstname,
      lastname,
      othername,
      phoneNumber,
      username,
      password,
      email,
    } = this.state;
    const { auth } = this.props;
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
              <form onSubmit={this.handleSignup}>
                {
                  auth && auth.error && auth.error.error && (
                  <div
                    className='error-section'
                    dangerouslySetInnerHTML={{ __html: jsonFormatter(JSON.stringify(auth.error.error)) }}
                  />
                  )
                }
                <div className='signup-input-section'>
                  <input
                    type='text'
                    placeholder='First Name'
                    value={firstname}
                    name='firstname'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-input-section'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    value={lastname}
                    name='lastname'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-input-section'>
                  <input
                    type='text'
                    placeholder='Other Name'
                    value={othername}
                    name='othername'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-input-section'>
                  <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    name='email'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-input-section'>
                  <input
                    type='number'
                    placeholder='Phone Number'
                    value={phoneNumber}
                    name='phoneNumber'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-input-section'>
                  <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    name='username'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-input-section'>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    name='password'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='signup-submit'>
                  <button
                    type='submit'
                    disabled={auth.isLoading}
                  >
                    { auth.isLoading ? <FontAwesomeIcon icon={faSpinner} spin size='1x' /> : 'Submit' }
                  </button>
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

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = {
  signupAction: payload => signup(payload)
};

export const SignupComponent = connect(mapStateToProps, mapDispatchToProps)(Signup);

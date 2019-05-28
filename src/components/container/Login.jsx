import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { login } from '../../actions';
import jsonFormatter from '../../utils/jsonFormat.utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { loginAction } = this.props;
    const { email, password } = this.state;
    await loginAction({
      email,
      password
    });
  }

  render() {
    const { email, password } = this.state;
    const { auth } = this.props;
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
              <form onSubmit={this.handleLogin}>
                {
                  auth && auth.error && auth.error.error && (
                  <div
                    className='error-section'
                    dangerouslySetInnerHTML={{ __html: jsonFormatter(JSON.stringify(auth.error.error)) }}
                  />
                  )
                }
                <div className='signin-input-section'>
                  <input
                    type='email'
                    placeholder='Email'
                    onChange={this.handleChange}
                    value={email}
                    required
                    name='email'
                  />
                </div>
                <div className='signin-input-section'>
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                    value={password}
                    required
                    name='password'
                  />
                </div>
                <div className='signin-submit'>
                  <button
                    type='submit'
                    disabled={auth.isLoading}
                  >
                    { auth.isLoading ? <FontAwesomeIcon icon={faSpinner} spin size='1x' /> : 'Submit' }
                  </button>
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

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = {
  loginAction: payload => login(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

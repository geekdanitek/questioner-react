import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './Button';
import { get } from '../../utils/Storage';
import { logout } from '../../actions';

export const Header = ({ logoutAction }) => {
  const token = get('token');
  return (
    <Fragment>
      <div className='Header'>
        <nav className='questionaire-nav'>
          <div className='nav-container'>
            <div className='nav-left'>
              <Link to='/'><h2>QUESTIONER</h2></Link>
            </div>
            <div className='nav-right'>
              { token ? (
                <Link to='/'>
                  <Button
                    type='button'
                    className='nav-button'
                    onClick={async () => { await logoutAction(); }}
                  >
                  Logout
                  </Button>
                </Link>
              ) : (
                <Link to='/login'>
                  <Button
                    type='button'
                    className='nav-button'
                  >
                  Login
                  </Button>
                </Link>
              )
             }
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  logoutAction: () => logout()
};

export const HeaderComponent = connect(null, mapDispatchToProps)(Header);

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => (
  <Fragment>
    <div className='Header'>
      <nav className='questionaire-nav'>
        <div className='nav-container'>
          <div className='nav-left'>
            <a href='./index.html'><h2>QUESTIONER</h2></a>
          </div>
          <div className='nav-right'>
            <Link to='hee'>
              <Button
                type='button'
                className='nav-button'
              >
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </Fragment>
);

export default Header;

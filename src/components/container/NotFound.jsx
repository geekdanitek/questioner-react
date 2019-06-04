import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent } from '../presentation/Header';
import Footer from '../presentation/Footer';
import NotFoundSVG from '../../assets/images/undraw_page_not_found_su7k.svg';

const NotFound = () => (
  <Fragment>
    <HeaderComponent />
    <div className='not-found'>
      <div className='container'>
        <div className='not-found-area'>
          <img src={NotFoundSVG} alt='not found icon' />
        </div>
        <div className='redirect'>
          <Link to='/'>
              Homepage
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </Fragment>
);
export default NotFound;

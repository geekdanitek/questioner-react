import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/images/delete_white_192x192.png';

const MeetupCard = () => (
  <Fragment>
    <div className='meetups-card'>
      <h2 className='meetups-card-title'>
            NIGERIA MODERN EXCEL & POWER BI USER GROUP
      </h2>
      <span className='meetups-card-questions'>
        <span>
                    13 questions asked,
          {' '}
          <b>12th, Dec 2018</b>
        </span>
      </span>
      <div className='meetups-card-button-area'>
        <Link to='/questions'>
          <button>
                    Questions
          </button>
        </Link>
        <a href='/'>
          <button id='deleteMeetupButton'>
            <img
              className='meetups-card-delete'
              src={deleteIcon}
              alt='delete_icon'
            />
          </button>
        </a>
      </div>
      <div className='meetups-card-footer'>
        <small>The Conoil group</small>
      </div>
    </div>
  </Fragment>
);

export default MeetupCard;

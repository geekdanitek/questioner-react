import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/images/delete_white_192x192.png';

const MeetupCard = ({
  topic,
  happeningon,
  createdon,
  location,
  id
}) => (
  <Fragment>
    <div className='meetups-card'>
      <h2 className='meetups-card-title'>
        { topic }
      </h2>
      <span className='meetups-card-questions'>
        <span>
            Happening on:
          {' '}
          <b>{ happeningon }</b>
        </span>
        <br />
        <span>
            Created at:
          {' '}
          <b>{ createdon }</b>
        </span>
      </span>
      <div>
        <div className='meetups-card-button-area'>
          <Link to={`/meetups/${id}/questions`}>
            <button>
            Questions
            </button>
          </Link>
        </div>
        <div className='meetup-card-footer-area'>
          <span>{location}</span>
        </div>
      </div>
    </div>
  </Fragment>
);

export default MeetupCard;

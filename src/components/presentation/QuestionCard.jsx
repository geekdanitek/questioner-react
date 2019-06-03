import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({
  createdon,
  createdby,
  meetupid,
  votes,
  title,
  body,
  id
}) => (
  <Fragment>
    <div className='questions-card'>
      <div className='section'>
        <div className='section-left' />
        <div className='section-right'>
          <h3 className='questions-card-title'>
            {title}
          </h3>
          <div className='questions-card-body-content'>
            <span className='questions-card-comments'>
              <b>{ createdon}</b>
            </span>
            <div className='questions-body'>
              <span>
                { body }
              </span>
            </div>
            <div className='questions-card-button-area'>
              <Link to={`/meetups/${meetupid}/question/${id}`}>
                <button>
                      View Question
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='questions-card-footer'>
        {/* <small>{createdby}</small> */}
      </div>
    </div>
  </Fragment>
);

export default QuestionCard;

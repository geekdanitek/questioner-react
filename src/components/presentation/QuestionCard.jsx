import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = () => (
  <Fragment>
    <div className='QuestionCard'>
      <div className='questions-card'>
        <div className='section'>
          <div className='section-left'>
            <div className='vote'>
              <button className='vote-up' />
              <span>2423</span>
              <button className='vote-down' />
            </div>
          </div>
          <div className='section-right'>
            <h3 className='questions-card-title'>
                        What is the purpose of this meetup like seriously i dont understand.
            </h3>
            <div className='questions-card-body-content'>
              <span className='questions-card-comments'>
                        13 comments,
                {' '}
                <b>14th, Dec 2018</b>
              </span>
              <div className='questions-card-button-area'>
                <Link to='/question/hello'>
                  <button>
                      View Question
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='questions-card-footer'>
          <small>The Conoil group</small>
        </div>
      </div>
    </div>
  </Fragment>
);

export default QuestionCard;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import vote from '../../assets/images/vote-1-512.png';

const TopQuestionCard = () => (
  <Fragment>
    <div className='TopQuestionCard'>
      <div className='top-question-feed-area'>
        <Link to='/questions'>
          <div className='top-question-feed-card pad-0'>
            <div className='top-question-feed-card-header'>
                NIGERIA MODERN EXCEL & POWER BI USER GROUP
            </div>
            <div className='top-question-feed-body'>
              <div className='right'>
                <h3 className='top-question-feed-card-title'>
                        What is the purpose of this meetup like seriously i dont understand.
                </h3>
                <div className='top-question-feed-body-content'>
                  <span className='top-question-feed-comments'>
                            613 comments.
                    {' '}
                    <b>Dec 31st, 2018</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </Fragment>
);

export default TopQuestionCard;

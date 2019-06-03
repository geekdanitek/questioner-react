import React, { Fragment } from 'react';

const Comment = ({
  comment, createdon, firstname, lastname
}) => (
  <Fragment>
    <div className='Comment'>
      <div className='comment-area'>
        <div className='who-commented'>
          <h4>
            {firstname}
            {' '}
            {lastname}
          </h4>
          <small>
            {createdon}
          </small>
        </div>
        <div className='comment-details'>
          {comment}
        </div>
      </div>
    </div>
  </Fragment>
);

export default Comment;

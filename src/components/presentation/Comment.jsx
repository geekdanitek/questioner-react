import React, { Fragment } from 'react';

const Comment = () => (
  <Fragment>
    <div className='Comment'>
      <div className='comment-area'>
        <div className='who-commented'>
          <h4>Daniel Adedeji</h4>
          <small>10:30am, 20th Dec 2018</small>
        </div>
        <div className='comment-details'>
            I thought the meetup was fake until i saw the reviews
        </div>
      </div>
    </div>
  </Fragment>
);

export default Comment;

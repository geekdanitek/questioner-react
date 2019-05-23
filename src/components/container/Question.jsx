import React, { Component, Fragment } from 'react';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';
import Comment from '../presentation/Comment';

class Question extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='Question'>
          <div className='question-area'>
            <div className='container'>
              <div className='meetup-title-area'>
                <div className='meetup-title'>
                    NIGERIA MODERN EXCEL & POWER BI USER GROUP
                </div>
              </div>
              <div className='question-card'>
                <div className='section'>
                  <div className='section-left'>
                    <div className='vote'>
                      <button className='vote-up' />
                      <span>2423</span>
                      <button className='vote-down' />
                    </div>
                  </div>
                  <div className='section-right'>
                    <h2 className='question-card-title'>
                        What is the purpose of this meetup like seriously i dont understand.
                    </h2>
                    <div className='question-card-body-content'>
                      <div className='question-card-description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                      <span className='question-card-comments'>
                        13 comments,
                        {' '}
                        <b>14th, Dec 2018</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='question-card-comment-area'>
                  <form>
                    <div className='question-card-input-section'>
                      <textarea
                        placeholder='Comment here'
                        required
                      />
                    </div>
                    <div className='question-card-button-area'>
                      <button>Submit</button>
                    </div>
                  </form>
                </div>
                <div className='question-card-footer'>
                  <small>The Conoil group</small>
                </div>
              </div>
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Question;

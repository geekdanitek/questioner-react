import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';
import TopQuestionCard from '../presentation/TopQuestionCard';

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='Profile'>
          <div className='user-profile-area'>
            <div className='container'>
              <div className='meetups-link'>
                <Link to='/meetup/create'>
                  <button>
                    Create A Meetup
                  </button>
                </Link>
                <Link to='/meetups'>
                  <button>
                  View All Meetups
                  </button>
                </Link>
              </div>
              <div className='user-profile-question-post'>
                <div className='user-profile-card'>
                  <h1>24</h1>
                  <span>Questions Asked</span>
                </div>
              </div>
              <div className='user-profile-question-comment'>
                <div className='user-profile-card'>
                  <h1>13</h1>
                  <span>Questions Commented</span>
                </div>
              </div>
              <h3 className='top-question-feed-text'>Top questions feed</h3>
              <TopQuestionCard />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default Profile;

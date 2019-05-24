import React, { Component, Fragment } from 'react';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';
import MeetupCard from '../presentation/MeetupCard';

class Meetups extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='Meetups'>
          <div className='meetups-area'>
            <div className='container'>
              <MeetupCard />
              <MeetupCard />
              <MeetupCard />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Meetups;

import React, { Component, Fragment } from 'react';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';

class CreateMeetup extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='CreateMeetup'>
          <div className='create-meetup-area'>
            <div className='container'>
              <div className='create-meetup-form-area'>
                <h3 className='create-meetup-form-text'>Create Meetup</h3>
                <form>
                  <div className='create-meetup-input-section'>
                    <input
                      type='text'
                      placeholder='Name'
                      required
                    />
                  </div>
                  <div className='create-meetup-input-section'>
                    <textarea required placeholder='Description' l />
                  </div>
                  <div className='create-meetup-form-submit'>
                    <button type='submit'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default CreateMeetup;

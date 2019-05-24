import React, { Component, Fragment } from 'react';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';

class AskQuestion extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='AskQuestion'>
          <div className='ask-question-area'>
            <div className='container'>
              <div className='meetup-title-area'>
                <div className='meetup-title'>
                    NIGERIA MODERN EXCEL & POWER BI USER GROUP
                </div>
              </div>
              <div className='ask-question-form-area'>
                <h3 className='ask-question-form-text'>Ask A Question</h3>
                <form>
                  <div className='ask-question-input-section'>
                    <input
                      type='text'
                      placeholder='Title'
                      required
                    />
                  </div>
                  <div className='ask-question-input-section'>
                    <textarea required placeholder='Body' l />
                  </div>
                  <div className='ask-question-form-submit'>
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

export default AskQuestion;

import React, { Component, Fragment } from 'react';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';
import QuestionCard from '../presentation/QuestionCard';

class Questions extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='Questions'>
          <div className='questions-area'>
            <div className='container'>
              <div className='meetup-title-area'>
                <div className='meetup-title'>
                    NIGERIA MODERN EXCEL & POWER BI USER GROUP
                </div>
              </div>
              <div className='ask-question-button-area'>
                <a href='./askquestion.html'>
                  <button>
                    Ask A Question
                  </button>
                </a>
              </div>
              <QuestionCard />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Questions;

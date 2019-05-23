import React, { Component, Fragment } from 'react';
import Logo from '../../assets/images/question-mark-2-xxl.png';
import Button from '../presentation/Button';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='LandingPage'>
          <div className='landing-area'>
            <div className='landing-background'>
              <div className='container mar-t-0'>
                <div className='landing-content-area'>
                  <img
                    className='landing-content-logo'
                    src={Logo}
                    alt='background'
                  />
                  <h1 className='landing-content-title'>Questioner</h1>
                  <h3 className='landing-content-description'>
                        Questioner helps the meetup organizer prioritize questions to be answered
                  </h3>
                  <a href='./signup.html'>
                    <Button
                      type='button'
                      id='signup'
                    >
                      Sign Up
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className='landing-how-it-works'>
              <div className='container'>
                <h3>How it works</h3>
                <div className='landing-how-it-works-icons'>
                  <img
                    src='https://geekdanitek.github.io/andela_fellowship_cycle_40/UI/assets/images/1141913.svg'
                    alt='landing icon'
                  />
                  <p>View list of meetups</p>
                </div>
                <div className='landing-how-it-works-icons'>
                  <img
                    src='https://geekdanitek.github.io/andela_fellowship_cycle_40/UI/assets/images/ask.png'
                    alt='landing icon'
                  />
                  <p>Ask questions on meetups</p>
                </div>
                <div className='landing-how-it-works-icons'>
                  <img
                    src='https://geekdanitek.github.io/andela_fellowship_cycle_40/UI/assets/images/vote.png'
                    alt='landing icon'
                  />
                  <p>
                      See votes as they bubble to the top or bottom of the log
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default LandingPage;

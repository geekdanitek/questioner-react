import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HeaderComponent } from '../presentation/Header';
import Footer from '../presentation/Footer';
import MeetupCard from '../presentation/MeetupCard';
import { getMeetups } from '../../actions';
import FullPageLoader from '../presentation/FullPageLoader';

export class Meetups extends Component {
  async componentDidMount() {
    const { getMeetupsAction } = this.props;
    await getMeetupsAction();
  }

  render() {
    const { meetup } = this.props;
    return (
      <Fragment>
        <HeaderComponent />
        { meetup && meetup.isLoading && <FullPageLoader /> }
        <div className='Meetups'>
          <div className='meetups-area'>
            <div className='container'>
              {
                meetup && meetup.meetups && meetup.meetups.map(singleMeetup => (
                  <MeetupCard
                    key={singleMeetup.id}
                    topic={singleMeetup.topic}
                    createdon={singleMeetup.createdon}
                    location={singleMeetup.location}
                    happeningon={singleMeetup.happeningon}
                    id={singleMeetup.id}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ meetup }) => ({ meetup });

const mapDispatchToProps = {
  getMeetupsAction: () => getMeetups()
};
export const MeetupsComponent = connect(mapStateToProps, mapDispatchToProps)(Meetups);

import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HeaderComponent } from '../presentation/Header';
import Footer from '../presentation/Footer';
import QuestionCard from '../presentation/QuestionCard';
import { getMeetup } from '../../actions';
import FullPageLoader from '../presentation/FullPageLoader';

export class Questions extends Component {
  async componentDidMount() {
    const { getMeetupAction, match } = this.props;
    await getMeetupAction(match.params.meetupId);
  }

  render() {
    const { meetup } = this.props;
    return (
      <Fragment>
        <HeaderComponent />
        { meetup && meetup.isLoading && <FullPageLoader /> }
        <div className='Questions'>
          <div className='questions-area'>
            {
              meetup && meetup.meetup[0] && (
                <div className='container'>
                  <div className='meetup-title-area'>
                    <div className='meetup-title'>
                      { meetup.meetup[0].meetup.topic }
                    </div>
                  </div>
                  <div className='ask-question-button-area'>
                    <Link
                      to={`/meetups/${meetup.meetup[0].meetup.id}/askquestion`}
                    >
                      <button>
                      Ask A Question
                      </button>
                    </Link>
                  </div>
                  { meetup.meetup[0].questions.length > 0
                    ? meetup.meetup[0].questions.map(question => (
                      <QuestionCard
                        key={question.id}
                        createdon={question.createdon}
                        createdby={question.createdby}
                        votes={question.votes}
                        title={question.title}
                        body={question.body}
                        meetupid={question.meetupid}
                        id={question.id}
                      />
                    ))
                    : (<div className='no-questions'>No questions in this meetup</div>)
                }

                </div>
              )
            }
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = ({ meetup }) => ({ meetup });

const mapDispatchToProps = {
  getMeetupAction: id => getMeetup(id)
};
export const QuestionsComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(Questions));

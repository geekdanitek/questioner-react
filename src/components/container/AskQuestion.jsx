import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../presentation/Header';
import Footer from '../presentation/Footer';
import { askQuestion } from '../../actions';

export class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { askQuestionAction, match, history } = this.props;
    const { title, body } = this.state;
    const response = await askQuestionAction({
      title,
      body,
      meetupId: match.params.meetupId
    });
    if (response.type === 'ASK_QUESTION_SUCCESS') {
      history.push(`/meetups/${match.params.meetupId}/questions`);
    }
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    const {
      title,
      body,
    } = this.state;
    const { question } = this.props;
    return (
      <Fragment>
        <HeaderComponent />
        <div className='AskQuestion'>
          <div className='ask-question-area'>
            <div className='container'>
              <div className='ask-question-form-area'>
                <h3 className='ask-question-form-text'>Ask a question in this meetup</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className='ask-question-input-section'>
                    <input
                      type='text'
                      placeholder='Title'
                      id='title'
                      required
                      value={title}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className='ask-question-input-section'>
                    <textarea
                      placeholder='Body'
                      value={body}
                      id='body'
                      required
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className='ask-question-form-submit'>
                    <button
                      type='submit'
                      disabled={question.isLoading}
                    >
                      { question.isLoading ? <FontAwesomeIcon icon={faSpinner} spin size='1x' /> : 'Submit' }
                    </button>
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

const mapStateToProps = ({ question }) => ({ question });

const mapDispatchToProps = {
  askQuestionAction: payload => askQuestion(payload)
};

export const AskQuestionComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(AskQuestion));

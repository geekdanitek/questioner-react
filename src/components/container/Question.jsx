import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Header from '../presentation/Header';
import Footer from '../presentation/Footer';
import Comment from '../presentation/Comment';
import { getQuestion, getComments, createComment } from '../../actions';
import FullPageLoader from '../presentation/FullPageLoader';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false,
      comment: ''
    };
  }

  async componentDidMount() {
    const { getQuestionAction, match } = this.props;
    await getQuestionAction(match.params.questionId);
  }

  handleShowComment = () => {
    const { getCommentsAction, match } = this.props;
    this.setState(prevState => ({
      showComment: !prevState.showComment
    }), async () => {
      const { showComment } = this.state;
      if (showComment) {
        await getCommentsAction(match.params.questionId);
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitComment = async (e) => {
    const { createCommentAction, match, getCommentsAction } = this.props;
    const { comment } = this.state;
    e.preventDefault();
    const payload = {
      questionId: Number(match.params.questionId),
      comment
    };
    const response = await createCommentAction(payload);
    if (response.type === 'CREATE_COMMENT_SUCCESS') {
      this.setState({ showComment: true });
      await getCommentsAction(match.params.questionId);
    }
  }

  render() {
    const { question, comment } = this.props;
    const { showComment, comment: commentText } = this.state;
    return (
      <Fragment>
        <Header />
        { question && question.isLoading && (<FullPageLoader />) }
        <div className='Question'>
          <div className='question-area'>
            { question && question.question.id
              && (
              <div className='container'>
                <div className='meetup-title-area' />
                <div className='question-card'>
                  <div className='section'>
                    <div className='section-left' />
                    <div className='section-right'>
                      <h2 className='question-card-title'>
                        {question.question.title}
                      </h2>
                      <div className='question-card-body-content'>
                        <div className='question-card-description'>
                          <p>
                            {question.question.body}
                          </p>
                        </div>
                        <span className='question-card-comments'>

                          <b>{question.question.createdon}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='question-card-comment-area'>
                    <form onSubmit={this.handleSubmitComment}>
                      <div className='question-card-input-section'>
                        <textarea
                          placeholder='Comment here'
                          required
                          onChange={this.handleChange}
                          value={commentText}
                          id='comment'
                        />
                      </div>
                      <div className='question-card-button-area'>
                        <button
                          type='submit'
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='load-comment-area'>
                  <button
                    type='button'
                    onClick={this.handleShowComment}
                  >
                    Load Comments
                  </button>
                </div>
                {
                  showComment && (
                    <Fragment>
                      { comment && comment.isLoading
                        ? (
                          <div className='comment-spinner'>
                            <FontAwesomeIcon size='2x' icon={faSpinner} spin />
                          </div>
                        )
                        : (
                          comment.comments.map(singleComment => (
                            <Comment
                              key={singleComment.id}
                              comment={singleComment.comment}
                              createdon={singleComment.createdon}
                              firstname={singleComment.user.firstname}
                              lastname={singleComment.user.lastname}
                            />
                          ))
                        )
                      }
                    </Fragment>
                  )
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

const mapStateToProps = ({ question, comment }) => ({ question, comment });

const mapDispatchToProps = {
  getQuestionAction: id => getQuestion(id),
  getCommentsAction: id => getComments(id),
  createCommentAction: payload => createComment(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Question));

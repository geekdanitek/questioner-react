import React from 'react';
import { shallow } from 'enzyme';
import { Question } from '../../../components/container/Question';

describe('Question Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      match: {
        params: {
          id: '1'
        }
      },
      getQuestionAction: jest.fn(),
      question: {
        question: {
          title: 'hello me',
          createdon: '23 May, 2019',
          body: 'Heleeef fefefe f',
          happeningon: '23 May, 2019',
          id: 'Hedede'
        },
        isLoading: false
      },
      comment: {
        comments: [{
          createdon: '23 May, 2019',
          firstname: 'Daniel',
          lastname: 'Geek',
          comment: 'lold dsdssd'
        }],
        isLoading: false

      },
    };
    wrapper = shallow(<Question {...props} />);
  });
  test('Question component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

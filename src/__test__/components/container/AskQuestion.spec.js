import React from 'react';
import { shallow } from 'enzyme';
import { AskQuestion } from '../../../components/container/AskQuestion';

describe('Ask Question Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      match: {
        params: {
          meetupId: 1
        }
      },
      askQuestionAction: jest.fn(),
      history: {
        push: jest.fn()
      },
      question: {
        isLoading: false
      }
    };
    wrapper = shallow(<AskQuestion {...props} />);
  });
  test('Ask question component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

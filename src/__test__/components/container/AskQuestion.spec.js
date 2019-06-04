import React from 'react';
import { shallow } from 'enzyme';
import AskQuestion from '../../../components/container/AskQuestion';

describe('Ask Question Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AskQuestion />);
  });
  test('Ask question component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

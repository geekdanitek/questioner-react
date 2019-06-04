import React from 'react';
import { shallow } from 'enzyme';
import QuestionCard from '../../../components/presentation/QuestionCard';

describe('QuestionCard Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      createdon: 'Thurday 12 May',
      createdby: 1,
      meetupid: 1,
      votes: 0,
      title: 'Hello',
      body: 'Lol and ten',
      id: 1
    };
    wrapper = shallow(<QuestionCard {...props} />);
  });
  test('QuestionCard component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

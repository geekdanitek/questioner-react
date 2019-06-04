import React from 'react';
import { shallow } from 'enzyme';
import CreateMeetup from '../../../components/container/CreateMeetup';

describe('Create meetup Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateMeetup />);
  });
  test('Create meetup component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

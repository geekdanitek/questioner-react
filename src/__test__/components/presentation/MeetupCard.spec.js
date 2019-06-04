import React from 'react';
import { shallow } from 'enzyme';
import MeetupCard from '../../../components/presentation/MeetupCard';

describe('MeetupCard Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      topic: 'Tech stuff',
      happeningon: '23 May, 2019',
      createdon: '22 May, 2019',
      location: 'Ikeja',
      id: '1'
    };
    wrapper = shallow(<MeetupCard {...props} />);
  });
  test('MeetupCard component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

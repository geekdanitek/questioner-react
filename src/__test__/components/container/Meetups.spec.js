import React from 'react';
import { shallow } from 'enzyme';
import { Meetups } from '../../../components/container/Meetups';

describe('Meetups Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      getMeetupsAction: jest.fn(),
      meetups: {
        meetups: [{
          topic: 'hello me',
          createdon: '23 May, 2019',
          location: 'Lagos',
          happeningon: '23 May, 2019',
          id: 'Hedede'
        }],
        isLoading: false
      }
    };
    wrapper = shallow(<Meetups {...props} />);
  });
  test('Meetups component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

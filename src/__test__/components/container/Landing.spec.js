import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../../components/container/Landing';

describe('Landing Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });
  test('Landing component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

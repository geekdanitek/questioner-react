import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../../components/container/NotFound';

describe('NotFound Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });
  test('NotFound component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

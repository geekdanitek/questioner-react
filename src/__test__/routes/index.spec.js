import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/index';

describe('Routes test', () => {
  test('Route should render', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});

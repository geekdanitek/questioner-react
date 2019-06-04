import React from 'react';
import { shallow } from 'enzyme';
import AuthWrapper from '../../../components/presentation/AuthWrapper';

describe('Auth Wrapper Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AuthWrapper />);
  });
  test('Auth Wrapper component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

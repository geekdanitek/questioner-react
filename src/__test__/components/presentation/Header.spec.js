import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/presentation/Header';

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test('Header component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

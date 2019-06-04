import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/presentation/Footer';

describe('Footer Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  test('Footer component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

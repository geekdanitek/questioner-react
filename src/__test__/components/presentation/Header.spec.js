import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../components/presentation/Header';

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      logoutAction: jest.fn()
    };
    wrapper = shallow(<Header {...props} />);
  });
  test('Header component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

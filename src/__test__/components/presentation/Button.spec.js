import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/presentation/Button';

describe('Button Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      type: 'button',
      role: 'button',
      onClick: jest.fn(),
      disabled: false
    };
    wrapper = shallow(<Button {...props} />);
  });
  test('Button component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

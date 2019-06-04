import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../../components/container/Login';

describe('Login Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      auth: {
        isLoading: false
      }
    };
    wrapper = shallow(<Login {...props} />);
  });
  test('Login component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../../components/container/Signup';

describe('Signup Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      match: {
        params: {
          id: '1'
        }
      },
      signupAction: jest.fn(),
      auth: {
        error: {
          error: [{ error: 'fails' }]
        },
        isLoading: false
      }
    };
    wrapper = shallow(<Signup {...props} />);
  });
  test('Signup component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

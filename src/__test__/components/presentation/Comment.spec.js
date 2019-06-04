import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../../../components/presentation/Comment';

describe('Comment Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      comment: 'herllo',
      createdon: 'thusday',
      firstname: 'Daniel',
      lastname: 'Geek'
    };
    wrapper = shallow(<Comment {...props} />);
  });
  test('Comment component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import FullPageLoader from '../../../components/presentation/FullPageLoader';

describe('Full Page Loader Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FullPageLoader />);
  });
  test('Full Page Loader component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

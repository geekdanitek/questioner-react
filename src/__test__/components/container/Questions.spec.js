import React from 'react';
import { shallow } from 'enzyme';
import { Questions } from '../../../components/container/Questions';

describe('Questions Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      match: {
        params: {
          id: '1'
        }
      },
      getMeetupAction: jest.fn(),
      meetup: {
        meetup: [{
          meetup: {
            id: 222,
            topic: 'heeeeew',
            location: 'lagos',
            happeningon: 'Thursday',
            createdon: 'Mon 3rd Jun 2019'
          },
          questions: [{
            createdon: 'Mon 3rd Jun 2019',
            createdby: '1',
            votes: '0',
            title: 'dededfe',
            body: 'hef feedde',
            meetupid: 1,
            id: 22
          }]
        }],
        isLoading: false
      },
      comment: {
        comments: [{
          createdon: '23 May, 2019',
          firstname: 'Daniel',
          lastname: 'Geek',
          comment: 'lold dsdssd'
        }],
        isLoading: false

      },
    };
    wrapper = shallow(<Questions {...props} />);
  });
  test('Questions component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import jsonFormatter from '../../utils/jsonFormat.utils';

test('Should return a formated string', () => {
  expect(jsonFormatter('[{ hello: 2 }]')).toBe(' hello:  2 ');
});

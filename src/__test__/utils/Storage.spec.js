import { get, remove } from '../../utils/Storage';

const localStorageMock = {
  get: jest.fn(),
  remove: jest.fn()
};
window.localStorage = localStorageMock;

test('test localstorage get', () => {
  expect(get('heelo')).toBe(null);
});
test('test localstorage remove', () => {
  expect(remove('hello')).toBe(undefined);
});

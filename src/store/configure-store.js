import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import Reducer from '../reducers';

const Store = () => {
  const middlewares = applyMiddleware(thunk);
  const storeEnhancers = [middlewares];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(
    Reducer,
    composedEnhancer
  );
  return store;
};

export default Store;

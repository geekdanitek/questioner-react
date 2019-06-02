import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import Reducer from '../reducers';
import { encryptData, decryptData } from './encrypt-store';

const saveToLocalStorage = (state) => {
  localStorage.setItem('state', encryptData(state));
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return decryptData(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const Store = () => {
  const middlewares = applyMiddleware(thunk);
  const storeEnhancers = [middlewares];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(
    Reducer,
    persistedState,
    composedEnhancer
  );

  store.subscribe(() => {
    saveToLocalStorage({
      auth: store.getState().auth
    });
  });

  return store;
};

export default Store;

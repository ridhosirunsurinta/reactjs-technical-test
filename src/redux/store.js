import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const initialState = {};

const middlewares = [
  logger,
  thunk
];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    ...middlewares
  )
);

export default store;
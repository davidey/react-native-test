import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS } from './actions';

const defaultState = {
  movies: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return {
        movies: [],
        loading: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        movies: action.movies,
        loading: false
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  applyMiddleware(createLogger())
);

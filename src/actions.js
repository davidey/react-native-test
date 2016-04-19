import { store } from './store';
import { REQUEST_URL } from './helpers';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

export function fetchMovies(card) {
  console.log('dispatching');
  fetch(REQUEST_URL).then((response) => response.json())
    .then((responseData) => {
      const movies = responseData.movies;
      store.dispatch({
        type: FETCH_MOVIES_SUCCESS,
        movies: movies
      });
    })
    .done();

  return {
    type: FETCH_MOVIES
  };
}

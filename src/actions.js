import { store } from './store';
import { REQUEST_URL } from './helpers';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

export const CAMERA_SWITCH = 'CAMERA_SWITCH';

export const SAVE_BEACONS = 'SAVE_BEACONS';

export function fetchMovies(card) {
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

export function switchCamera() {
  return {
    type: CAMERA_SWITCH
  };
}

export function saveBeacons(beacons) {
  return {
    type: SAVE_BEACONS,
    beacons: beacons
  };
}

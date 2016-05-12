import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Camera from 'react-native-camera';

import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, CAMERA_SWITCH, SAVE_BEACONS } from './actions';

const defaultState = {
  movies: [],
  loading: false,
  camera: {
    type: Camera.constants.Type.back
  },
  beacons: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return Object.assign({}, state, {
        movies: [],
        loading: true
      });
    case FETCH_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        movies: action.movies,
        loading: false
      });
    case CAMERA_SWITCH:
      const nextType = (state.camera.type === Camera.constants.Type.back) ?
                          Camera.constants.Type.front : Camera.constants.Type.back;

      return Object.assign({}, state, {
        camera: {
          type: nextType
        }
      });
    case SAVE_BEACONS:
      return Object.assign({}, state, {
        beacons: action.beacons
      });
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  applyMiddleware(createLogger())
);

import React from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app';

const reducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const store = createStore(
  reducer
);

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
 }

export default Root;

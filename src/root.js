import React from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store'
import App from './app';

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

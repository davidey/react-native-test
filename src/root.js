import React, {
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store'
import App from './app';
import CameraTest from './components/CameraTest';
import NavigationBar from './components/NavigationBar';

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{
            title: 'movie list',
            id: 'movieList'
          }}
          navigationBar={
            <NavigationBar />
          }
          renderScene={(route, navigator) =>
            <App />
          } />
      </Provider>
    )
  }
 }

export default Root;

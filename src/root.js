import React, {
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store'
import App from './app';
import Index from './components/Index';
import CameraTest from './components/CameraTest';
import BeaconsTest from './components/BeaconsTest';
import NavigationBar from './components/NavigationBar';

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{
            id: 'index'
          }}
          navigationBar={
            <NavigationBar />
          }
          renderScene={(route, navigator) => {
            console.log(route);
            switch (route.id) {
              case 'movieList':
                return <App navigator={navigator} />
              case 'camera':
                return <CameraTest navigator={navigator} />
                break;
              default:
                return <Index navigator={navigator} />
            }
          }} />
      </Provider>
    )
  }
 }

export default Root;

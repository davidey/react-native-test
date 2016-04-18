import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MOCKED_MOVIES_DATA } from './helpers';

class App extends Component {
  render() {
    const movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail} />

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});

export default App;

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';

const Index = React.createClass({
  navToCamera() {
      this.props.navigator.push({id: 'camera'});
  },

  render() {
    const props = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navToCamera}>
          <Text style={styles.link}>Camera</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={console.log()}>
          <Text style={styles.link}>List</Text>
        </TouchableHighlight>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  link: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCameraSwitch: () => {
      dispatch(switchCamera());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

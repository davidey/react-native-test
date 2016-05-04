import React, {
  Component,
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';
import Camera from 'react-native-camera';

import { store } from '../store';
import { switchCamera} from '../actions';

const CameraTest = React.createClass({
  render() {
    const props = this.props;
    return (
      <View style={styles.container}>
        <Camera style={styles.preview}
          ref="cam"
          type={props.cameraType}
          aspect={Camera.constants.Aspect.fill}
        >
          <TouchableHighlight onPress={this.switchCamera}>
            <Text style={styles.capture}>Switch Camera</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.capture}>
            <Text style={styles.capture}>Capture</Text>
          </TouchableHighlight>
        </Camera>
      </View>
    )
  },

  switchCamera() {
    this.props.onCameraSwitch();
  },

  capture() {
    this.refs.cam.capture(function(err, data) {
      console.log(err, data);
    });
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
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
    cameraType: state.camera.type,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCameraSwitch: () => {
      dispatch(switchCamera());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraTest);

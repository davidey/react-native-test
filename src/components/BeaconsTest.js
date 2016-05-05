import React, {
  DeviceEventEmitter,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import Beacons from  'react-native-ibeacon';

import { store } from '../store';
import { switchCamera} from '../actions';

const region = {
  identifier: 'Meraki',
  uuid: '27f4f3ea-caf5-4822-9263-957dda57d183'
};

console.log(Beacons);

Beacons.requestWhenInUseAuthorization();

Beacons.startMonitoringForRegion(region);
Beacons.startRangingBeaconsInRegion(region);

Beacons.startUpdatingLocation();

var subscription = DeviceEventEmitter.addListener(
  'beaconsDidRange',
  (data) => {
    console.log(data);
  }
);

const BeaconsTest = React.createClass({
  render() {
    const props = this.props;
    return (
      <View>
        <Text>Beacons Test</Text>
      </View>
    )
  },

});

export default BeaconsTest;

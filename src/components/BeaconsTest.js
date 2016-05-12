import React, {
  DeviceEventEmitter,
  ListView,
  Platform,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import Beacons from  'react-native-ibeacon';

import { store } from '../store';
import { saveBeacons } from '../actions';

const region = {
  identifier: 'Meraki',
  uuid: '61687109-905F-4436-91F8-E602F514C96D'
};

if (Platform.OS === 'ios') {
  Beacons.requestWhenInUseAuthorization();

  Beacons.startMonitoringForRegion(region);
  Beacons.startRangingBeaconsInRegion(region);

  Beacons.startUpdatingLocation();

  var subscription = DeviceEventEmitter.addListener(
    'beaconsDidRange',
    (data) => {
      store.dispatch(saveBeacons(data.beacons));
    }
  );
} else {
  const beacon = new RNABeacon();

  beacon.startMonitoring(region.uuid).then(() => {
    console.log('Start Monitoring');
  }).catch((err) => {
    console.error(err);
  });

  beacon.startRanging(region.uuid).then(() => {
    console.log('Start Ranging');
  }).catch((err) => {
    console.error(err);
  });

  beacon.on(beacon.events.DID_FOUND_BEACONS, (data) => {
    console.log('Beacon found', data);
  });

  beacon.on(beacon.events.DID_NOT_FOUND_BEACONS, (data) => {
    console.log('Beacon not found', data);
  });
}

const BeaconsTest = React.createClass({
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (a, b) => a !== b
      })
    }
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.beacons)
    })
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBeacon}
      />
    );
  },
  renderBeacon(beacon) {
    return (
      <View>
        <Text>{beacon.uuid}</Text>
        <Text>{beacon.major}</Text>
        <Text>{beacon.minor}</Text>
        <Text>{beacon.proximity}</Text>
        <Text>{beacon.accuracy}</Text>
      </View>
    );
  }
});

function mapStateToProps(state) {
  console.log('getting properties');
  return {
    beacons: state.beacons
  }
}

export default connect(mapStateToProps)(BeaconsTest);

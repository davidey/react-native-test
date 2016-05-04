import React, {
  Navigator,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <Text>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}>
        <Text>
          Next
        </Text>
      </TouchableOpacity>
    );
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text>
        {route.title} [{index}]
      </Text>
    );
  }
};

class NavigationBar extends React.Component {
  render () {
    return (
      <Navigator.NavigationBar
        {...this.props}
        routeMapper={NavigationBarRouteMapper}
      />
    )
  }
 }

 export default NavigationBar;

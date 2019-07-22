import React, { Component } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Groups from './src/screens/Groups';
import Account from './src/screens/Account';
import Detail from './src/screens/Detail';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerItems
} from 'react-navigation';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Home',
          headerLeft: (
            <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
    Detail: {
      screen: Detail
    }
  },
  {
    defaultNavigationOptions: {
    gesturesEnabled: false
    }
  }
);

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: ({ navigation}) => {
        return {
          header: null,
        }
      }
      /*
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Search',
          headerLeft: (
            <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }*/
    },
  },
  {
    defaultNavigationOptions: {
    gesturesEnabled: false
    }
  }
);

const GroupStack = createStackNavigator(
  {
    Groups: {
      screen: Groups,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Groups',
          headerLeft: (
            <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
  },
  {
    defaultNavigationOptions: {
    gesturesEnabled: false
    }
  }
);

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Account Settings',
          headerLeft: (
            <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
  },
  {
    defaultNavigationOptions: {
    gesturesEnabled: false
    }
  }
);

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name={"ios-home"} size={25} color={tintColor} />;
        },
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name={"ios-search"} size={25} color={tintColor} />;
        },
      },
    },
    Group: {
      screen: GroupStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name={"ios-chatboxes"} size={25} color={tintColor} />;
        },
      },
    },
    Account: {
      screen: AccountStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name={"ios-person"} size={25} color={tintColor} />;
        },
      },
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      }
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
      screen: DashboardStackNavigator
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: MainScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});


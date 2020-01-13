import React, { Component } from 'react';
import { StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Groups from './src/screens/Groups';
import Account from './src/screens/Account';
import Detail from './src/screens/Detail';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import EditAccount from './src/screens/EditAccount';
import Initializing from './src/screens/Initializing';
import PropTypes from 'prop-types'

import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { AppLoading } from 'expo';
import { View } from 'react-native-animatable';


class App extends Component {
  _isMounted = false;
  state = {
    fontsLoaded: false,
  };

  /*
  async componentDidMount() {
    this._isMounted = true;
    
    await Font.loadAsync({
      'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    }).then(result => {
      if (this._isMounted) {
        this.setState({ fontsLoaded: true });
        console.log("done");

      }
    });
  }*/

  async LoadFonts() {
    this._isMounted = true;
    const fonts = await Font.loadAsync({
      'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    })
    console.log("done");
  }

  
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <AppLoading
          startAsync={this.LoadFonts}
          onFinish={() => this.setState({ fontsLoaded: true })}
          onError={console.warn}
        />
      ); }
    return(
      <View style={{ flex: 1 }}>
        <AppContainer></AppContainer>
      </View>
    );
  }
}

export default App;

const SignedOut = createStackNavigator(
{
  Initializing: {
    screen: Initializing,
    navigationOptions: {
      header: null,
      headerLeft: null,
    }
  },
  Login: {
    screen: LogIn,
    navigationOptions: {
      title: "Log In",
      headerLeft: null,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      gesturesEnabled: true,
    }
  },
  
},
  {
    initialRouteName: 'Initializing',
    defaultNavigationOptions: {
      //headerLeft: null,
      gesturesEnabled: false,
      
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#dff3fd',
      headerTitleStyle: {
        fontFamily: 'raleway-regular'
      },
    },
  },
);


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Home',
        };
      }
    },
    Detail: {
      screen: Detail
    },
  },
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
    },
    Detail: {
      screen: Detail
    }
  },
);

const GroupStack = createStackNavigator(
  {
    Groups: {
      screen: Groups,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Groups',
        };
      }
    },
  },
);

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Account Settings',
        };
      }
    },
    EditAccount: {
      screen: EditAccount,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Edit Account",
        };
      },
    },
  },
  {
    initialRouteName: 'Account',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#dff3fd',
      headerTitleStyle: {
        fontFamily: 'raleway-regular'
      }
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
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: SignedOut },
  Dashboard: { screen: DashboardStackNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});


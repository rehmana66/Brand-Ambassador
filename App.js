import React, { Component } from 'react';
import { StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Applications from './src/screens/Applications';
import Account from './src/screens/Account/Account';
import Reviews from './src/screens/Account/Reviews';
import Settings from './src/screens/Account/Settings';
import Feedback from './src/screens/Account/Feedback';
import About from './src/screens/Account/About';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import EditAccount from './src/screens/EditAccount';
import Initializing from './src/screens/Initializing';
import PropTypes from 'prop-types'
import Details from './src/screens/Detail';
import CreateJob from './src/screens/CreateJob';

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
    }).catch(err=> console.log(err))
    console.log("done");
  }

  /*
  componentWillUnmount() {
    this._isMounted = false;
  }*/

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
        backgroundColor: global.iOSBlue,
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
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Job Details',
        };
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#147efb',
      },
      headerTintColor: '#dff3fd',
      headerTitleStyle: {
        fontFamily: 'raleway-regular'
      }
    }
  }
);

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Search'
      }
    },
    Detail: {
      screen: Details
    },
    CreateJob: {
      screen: CreateJob,
      navigationOptions: {
        title: 'New Job'
      }
    }
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#147efb',
      },
      headerTintColor: '#dff3fd',
      headerTitleStyle: {
        fontFamily: 'raleway-regular'
      },
    }
  }
);

const ApplicationStack = createStackNavigator(
  {
    Applications: {
      screen: Applications,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Applications',
        };
      }
    },
  }, {
    initialRouteName: 'Applications',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#147efb',
      },
      headerTintColor: '#dff3fd',
      headerTitleStyle: {
        fontFamily: 'raleway-regular'
      }
    }
  }
);

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Account Settings'
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
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => {
        return {
          title: "About Brand Ambassadors",
        };
      },
    },
    Reviews: {
      screen: Reviews,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Job Reviews"
        };
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Account Settings",
        };
      },
    },
    Feedback: {
      screen: Feedback,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Provide Feedback",
        };
      },
    },
  },
  {
    initialRouteName: 'Account',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#147efb',
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
    "My Jobs": {
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
    Applications: {
      screen: ApplicationStack,
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


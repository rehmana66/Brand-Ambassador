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

import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { AppLoading } from 'expo';


class App extends Component {

  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />
    }
    
    return <AppContainer />;
  }
}
export default App;

const SignedOut = createStackNavigator(
{
  Initializing: {
    screen: Initializing,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LogIn,
    navigationOptions: {
      title: "Log In",
      
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
      headerLeft: null,
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
          headerRight: (
            <Button
              onPress = { () => Alert.alert(
                'Submit Changes?',
                'Are you sure you want to submit your changes?',
                [
                  {
                    text: 'Submit',
                    onPress: () => navigation.goBack()
                  },
                  {
                    text: 'Cancel',
                  },
                ],
                {cancelable: false},
              )}
              title = "Done"
              color = "#dff3fd"
            />
          ),
          headerLeft: (
            <Button
              onPress = { () => Alert.alert(
                'Discard Changes?',
                'Are you sure you want to discard your changes?',
                [
                  {
                    text: 'Discard',
                    onPress: () => navigation.goBack()
                  },
                  {
                    text: 'Stay',
                  },
                ],
                {cancelable: false},
              )}
              title = "Cancel"
              color = "#dff3fd"
            />
          ),
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


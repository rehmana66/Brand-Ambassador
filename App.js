import React, { Component } from 'react';
import { Linking, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Auth from '@aws-amplify/auth';
import Analytics from '@aws-amplify/analytics';
import awsconfig from './aws-exports';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Groups from './src/screens/Groups';
import Account from './src/screens/Account';

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);
// send analytics events to Amazon Pinpoint
Analytics.configure(awsconfig);


const AppNavigator = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: Home
  },
  Search: {
    screen: Search
  },
  Groups: {
    screen: Groups
  },
  Account: {
    screen: Account
  },
});

export default AppContainer = createAppContainer(AppNavigator);


//export default AppContainer;

/*
export default class App extends Component {
    constructor(props) {
      super(props);
      this.handleAnalyticsClick = this.handleAnalyticsClick.bind(this);
      this.state = {
        resultHtml: <Text></Text>,
        eventsSent: 0
      };
    }

    handleAnalyticsClick() {
      const { aws_project_region, aws_mobile_analytics_app_id } = awsconfig;

      Analytics.record('AWS Amplify Tutorial Event')
        .then( (evt) => {
            const url = `https://${aws_project_region}.console.aws.amazon.com/pinpoint/home/?region=${aws_project_region}#/apps/${aws_mobile_analytics_app_id}/analytics/events`;
            const result = (
              <View>
                <Text>Event Submitted.</Text>
                <Text>Events sent: {this.state.eventsSent + 1}</Text>
                <Text style={styles.link} onPress={() => Linking.openURL(url)}>
                  View Events on the Amazon Pinpoint Console
                </Text>
              </View>
            );
            this.setState({
                resultHtml: result,
                eventsSent: this.state.eventsSent + 1
            });
        });
    };
    render() {
      const {navigate} = this.props;
      return (
        <View style={styles.container}>
          <Text>Welcome to your React Native App with Amplify!</Text>
          <Button title="Generate Analytics Event" onPress={this.handleAnalyticsClick} />
          {this.state.resultHtml}
          <Button title="Home" onPress = {() => navigation.navigate('Home')} />
              
        </View>
      );
    }
}

*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue'
  }
});
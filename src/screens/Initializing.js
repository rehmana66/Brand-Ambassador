import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Auth } from 'aws-amplify'



export default class Initializing extends Component {
    async componentDidMount() {
      this.ShowAlertWithDelay
        try {
            const user = await Auth.currentAuthenticatedUser()
            console.log('user: ', user)
        if (user) {
            this.props.navigation.navigate('Home');
        } else {
            this.props.navigation.navigate('Login');
        }} catch (err) {
            console.log('error: ', err)
            this.props.navigation.navigate('Login');
        }
    }

    ShowAlertWithDelay=()=>{
        setTimeout(function(){
        }, 5000);
      }

  render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Loading</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
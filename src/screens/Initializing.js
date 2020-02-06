import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import { Auth } from 'aws-amplify'
import {AsyncStorage} from 'react-native';
import PropTypes from 'prop-types'

export default class Initializing extends Component {

    componentDidMount() {
      this.ShowAlertWithDelay();
      Auth.currentAuthenticatedUser().then((user)=> {
        //console.log(user);
        if (user) {
          this.props.navigation.navigate('Home');
        } else {
          this.props.navigation.navigate('Login');
        }
      }).catch((err) => {
        console.log("Initializing Error: ", err); 
        this.props.navigation.navigate('Login'); 
      })
      /*
        try {
            const user = await Auth.currentAuthenticatedUser()
            //console.log('user: ', user.attributes);
        if (user) {
            this.props.navigation.navigate('Home');
        } else {
            this.props.navigation.navigate('Login');
        }} catch (err) {
            console.log('Initializing error: ', err)
            this.props.navigation.navigate('Login');
        }*/
    }
    _storeData = async () => {
      try {
        await AsyncStorage.setItem('@MySuperStore:key', 'I like to save its.');
        console.log("true");
      } catch (error) {
        console.log(error);
      }
    };
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('@MySuperStore:key');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    ShowAlertWithDelay=()=>{
        setTimeout(function(){
        }, 5000);
      }

  render() {
        return (
          <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>
        );
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
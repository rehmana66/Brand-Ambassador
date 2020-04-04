import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Platform,
    Linking,
    AppState,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Modal from 'react-native-modal';
import * as IntentLauncherAndroid from 'expo-intent-launcher';

class Area extends Component {
    constructor(props){
      super(props);
      this.state = {
          location: null,
          errorMessage: null,
          locationResult: null,
          isLocationModalVisible: false,
          appState: AppState.currentState,
      }
    }
    componentWillUnmount() {
      AppState.removeEventListener('change', this.handleAppStateChange);
    }
  
    handleAppStateChange = nextAppState => {
      if (
        this.state.appState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        //TODO: make it so that the modal only pops up if button is clicked and updates data
        // when app has come to foreground.
        this._getLocationAsync();
      }
      this.setState({ appState: nextAppState });
    };

    componentDidMount() {
      AppState.addEventListener('change', this.handleAppStateChange);
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
          this._getLocationAsync();
        }
      }

    _getLocationAsync = async () => {
      try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          let checkstat = Location.hasServicesEnabledAsync();
          if(!checkstat.locationServicesEnabled) {
            this.setState({isLocationModalVisible: true});
          }
          this.setState({
            errorMessage: 'Get location',
          });
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        let geocode = await Location.reverseGeocodeAsync(location.coords);
        this.props.location(geocode);
        //console.log(geocode);
        this.setState({ 
            location,
            locationResult: geocode,
            errorMessage: null,
        });
      } catch(error) {
      }
      
  }

    openSetting = () => {
      if(Platform.OS=='ios') {
        Linking.openURL('app-settings:')
      } else {
          IntentLauncherAndroid.startActivityAsync(
            IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
          );
      }
      this.setState({ openSetting: false });
    }
    
    
    render() {
      let text = 'Waiting..';
      
      if (this.state.errorMessage) {
          text = this.state.errorMessage;
      } else if (this.state.location) {
          text = this.state.locationResult[0].city + ', ' + this.state.locationResult[0].region;
      }
      return (
        <View>
          <Modal 
            onModalHide={this.state.openSetting?this.openSetting:undefined}
              isVisible={this.state.isLocationModalVisible} 
              onBackdropPress = {() => this.setState({ isLocationModalVisible: false })}
              style = {{alignSelf: 'center'}}>
            <View style={{height: 200, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}> 
              <Button title="Enable Location Services" 
              onPress={() => this.setState({isLocationModalVisible: false, openSetting: true})}></Button>
            </View>
          </Modal>
          <TouchableOpacity onPress={this._getLocationAsync}>
            <Text>{text}</Text>
          </TouchableOpacity>
        </View>

      );
    }
}

export default Area;
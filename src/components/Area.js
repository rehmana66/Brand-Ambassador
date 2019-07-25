import React, { Component } from 'react';
import {
    Text,
    Platform,
} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

class Area extends Component {
    constructor(props){
      super(props);
      this.state = {
          location: null,
          errorMessage: null,
          locationResult: null,
      }
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
          this._getLocationAsync();
        }
      }

    
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        let geocode = await Location.reverseGeocodeAsync(location.coords);
        this.setState({ 
            location,
            locationResult: geocode,
         });
        

      }
      
      render() {
        let text = 'Waiting..';
        
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = this.state.locationResult[0].city + ', ' + this.state.locationResult[0].region;
        }
        return (
          <Text>
              {text}
          </Text>
        );
      }
}

export default Area;
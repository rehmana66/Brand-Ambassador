import React, { Component } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Image } from 'react-native';



export default class CachedImage extends Component {
    constructor(props){
      super(props);
      this.state = {
        isReady: false,
      };
      this._cacheResourcesAsync = this._cacheResourcesAsync.bind(this)
    }
    async _cacheResourcesAsync() {
      const images = [this.props.source];
      console.log(images.toString())
      const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
      }); 
      return Promise.all(cacheImages);
    }
  
    render() {

      if (!this.state.isReady) {
        return (
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        ); }
      return (
        <Image source={this.props.source} style={this.props.style}></Image>
      );
    }

  }
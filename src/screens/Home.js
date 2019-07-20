import React, { Component } from 'react';


import {
    View,
    Text,
    StyleSheet,
    Button,

} from 'react-native';

class Home extends Component {
      render() {
        return (
          <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Detail')} />
        );
      }

}


export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
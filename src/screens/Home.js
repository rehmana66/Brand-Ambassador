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
          <Text> Welcome </Text>
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
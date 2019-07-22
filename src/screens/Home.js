import React, { Component } from 'react';


import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity

} from 'react-native';

class Home extends Component {
      render() {
        return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} >
            <Text>Hi</Text>
            </TouchableOpacity>
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
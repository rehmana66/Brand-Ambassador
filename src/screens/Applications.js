import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    RefreshControl,
    SafeAreaView,
    ScrollView
} from 'react-native';


  

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        };
      }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View></View>
            </SafeAreaView>
        );
    }

}

export default Applications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
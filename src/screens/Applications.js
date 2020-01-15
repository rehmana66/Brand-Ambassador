import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

class Applications extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Home </Text>
            </View>
        );
    }

}

export default Applications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
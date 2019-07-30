import React, { Component } from 'react';
import { View, Image,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

class Account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {{alignItems: 'center', paddingTop: 10 , flex: 1}}>
                        <Image
                        style={{width: 80, height: 80}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                </View>
                <View style = {styles.publicInfoContainer}> 
                    <Text>Name</Text>
                    <Text>Province, City</Text>
                    <Text>Bio</Text>
                </View>
                <View style = {styles.bottomContainer}>
                    <TouchableOpacity>
                        <View style = {styles.loginButton}>
                            <Text style = {styles.loginButtonText}>View Resume</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style = {styles.loginButton}>
                            <Text style = {styles.loginButtonText}>View Past Shifts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('EditAccount')}>
                        <View style = {styles.signUpButton}>
                            <Text style = {styles.signUpButtonText}>Edit Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff3fd',
    },
    publicInfoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 30,
    },
    signUpButton: {
        justifyContent: 'center',
        backgroundColor: '#3f51b5',
        alignItems: 'center',
        height: 40,
        borderRadius: 5
    },
    signUpButtonText: {
        color: '#dff3fd',
        padding: 8
    },
    loginButton: {
        justifyContent: 'center',
        backgroundColor: '#dff3fd',
        alignItems: 'center',
        height: 40,
        borderRadius: 5
    },
    loginButtonText: {
        color: '#3f51b5',
        padding: 8
    },
});
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

class LogIn extends Component {

    render() {
        return (
            <View style = {styles.mainContainer}>
                <View style = {styles.innerContainer}>
                    <View style = {{alignSelf: 'center', paddingTop: 10}}>
                        <Image
                        style={{width: 80, height: 80}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                    <Text style = {styles.loginText}>Log In</Text>
                    <TextInput  style = {styles.input}
                        autoCorrect = {false}
                        underlineColorAndroid = "rgba(0, 0, 0, 0)"
                        placeholder = "Email Address"
                        placeholderTextColor = "#6c9192"/>
                    <TextInput  style = {styles.input}
                        secureTextEntry = {true}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#6c9192"/>
                    <TouchableOpacity>
                        <View style = {styles.forgotPassButton}>
                            <Text style = {styles.forgotPassButtonText}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.loginButtonContainer}>
                    <View style = {{margin: 10}}>
                        <Button style = {styles.loginButton}
                            title = "Log In"
                            color = '#045b95'
                            borderColor = '#dff3fd'
                            onPress = {() => this.props.navigation.navigate('Dashboard')}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    loginText: {
        margin: 10,
        fontSize: 26,
        color: '#ffffff'
    },
    input: {
        backgroundColor: '#03396a',
        margin: 5,
        height: 50,
        borderColor: '#dff3fd',
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
        fontSize: 16
    },
    loginButton: {
       borderColor: '#dff3fd',
       borderRadius: 10,
       borderWidth: 1,
       padding: 10,
       margin: 10,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    },
    forgotPassButton: {
        backgroundColor: '#021f4b',
        borderRadius: 10,
        margin: 5,
        height: 50
    },
    forgotPassButtonText: {
        color: 'white',
        padding: 14,
        fontSize: 16
    },
    loginButtonContainer: {
        height: 55,
        backgroundColor: '#1a171c', 
        justifyContent: 'flex-end'
    },
    innerContainer: {
        flex: 5, 
        backgroundColor: '#021f4b'
    }
 })

export default LogIn;
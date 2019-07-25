import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Home extends Component {
    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                <View style = {styles.topContainer}>
                    <Text style = {styles.title}>AppName</Text>
                    <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <Text style = {styles.slogan}>Find shifts to fit your schedule!</Text>
                </View>
                <View style = {styles.bottomContainer}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dashboard')}>
                        <View style = {styles.loginButton}>
                            <Text style = {styles.loginButtonText}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('LogIn')}>
                        <View style = {styles.loginButton}>
                            <Text style = {styles.loginButtonText}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')}>
                        <View style = {styles.signUpButton}>
                            <Text style = {styles.signUpButtonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View> 
           </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'space-around',
        margin: 30,
    },
    title: {
        fontFamily: "raleway-regular",
        margin: 10,
        fontSize: 26,
        color: '#3f51b5'
    },
    slogan: {
        fontFamily: "raleway-light",
        margin: 10,
        fontSize: 16,
        color: '#3f51b5'
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
 })


export default Home;
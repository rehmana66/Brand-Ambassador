import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

class Home extends Component {
    render() {
        return (
           <View style = {styles.mainContainer}>
               <View style = {styles.topContainer}>
                    <Text style = {styles.title}>AppName</Text>
                    <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <Text style = {styles.slogan}>Find shifts to fit your schedule!</Text>
                </View>
                <View style = {styles.bottomContainer}>
                    <View>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dashboard')}>
                            <View style = {styles.loginButton}>
                                <Text style = {styles.loginButtonText}>Dashboard</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('LogIn')}>
                            <View style = {styles.loginButton}>
                                <Text style = {styles.loginButtonText}>LOG IN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Button style = {styles.regButton}
                            onPress = {() => this.props.navigation.navigate('SignUp')}
                            title = "Sign Up"
                            borderColor = 'black'/>
                    </View>
                </View>
           </View> 
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#021f4b',
    },
    topContainer: {
        flex: 4,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 50
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'space-around',
        margin: 30,
    },
    title: {
        margin: 10,
        fontSize: 26,
        color: '#ffffff'
    },
    slogan: {
        margin: 10,
        fontSize: 16,
        color: '#ffffff'
    },
    regButton: {
       borderRadius: 10,
       borderWidth: 1,
       padding: 10,
       height: 40,
    },
    loginButton: {
        backgroundColor: '#021f4b',
        alignItems: 'center'
    },
    loginButtonText: {
        color: 'white',
        padding: 8
    }
 })


export default Home;
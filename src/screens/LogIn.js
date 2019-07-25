import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import  Reinput  from 'reinput';

class LogIn extends Component {

    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                <View style = { styles.loginContainer} >
                    <View style = {{alignSelf: 'center', paddingTop: 10}}>
                        <Image
                        style={{width: 80, height: 80}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                    <Text style = {styles.loginText}>Log In</Text>
                    <Reinput label = "Email Address"  fontFamily = "raleway-light"/>
                    <Reinput label = "Password"  fontFamily = "raleway-light" secureTextEntry = {true}/>
                    <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity>
                            <View style = {styles.loginScreenButtons}>
                                <Text style = {styles.loginScreenButtonsText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dashboard')}>
                            <View style = {styles.loginScreenButtons}>
                                <Text style = {styles.loginScreenButtonsText}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#dff3fd'
    },
    loginText: {
        fontFamily: "raleway-regular",
        paddingBottom: 10,
        fontSize: 26,
        color: 'black'
    },
    loginScreenButtons: {
        backgroundColor: '#dff3fd',
        borderRadius: 10,
        width: Dimensions.get('window').width/2 - 30,
        margin: 5,
        height: 50
    },
    loginScreenButtonsText: {
        fontFamily: "raleway-regular",
        color: '#3f51b5',
        padding: 14,
        fontSize: 16,
        alignSelf: 'center'
    },
    loginContainer: {
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
    },
 })

export default LogIn;
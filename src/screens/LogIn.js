import React, { Component, Fragment } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import  Reinput  from 'reinput';
import Modal from "react-native-modal";

//import Amplify from 'aws-amplify';
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:a88e9101-8d00-45f7-a879-e47167f25a36', 
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_ybDxoo4oL',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '5213lor8ffaqd9b2pifkj2m53n', 
    }
});

class LogIn extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isForgotModalVisible: false,
            isNewPassModalVisible: false,
            username: '',
            password: '',
            user: {},
            confirmCode: '',
            newPass: '',
            confirmNewPass: '',
            
        };
    }
    signIn = async () => {
        const { username, password } = this.state
        try {
           const user = await Auth.signIn(username, password)
           console.log('user successfully signed in!', user)
           this.setState({user})
           this.props.navigation.navigate('Dashboard')
        } catch (err) {
          console.log('error:', err)
        }
    };

    forgotPassword = async () => {
        const { username } = this.state;
        if(username.length > 0){
            try{
                Auth.forgotPassword(username)
                .then(data => console.log(data))
                this.toggleForgotModal();
            } catch (err) {
                console.log('error', err)
            };
        }
        else
            console.log('error: username cant be empty');
    }
    
    setNewPassword = async () => {
        const { username, confirmCode, newPass, confirmNewPass } = this.state;
        if (newPass.length < 6 || confirmNewPass < 6){
            console.log("Invalid Password(s) length");
        }
        else if(newPass === confirmNewPass){
            try{
                Auth.forgotPasswordSubmit(username, confirmCode, newPass)
                .then(data => console.log(data))
                this.passwordResetRequest();
                Keyboard.dismiss();
            } catch (err) {
                console.log('error', err)
            }
        }
    }
    passwordResetRequest = () => {
        Alert.alert(
          "Forgot Password",
          "Password Reset",
          [
            { text: "Ok", onPress: () => this.setState({ isNewPassModalVisible: !this.state.isNewPassModalVisible })}
          ],
          { cancelable: false },
        );
    };

    toggleForgotModal = () => {
        this.setState({ isForgotModalVisible: !this.state.isForgotModalVisible });
    };

    toggleNewPassModal = () => {
        this.setState({ isNewPassModalVisible: !this.state.isNewPassModalVisible });
    };

    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                <Modal isVisible = {this.state.isForgotModalVisible} style = {{paddingBottom: Dimensions.get('window').height/4 }}
                onBackdropPress = {() => this.setState({ isForgotModalVisible: !this.state.isForgotModalVisible })} onModalHide = {this.toggleNewPassModal}>
                    <View style = {{ height: Dimensions.get('window').height/2 - 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dff3fd', borderRadius: 5 }}>
                        <View style = {{ width: Dimensions.get('window').width - 60, justifyContent: 'space-around'}}>
                            <Text style = {styles.forgotModalTitle}>Forgot Password</Text>
                            <Reinput label = "Email Address"  fontFamily = "raleway-light" keyboardType = {'email-address'} onChangeText = { (value) => this.setState({ username: value }) }/>
                            <TouchableOpacity onPress={this.forgotPassword}>
                                <View style = {styles.forgotModalButton}>
                                    <Text style = {styles.forgotModalButtonText}>Forgot Password?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal isVisible = {this.state.isNewPassModalVisible} style = {{paddingBottom: Dimensions.get('window').height/4 }}
                onBackdropPress = {() => this.setState({ isNewPassModalVisible: !this.state.isNewPassModalVisible })}>
                    <View style = {{ height: Dimensions.get('window').height/2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dff3fd', borderRadius: 5 }}>
                        <View style = {{ width: Dimensions.get('window').width - 60, justifyContent: 'space-around'}}>
                            <Text style = {styles.forgotModalTitle}>Forgot Password</Text>
                            <Reinput label = "Confirmation Code"  fontFamily = "raleway-light" onChangeText = { (value) => this.setState({ confirmCode: value }) }/>
                            <Reinput label = "New Password"  fontFamily = "raleway-light" secureTextEntry = {true} onChangeText = { (value) => this.setState({ newPass: value }) }/>
                            <Reinput label = "Confirm New Password"  fontFamily = "raleway-light" secureTextEntry = {true} onChangeText = { (value) => this.setState({ confirmNewPass: value }) }/>
                            <TouchableOpacity onPress={this.setNewPassword}>
                                <View style = {styles.forgotModalButton}>
                                    <Text style = {styles.forgotModalButtonText}>Confirm New Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style = { styles.loginContainer} >
                    <View style = {{alignSelf: 'center', paddingTop: 10}}>
                        <Image
                        style={{width: 80, height: 80}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                    <Text style = {styles.loginText}>Log In</Text>
                    <Reinput label = "Email Address"  fontFamily = "raleway-light"
                    onChangeText = { (value) => this.setState({ username: value }) }/>
                    <Reinput label = "Password"  fontFamily = "raleway-light" secureTextEntry = {true}
                    onChangeText = { (value) => this.setState({ password: value }) }/>

                    <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.toggleForgotModal}>
                            <View style = {styles.loginScreenButtons}>
                                <Text style = {styles.loginScreenButtonsText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {this.signIn}>
                            <View style = {styles.loginScreenButtons}>
                                <Text style = {styles.loginScreenButtonsText}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')}>
                            <View style = {styles.signUpButton}>
                                <Text style = {styles.signUpButtonText}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dashboard')}>
                            <View style = {styles.signUpButton}>
                                <Text style = {styles.signUpButtonText}>Dashboard</Text>
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
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        
    },
    loginText: {
        fontFamily: "raleway-regular",
        paddingBottom: 10,
        fontSize: 26,
        color: 'black'
    },
    forgotModalTitle: {
        fontFamily: "raleway-regular",
        paddingBottom: 20,
        fontSize: 26,
        color: '#3f51b5',
        alignSelf: 'center'
    },
    forgotModalButton: {
        backgroundColor: '#3f51b5',
        borderRadius: 10,
        width: Dimensions.get('window').width - 60,
        alignSelf: 'center',
        margin: 5,
        height: 50
    },
    forgotModalButtonText: {
        fontFamily: "raleway-regular",
        color: '#dff3fd',
        padding: 14,
        fontSize: 16,
        alignSelf: 'center'
    },
    loginScreenButtons: {
        backgroundColor: '#dff3fd',
        borderRadius: 10,
        width: Dimensions.get('window').width/2 - 30,
        margin: 2,
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
        flex: 1,
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
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

export default LogIn;
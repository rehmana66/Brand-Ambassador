import React, { Component, Fragment } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { ListItem, SearchBar, Divider, CheckBox, Button  } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import  Reinput  from 'reinput';
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types'
import CachedImage from '../components/CachedImage';
import Amplify, { Auth } from 'aws-amplify';
import TextInput from "react-native-improved-text-input";
const { height, width } = Dimensions.get('window')
Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:316afdde-f978-4983-810e-879215b80363', 
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_CBWDFQaUL',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '2mamhmvgilo83g0o6eqfkd7a2k', 
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
            showConfirmationForm: false,
            authenticationCode: '', 
        };
    }

    signIn = async () => {
        const { username, password } = this.state
        try {
            const user = await Auth.signIn(username, password);
            this.setState({user})
            //console.log(this.state.user.attributes);
            this.props.navigation.navigate('Dashboard')
        } catch (err) {
            console.log('error:', err.code)
            this.errorcheck(err.code);
        }
    };

    errorcheck(code) {
        if(code == "UserNotConfirmedException") {
            this.setState({ showConfirmationForm: true })
        } else if (code == undefined) {
            alert("Please enter a user")
        } else if (code == "UserNotFoundException") {
            alert("Incorrect username or password")
        } else {
            console.log("not working", code)
        }
    }

    confirmSignUp = async () => {
        const { username, authenticationCode } = this.state
        try {
            await Auth.confirmSignUp(username, authenticationCode);
            console.log('successully signed up!');
            alert('User signed up successfully!');
            this.signIn();
        } catch (err) {
            console.log('error confirming signing up: ', err)
            if (err.message == "User cannot be confirmed. Current status is CONFIRMED") {
                this.signIn();
            }
        }
    }
    resendCode = async () => {
        const { username } = this.state
        Auth.resendSignUp(username).then(() => {
            alert("New code sent sucessfully");
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    }

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


    inputFocused (refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]),100,true);
        }, 50);
    }

    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: 'white' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                {!this.state.showConfirmationForm && (
                <Fragment> 
                <Modal isVisible = {this.state.isForgotModalVisible} style = {{paddingBottom: Dimensions.get('window').height/4 }}
                onBackdropPress = {() => this.setState({ isForgotModalVisible: !this.state.isForgotModalVisible })} onModalHide = {this.toggleNewPassModal}>
                    <View style = {{ height: Dimensions.get('window').height/2 - 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 5 }}>
                        <View style = {{ width: Dimensions.get('window').width - 60, justifyContent: 'space-around'}}>
                            <Text style = {{fontWeight: '300', fontSize: 30, alignSelf: 'center', marginBottom: 20}}>Forgot Password</Text>
                            <Reinput label = "Email Address"  fontFamily = "raleway-light" keyboardType = {'email-address'} 
                            onChangeText = { (value) => this.setState({ username: value }) }
                            style={{marginLeft: 15, marginRight: 15}}/>
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
                    <View style = {{ height: Dimensions.get('window').height/2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 5 }}>
                        <View style = {{ width: Dimensions.get('window').width - 60, justifyContent: 'space-around'}}>
                            <Text style = {styles.forgotModalTitle}>Forgot Password</Text>
                            <View style={{marginLeft: 15, marginRight: 15}}>
                                <Reinput label = "Confirmation Code"  fontFamily = "raleway-light"
                                onChangeText = { (value) => this.setState({ confirmCode: value }) }/>
                                <Reinput label = "New Password"  fontFamily = "raleway-light" secureTextEntry = {true}
                                onChangeText = { (value) => this.setState({ newPass: value }) }/>
                                <Reinput label = "Confirm New Password"  fontFamily = "raleway-light" secureTextEntry = {true}
                                onChangeText = { (value) => this.setState({ confirmNewPass: value }) }/>
                            </View>
                            <TouchableOpacity  onPress={this.setNewPassword}>
                                <View style = {styles.forgotModalButton}>
                                    <Text style = {styles.forgotModalButtonText}>Confirm New Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style = { styles.loginContainer} >
                    <View style={{flex:1, backgroundColor: 'white', alignItems: 'center'}}>
                        <CachedImage source = {require("../../assets/logo.png")} style={{height: 100, width: 400}}/>
                    </View>
                    <View style={{flex: 4.5}}>
                        <View style={{marginHorizontal: 10, marginRight: 10}}>
                            <Reinput label = "Email Address"  fontFamily = "raleway-light" keyboardType = {'email-address'}
                                returnKeyType = {"next"}
                                onChangeText = { (value) => this.setState({ username: value.toLowerCase() }) }
                                onSubmitEditing={() => { this.refs['Password'].focus() }}/>
                            <Reinput label = "Password"  fontFamily = "raleway-light" secureTextEntry = {true}
                                ref = {'Password'} onChangeText = { (value) => this.setState({ password: value }) }/>
                            <View style={{flexDirection: 'row', marginTop: -30}}>
                                <Text style={{fontWeight: '300'}}>Forgot Password?</Text>
                                <TouchableOpacity onPress={this.toggleForgotModal} style={{marginLeft: 5}}>
                                    <Text style={{color: global.iOSBlue, fontWeight: '300'}}>Recover here</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', marginTop: 40}}>
                            <Button onPress={this.signIn} title="Log In" buttonStyle={{backgroundColor: global.iOSBlue}} containerStyle={{width: width-50}}/>
                        </View>
                        <Divider style={{height: 1, backgroundColor: '#c5c7c4', marginLeft: 12, marginRight: 12, marginTop: 30 }} />
                        <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 12, justifyContent: 'center'}}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')} style={{marginLeft: 5}}>
                                <Text style={{color: global.iOSBlue}}>Choose an option</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 30, alignItems: 'center'}}>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')} style={{marginLeft: 5}}>
                                <CachedImage source = {require("../../assets/facebook.jpg")} style={{width: 370, height: 40}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')} style={{marginLeft: 5, marginTop: 15}}>
                                <CachedImage source = {require("../../assets/google.jpg")} style={{width: 370, height: 40}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')} style={{marginLeft: 5, marginTop: 15}}>
                                <CachedImage source = {require("../../assets/email.jpg")} style={{width: 370, height: 40}}/>
                            </TouchableOpacity>
                        </View>  
                    </View>
                </View> 
                </Fragment>
                )}
                {
                this.state.showConfirmationForm && (
                    <Fragment>
                        <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'} contentContainerStyle = {styles.mainScroll}>
                            <Text ref = {'Account'} style = {styles.textStyle}>Confirm Account</Text>
                            <Reinput
                                fontFamily = "raleway-light"
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next"}
                                label = "Authentication code"
                                keyboardType = {'numeric'}
                                onChangeText = { (value) => this.setState({ authenticationCode: value}) }/>
                            <Button
                                title='Login'
                                onPress={this.confirmSignUp}/>
                            <Button style={{marginVertical: 10}}
                            title='Resend Code'
                            onPress={this.resendCode}/>
                        </KeyboardAwareScrollView>
                    </Fragment>
                )}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
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
        backgroundColor: global.iOSBlue,
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
        backgroundColor: 'white',
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
        backgroundColor: 'white',
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
    mainScroll: {
        flexGrow: 1,
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30
    },
    textStyle: {
        fontFamily: "raleway-regular",
        color: '#3f51b5',
        paddingBottom: 10,
        fontSize: 24,
    },

 })

export default LogIn;
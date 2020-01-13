import React, { Component, Fragment  } from 'react';
import { View, TouchableOpacity, findNodeHandle, Dimensions, Button, Text, Picker, StyleSheet } from 'react-native';
import Reinput from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from "react-native-modal-datetime-picker";

import Area from '../components/Area';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

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

const initialState = {
    username: "", 
    password: "", 
    email: "", 
    phone_number: "+1", 
    authenticationCode: "", 
    name: "",
    birthdate: "",
    userType: false,
    showConfirmationForm: false,

    username_error: "",
    name_error: "",
    phone_error: "",
    password_error: ""
  }



class SignUp extends Component {
    
    //state = initialState
    constructor(props){
        super(props);
        this.state = {
            username: "", 
            password: "", 
            email: "", 
            phone_number: "+1", 
            authenticationCode: "", 
            name: "",
            birthdate: "",
            userType: false,
            showConfirmationForm: false,
        
            username_error: "",
            name_error: "",
            phone_error: "",
            password_error: ""
        }
      }
    
    signUp = async () => {

        const { username, password, email, phone_number, name
        } = this.state
        try {
            const success = await Auth.signUp({ username, password,
                attributes: { email, phone_number, name}})
            console.log('user successfully signed up!: ', success)
            this.setState({ showConfirmationForm: true })
        } catch (err) {
            console.log('error signing up: ', err)
            this.errorcheck(err)
        }
        
    }

    checkEmpty() {
        count = 0;
        if (this.state.email == "") {
            this.setState({username_error: "Email address cannot be empty"});
            count = 1;
        }
        if (this.state.password == "") {
            this.setState({password_error: "Password cannot be empty"});
            count = 1;
        }
        if (this.state.name == "") {
            this.setState({name_error: "Name cannot be empty"});
            count = 1;
        }
        if (this.state.phone_number == "") {
            this.setState({phone_error: "Phone Number cannot be empty"});
            count = 1;
        }
        if (count == 1) {
            return 1;
        } else {
            return 0;
        }
    }

    confirmSignUp = async () => {
        const { username, authenticationCode } = this.state
        try {
            await Auth.confirmSignUp(username, authenticationCode);
            console.log('successully signed up!');
            //this.props.navigation.navigate('Login');
            alert('User signed up successfully!'); 
            this.setState({ ...initialState });
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

    signIn = async () => {
        const { username, password } = this.state
        try {
            const user = await Auth.signIn(username, password);
            this.setState({user})
            console.log(this.state.user.attributes);
            this.props.navigation.navigate('Dashboard')
        } catch (err) {
            this.errorcheck(err)
            console.log('error:', err)
        }
    };

    errorcheck(error) {
        if(error == "UserNotConfirmedException") {
            this.setState({ showConfirmationForm: true })
        } else if (error == undefined) {
            alert("Please enter a user")
        } else if (error == "UserNotFoundException") {
            alert("Incorrect username or password")
        } else {
            console.log("not working")
        }
        if (error == "Username cannot be empty") {
            this.setState({username_error: "Email address cannot be empty"});
        }
        if (error == "Password cannot be empty") {
            this.setState({password_error: "Password cannot be empty"});
        }
        if (error.message == "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6") {
            this.setState({password_error: "Password must be greater than 6 characters"});
        }
        if (error.message == "Invalid email address format.") {
            this.setState({username_error: "Invalid email address"});
        }
    }

    inputFocused (refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]),100,true);
        }, 50);
    }

    async componentDidMount() {
    }

    
    render () {
        return (
        // Main Container
        <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
            Keyboard.dismiss() }}>
            {!this.state.showConfirmationForm && (
                <Fragment> 
                    <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'} contentContainerStyle = { styles.mainScroll}>
                        <Text ref = {'Account'} style = {styles.textStyle}>Account</Text>
                        <Reinput
                            fontFamily = "raleway-light"
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next"}
                            label = "Email Address"
                            keyboardType = {'email-address'}
                            error = {this.state.username_error}
                            onSubmitEditing={() => { this.refs['FullName'].focus() }}
                            onChangeText = { (value) => this.setState({ email: value, username: value, username_error: "" }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'FullName'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Full Name"
                            onFocus={() => this.inputFocused('PhoneNumber')}
                            onSubmitEditing={() => { this.refs['PhoneNumber'].focus() }}
                            onChangeText = { (value) => this.setState({ name: value, name_error: "" }) }/>              
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'PhoneNumber'}
                            keyboardType={"number-pad"}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Phone Number"
                            onSubmitEditing={() => { this.refs['Password'].focus() }}
                            onChangeText = { (value) => this.setState({ phone_number: value, phone_error: "" }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = "Password"
                            autoCorrect = {false}
                            secureTextEntry = {true}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            error = {this.state.password_error}
                            label = "Password"
                            onFocus={() => this.inputFocused('SignUpButton')}
                            onSubmitEditing={() => { this.refs['SignUpButton'].focus() }}
                            onChangeText = { (value) => this.setState({ password: value, password_error: "" }) }/>
                       
                        <View ref = {'test'} style = {{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity onPress = {this.signUp}>
                                <View style = {styles.signUpButton}>
                                    <Text style = {styles.signUpButtonText}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View ref = {'SignUpButton'} style = {{paddingTop: 25}}></View>

                        <Text style = {styles.textStyle}>User Type</Text>
                        <View>
                            <Picker selectedValue = {this.state.userType} onValueChange = {(value) => this.setState({ userType: value })}>
                                <Picker.Item label = "User" value = {false} />
                                <Picker.Item label = "Employer" value = {true} />
                            </Picker>
                        </View>
                        
                    </KeyboardAwareScrollView>
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
};

// Styles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mainScroll: {
        flexGrow: 1,
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30
    },
    signUpButton: {
        justifyContent: 'center',
        backgroundColor: '#3f51b5',
        width: Dimensions.get('window').width - 30,
        margin: 5,
        height: 50,
        borderRadius: 5
    },
    signUpButtonText: {
        fontFamily: "raleway-regular",
        color: '#dff3fd',
        padding: 14,
        fontSize: 16,
        alignSelf: 'center'
    },
    textStyle: {
        fontFamily: "raleway-regular",
        color: '#3f51b5',
        paddingBottom: 10,
        fontSize: 24,
    }
});

export default withNavigation(SignUp);
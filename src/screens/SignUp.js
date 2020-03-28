import React, { Component, Fragment  } from 'react';
import { View, TouchableOpacity, findNodeHandle, Dimensions, Button, Text, Picker, StyleSheet } from 'react-native';
import Reinput from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';
import { ListItem, SearchBar, Divider, CheckBox, ButtonGroup  } from 'react-native-elements';
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
    },
    "aws_appsync_graphqlEndpoint": "https://xtwbkpbhera2fdndfrvu2w4hb4.appsync-api.us-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
});

const initialState = {
    username: "", 
    password: "", 
    email: "", 
    phone_number: "", 
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
            phone_number: "", 
            authenticationCode: "", 
            name: "",
            birthdate: "",
            userType: false,
            showConfirmationForm: false,
            selectedIndex: 0,
            username_error: "",
            name_error: "",
            phone_error: "",
            password_error: ""
        }
      }
    
    signUp = async () => {
        const { username, password, email, phone_number, name, birthdate
        } = this.state
        try {
            const success = await Auth.signUp({ username, password,
                attributes: { email, phone_number, name, birthdate}})
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
            //this.setState({ ...this.state });
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

    signIn = () => {
        const { username, password } = this.state
        try {
            const user =  Auth.signIn(username, password).then(this.addUser).catch(err => console.log(err));
            this.setState({user})
            console.log(this.state.user.attributes);
            this.props.navigation.navigate('Dashboard')
        } catch (err) {
            this.errorcheck(err)
            console.log('error:', err)
        }
    };
    //must be logged in
    addUser = async () =>  {
        const { email, phone_number, name, birthdate, userType
        } = this.state
        const todo = { email: email, fullName: name, user_type: userType, phone_number: phone_number };
        //const todo = { email: "rehmana6@mymacewan.ca", fullName: "Abdul Rehman", user_type: "true", phone_number: "+17809329550" };
        await API.graphql(graphqlOperation(mutations.createUser, { input: todo }));
        console.log("Added user to DB");
    }

    errorcheck(error) {
        if(error == "UserNotConfirmedException") {
            this.setState({ showConfirmationForm: true })
        } else if (error == undefined) {
            alert("Please enter a user")
        } else if (error == "UserNotFoundException") {
            alert("Incorrect username or password")
        } else {
            console.log("not working: ", error)
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
    updateIndex (value) {
        type = false;

        if (value == 1) {
            type = true
        }

        this.setState({selectedIndex: value, userType: type})
    }

    render () {
        return (
        // Main Container
        <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: 'white' }} onPress ={ () => {
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
                            onChangeText = { (value) => {check = value.toLowerCase(); this.setState({ email: check, username: check, username_error: "" })} }/>
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
                       
                       <Text style = {styles.textStyle}>User Type</Text>
                       <ButtonGroup
                            onPress={this.updateIndex.bind(this)}
                            selectedIndex={this.state.selectedIndex}
                            buttons={["User", "Employer"]}
                            containerStyle={{height: 40, marginBottom: 30}}
                        />

                        <View ref = {'test'} style = {{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity onPress = {this.signUp}>
                                <View style = {styles.signUpButton}>
                                    <Text style = {styles.signUpButtonText}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View ref = {'SignUpButton'} style = {{paddingTop: 25}}></View>
                        
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
        backgroundColor: 'white'
    },
    mainScroll: {
        flexGrow: 1,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30
    },
    signUpButton: {
        justifyContent: 'center',
        backgroundColor: global.iOSBlue,
        width: Dimensions.get('window').width - 30,
        margin: 5,
        height: 50,
        borderRadius: 5
    },
    signUpButtonText: {
        fontFamily: "raleway-regular",
        color: 'white',
        padding: 14,
        fontSize: 16,
        alignSelf: 'center'
    },
    textStyle: {
        fontFamily: "raleway-regular",
        color: global.iOSBlue,
        paddingBottom: 10,
        fontSize: 24,
        alignSelf: 'center'
    }
});

export default withNavigation(SignUp);
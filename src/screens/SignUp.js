import React, { Component, Fragment  } from 'react';
import { View, TouchableOpacity, findNodeHandle, Dimensions, Button, Text, Picker, StyleSheet } from 'react-native';
import Reinput from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';


import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

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

const initialState = {
    username: '', 
    password: '', 
    confirmPassword: '',
    email: '', 
    phone_number: '', 
    authenticationCode: '', 
    firstname: "",
    lastname: '',
    country: "",
    city: '',
    province: '',
    postalcode: '',
    gender: '',
    DoB: '',
    showConfirmationForm: false
  }

class SignUp extends Component {
    
    state = initialState

    signUp = async () => {
        const { username, password, email, phone_number, firstname, lastname, country, city,
            province, postalcode, gender, birthday
        } = this.state
        try {
            const success = await Auth.signUp({ username, password,
                attributes: { email, phone_number,
                    'custom:firstname': firstname,
                    'custom:lastname': lastname,
                    'custom:country': country,
                    'custom:city': city,
                    'custom:state': province,
                    'custom:postalcode': postalcode,}})
            console.log('user successfully signed up!: ', success)
            this.setState({ showConfirmationForm: true })
        } catch (err) {
            console.log('error signing up: ', err)
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

    errorcheck(code) {
        if(code == "UserNotConfirmedException") {
            this.setState({ showConfirmationForm: true })
        } else if (code == undefined) {
            alert("Please enter a user")
        } else if (code == "UserNotFoundException") {
            alert("Incorrect username or password")
        } else {
            console.log("not working")
        }
    }

    inputFocused (refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]),100,true);
        }, 50);
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
                            onSubmitEditing={() => { this.refs['Password'].focus() }}
                            onChangeText = { (value) => this.setState({ email: value, username: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = "Password"
                            autoCorrect = {false}
                            secureTextEntry = {true}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Password"
                            onFocus={() => this.inputFocused('Account')}
                            onSubmitEditing={() => { this.refs['ConfirmPassword'].focus() }}
                            onChangeText = { (value) => this.setState({ password: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = "ConfirmPassword"
                            autoCorrect = {false}
                            secureTextEntry = {true}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Confirm Password"
                            onFocus={() => this.inputFocused('FirstName')}
                            onSubmitEditing={() => { this.refs['FirstName'].focus() }}
                            onChangeText = { (value) => this.setState({ confirmPassword: value }) }/>
                        <Text style = {styles.textStyle}>Personal</Text>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'FirstName'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "First Name"
                            onFocus={() => this.inputFocused('LastName')}
                            onSubmitEditing={() => { this.refs['LastName'].focus() }}
                            onChangeText = { (value) => this.setState({ firstname: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'LastName'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Last Name"
                            onFocus={() => this.inputFocused('Gender')}
                            onSubmitEditing={() => { this.refs['Gender'].focus() }}
                            onChangeText = { (value) => this.setState({ lastname: value }) }/>              
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'Gender'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Gender"
                            onFocus={() => this.inputFocused('PhoneNumber')}
                            onSubmitEditing={() => { this.refs['PhoneNumber'].focus() }}
                            onChangeText = { (value) => this.setState({ gender: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'PhoneNumber'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Phone Number"
                            onFocus={() => this.inputFocused('Country')}
                            onSubmitEditing={() => { this.refs['Country'].focus() }}
                            onChangeText = { (value) => this.setState({ phone_number: value }) }/>
                        <Text style = {styles.textStyle}>Date of Birth</Text>
                        <DatePicker
                            ref = {'DoB'}
                            style = {{width: 200, marginVertical: 20}}
                            date = {this.state.DoB}
                            mode = "date"
                            placeholder = "Select Date"
                            format = "YYYY-MM-DD"
                            minDate = "1910-01-01"
                            maxDate = "2005-01-01"
                            confirmBtnText = "Confirm"
                            cancelBtnText = "Cancel"
                            onDateChange={(date) => {this.setState({DoB: date})}}
                            customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateInput: {
                                  marginLeft: 36
                                },
                                btnTextConfirm: {
                                    color: '#1094f7'
                                },
                                btnTextCancel: {
                                    color: '#1094f7'
                                }
                            }}/>
                        <Text style = {styles.textStyle}>Location</Text>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'Country'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Country"
                            onFocus={() => this.inputFocused('City')}
                            onSubmitEditing={() => { this.refs['City'].focus() }}
                            onChangeText = { (value) => this.setState({ country: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'City'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "City"
                            onFocus={() => this.inputFocused('SignUpButton')}
                            onSubmitEditing={() => { this.refs['Province'].focus() }}
                            onChangeText = { (value) => this.setState({ city: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'Province'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "Province"
                            onFocus={() => this.inputFocused('SignUpButton')}
                            onSubmitEditing={() => { this.refs['PostalCode'].focus() }}
                            onChangeText = { (value) => this.setState({ province: value }) }/>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'PostalCode'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "done" }
                            label = "Postal Code"
                            onFocus={() => this.inputFocused('SignUpButton')}
                            onSubmitEditing={() => this.inputFocused('SignUpButton') }
                            onChangeText = { (value) => this.setState({ postalcode: value }) }/>


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
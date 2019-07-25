import React, { Component } from 'react';
import { View, TouchableOpacity, findNodeHandle, Dimensions, Button, Text, TextInput, StyleSheet } from 'react-native';
import Reinput from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class SignUp extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            country: "",
            city: "",
            province: "",
            postalCode: ""
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
                    onChangeText = { (value) => this.setState({ email: value }) }/>
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
                    onChangeText = { (value) => this.setState({ firstName: value }) }/>
                <Reinput
                    fontFamily = "raleway-light"
                    ref = {'LastName'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    label = "Last Name"
                    onFocus={() => this.inputFocused('PhoneNumber')}
                    onSubmitEditing={() => { this.refs['PhoneNumber'].focus() }}
                    onChangeText = { (value) => this.setState({ lastName: value }) }/>
                <Reinput
                    fontFamily = "raleway-light"
                    ref = {'PhoneNumber'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    label = "Phone Number"
                    onFocus={() => this.inputFocused('Country')}
                    onSubmitEditing={() => { this.refs['Country'].focus() }}
                    onChangeText = { (value) => this.setState({ phoneNumber: value }) }/>
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
                    onChangeText = { (value) => this.setState({ postalCode: value }) }/>
                <View ref = {'test'} style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dashboard')}>
                        <View style = {styles.signUpButton}>
                            <Text style = {styles.signUpButtonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View ref = {'SignUpButton'} style = {{paddingTop: 25}}></View>
            </KeyboardAwareScrollView>
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

export default SignUp;
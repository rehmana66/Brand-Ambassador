import React, { Component } from 'react';
import { findNodeHandle, Dimensions, Button, Text, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class SignUp extends Component {
    
    inputFocused(refName) {
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
                <TextInput  style = {styles.input}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next"}
                    placeholder = "Email Address"
                    placeholderTextColor = "#6c9192"
                    keyboardType = {'email-address'}
                    onSubmitEditing={() => { this.refs['Password'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = "Password"
                    autoCorrect = {false}
                    secureTextEntry = {true}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "Password"
                    placeholderTextColor = "#6c9192"
                    onSubmitEditing={() => { this.refs['ConfirmPassword'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = "ConfirmPassword"
                    autoCorrect = {false}
                    secureTextEntry = {true}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "Confirm Password"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('FirstName')}
                    onSubmitEditing={() => { this.refs['FirstName'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'FirstName'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "First Name"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('LastName')}
                    onSubmitEditing={() => { this.refs['LastName'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'LastName'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "Last Name"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('PhoneNumber')}
                    onSubmitEditing={() => { this.refs['PhoneNumber'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'PhoneNumber'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "Phone Number"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('Country')}
                    onSubmitEditing={() => { this.refs['Country'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'Country'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "Country"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('City')}
                    onSubmitEditing={() => { this.refs['City'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'City'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "City"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('SignUpButton')}
                    onSubmitEditing={() => { this.refs['Province'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'Province'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next" }
                    placeholder = "Province"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('SignUpButton')}
                    onSubmitEditing={() => { this.refs['PostalCode'].focus() }}/>
                <TextInput  style = {styles.input}
                    ref = {'PostalCode'}
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "done" }
                    placeholder = "Postal Code"
                    placeholderTextColor = "#6c9192"
                    onFocus={() => this.inputFocused('SignUpButton')}
                    onSubmitEditing={() => this.inputFocused('SignUpButton') }/>
                <Button title = "Sign Up" 
                    ref = {'SignUpButton'}
                    onPress = {() => this.props.navigation.navigate('Dashboard')}/>
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
        backgroundColor: '#dff3fd'
    },
    input: {
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
        height: 40,
        color: '#000',
        fontSize: 14,
        textAlign: 'left',
        textAlignVertical: 'center',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: '#d5d5d5',
        borderWidth: 0.5,
        backgroundColor: '#f5f5f5',
    },
});

export default SignUp;
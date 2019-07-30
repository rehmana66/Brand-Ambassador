import React, { Component } from 'react';
import { View, TouchableOpacity, findNodeHandle, Dimensions, Button, Text, TextInput, StyleSheet } from 'react-native';
import Reinput from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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



class ConfirmSignUp extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            confirmCode: "",
            username: ""
        }
    }

    cSignup() {
        const { navigation } = this.props;
        const username = navigation.getParam('username', 'NO-ID');
        Auth.confirmSignUp(username, this.state.confirmCode, {
            forceAliasCreation: true    
        }).then(
                data => console.log(data),
            ).then(
                this.props.navigation.navigate('Home')
            )
          .catch(err => console.log(err));
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
                <Text ref = {'Account'} style = {styles.textStyle}>Confirm Code:</Text>
                <Reinput
                    fontFamily = "raleway-light"
                    autoCorrect = {false}
                    underlineColorAndroid = "transparent"
                    returnKeyType = { "next"}
                    label = "Code"
                    keyboardType = {'numeric'}
                    onChangeText = { (value) => this.setState({ confirmCode: value }) }/>
                <View ref = {'test'} style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {this.cSignup.bind(this)}>
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

export default ConfirmSignUp;
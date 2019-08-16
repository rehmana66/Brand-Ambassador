import React, { Component, Fragment,} from 'react';
import { View, TouchableOpacity, findNodeHandle, Dimensions, Button, Text, Picker, StyleSheet, Form } from 'react-native';
import Reinput from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import Swiper from 'react-native-swiper';
import Area from '../components/Area';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';


import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import { ScrollView } from 'react-native-gesture-handler';

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


class NewSignUp extends Component {


    constructor (props) {
        super(props);
        this.state = {
            index: 0,
            errorColor: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            phoneid: "+1",
            phone_number: "", 
            userType: false,

            comfirmPasswordError: "",
            passwordError: "",
            usernameError: "",
            emailError: "",
            phoneError: "",
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }
    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }
    showinfo() {
        console.log(
            "index: ", this.state.index,
            "email: ", this.state.email,
            "username: ", this.state.username,
            "password: ", this.state.password,
            "confirmpass: ", this.state.confirmPassword,
            "phone: ", this.state.phone_number,
            "user_type:", this.state.userType
        )
    }
    changeScreen() {
        index = this.state.index
        
        if(index == 0) {
            check = this.errorCheckScreen3()
            if(check == true) {
                this.setState({index: index+1}) 
            }
        }

        //index = this.state.index
        //this.setState({index: index+1}) 
    }

    errorCheckScreen3() {
        count = 0;
        if(this.state.email == "") {
            this.setState({
                errorColor: "#fc1f4a",
                emailError: "The email field can not be empty"
            });
            count = 1;
        } else {
            this.setState({errorColor: "", emailError: ""});
        }
        if(this.state.username == "") {
            this.setState({
                errorColor: "#fc1f4a",
                usernameError: "The username field can not be empty"
            });
            count = 1;
        } else {
            this.setState({errorColor: "", usernameError: ""});
        }
        if(this.state.password == "") {
            this.setState({
                errorColor: "#fc1f4a",
                passwordError: "The password field can not be empty"
            });
            count = 1;
        } else {
            this.setState({errorColor: "", passwordError: ""});
        }
        if(this.state.confirmPassword == "") {
            this.setState({
                errorColor: "#fc1f4a",
                comfirmPasswordError: "The password field can not be empty"     
            });
            count = 1;
        } else {
            this.setState({errorColor: "", comfirmPasswordError: ""});
        }
        if(this.state.confirmPassword != this.state.password || 
            this.state.password == "" || this.state.confirmPassword == "") {
            this.setState({
                errorColor: "#fc1f4a",
                comfirmPasswordError: "The password confirmation does not match"
            });
            count = 1;
        } else {
            this.setState({
                errorColor: "",
                comfirmPasswordError: ""
            });
        }
        if (count == 1) {
            return false
        }
        return true
    }
    errorCheckScreen2() {
        count = 0;
        if(this.state.phone_number.length != 12) {
            this.setState({
                errorColor: "#fc1f4a",
                phoneError: "Phone number inccorect"
            });
            count = 1;
        } else {
            this.setState({errorColor: "", phoneError: ""});
        }
        if (count == 1) {
            return false
        }
        return true
    }
    errorCheckScreen1() {
        count = 0;
        if (count == 1) {
            return false
        }
        return true
    }

    inputFocused (refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]),100,true);
        }, 50);
    }
    PhoneNumberPickerChanged(country, callingCode, phoneNumber) {
        this.setState({countryName: country.name, callingCode: callingCode, phoneNo:phoneNumber});
     }
    render () {
        return (
            <SafeAreaView sc forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }}
            onPress ={ () => {Keyboard.dismiss()}}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={false} scrollEnabled={false} index={this.state.index}>
                    <View style={styles.mainScroll}>
                        <KeyboardAwareScrollView sc ref = 'scrollView' keyboardShouldPersistTaps = {'always'}>
                            <Text ref = {'Account'} style = {styles.textStyle}>Account Details</Text>
                            <Reinput
                                fontFamily = "raleway-light"
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next"}
                                label = "Email Address"
                                keyboardType = {'email-address'}
                                errorColor = {this.state.errorColor}
                                error = {this.state.emailError}
                                onSubmitEditing={() => { this.refs['Username'].focus() }}
                                onChangeText = { (value) => this.setState({ email: value }) }/>
                            <Reinput
                                fontFamily = "raleway-light"
                                ref = "Username"
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next" }
                                label = "Username"
                                errorColor = {this.state.errorColor}
                                error = {this.state.usernameError}
                                onFocus={() => this.inputFocused('Account')}
                                onSubmitEditing={() => { this.refs['Password'].focus() }}
                                onChangeText = { (value) => this.setState({ username: value }) }/>  
                            <Reinput
                                fontFamily = "raleway-light"
                                ref = "Password"
                                autoCorrect = {false}
                                secureTextEntry = {true}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next" }
                                label = "Password"
                                errorColor = {this.state.errorColor}
                                error = {this.state.passwordError}
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
                                errorColor = {this.state.errorColor}
                                error = {this.state.comfirmPasswordError}
                                onChangeText = { (value) => this.setState({ confirmPassword: value }) }/>
                            <View style={{justifyContent: 'space-evenly'}}>
                                    <Text style={styles.textStyle}>Account Type</Text>
                                    <Picker itemStyle={{marginTop:-70}} selectedValue = {this.state.userType} 
                                        onValueChange = {(value) => this.setState({ userType: value })}>
                                        <Picker.Item label = "User" value = {false} />
                                        <Picker.Item label = "Employer" value = {true} />
                                    </Picker>
                            </View>
                            <TouchableOpacity onPress = {this.changeScreen.bind(this)}>
                                <View style = {styles.button}>
                                    <Text style = {styles.buttonText}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.showinfo()}>
                                <View style = {styles.button}>
                                    <Text style = {styles.buttonText}>test</Text>
                                </View>
                            </TouchableOpacity>
                        </KeyboardAwareScrollView>
                       
                    </View>
                    <View style={styles.slide2}>
                        <Reinput
                            fontFamily = "raleway-light"
                            ref = {'PhoneNumber'}
                            autoCorrect = {false}
                            underlineColorAndroid = "transparent"
                            returnKeyType = { "next" }
                            label = "PhoneNumber"
                            errorColor = {this.state.errorColor}
                            error = {this.state.phoneError}
                            placeholder = "780-456-8744"
                            keyboardType = {'phone-pad'}
                            maxLength= {10}
                            onFocus={() => this.inputFocused('PhoneNumber')}
                            onChangeText = { (value) => this.setState({ phone_number: this.state.phoneid+value })}/>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
             
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dff3fd',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dff3fd',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dff3fd',
    },
    text: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold',
    },
    mainScroll: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dff3fd',
    },
    textStyle: {
        fontFamily: "raleway-regular",
        color: '#3f51b5',
        paddingBottom: 10,
        fontSize: 24,
        alignSelf: 'center',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#3f51b5',
        width: Dimensions.get('window').width - 30,
        margin: 5,
        height: 50,
        borderRadius: 5
    },
    buttonText: {
        fontFamily: "raleway-regular",
        color: '#dff3fd',
        padding: 14,
        fontSize: 16,
        alignSelf: 'center'
    },
})

export default NewSignUp
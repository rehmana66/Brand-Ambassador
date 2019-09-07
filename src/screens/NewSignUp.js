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
            //screen 3
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            userType: false,

            comfirmPasswordError: "",
            passwordError: "",
            usernameError: "",
            emailError: "",

            //screen 1
            phoneid: "+1",
            phone_number: "", 
            firstName: "",
            lastName: "",
            gender: "male",
            dateOfBirth: "",

            firstNameError: "",
            lastNameError: "",
            genderError: "",
            dateOfBirthError: "",
            phoneError: "",

            //screen 2
            city: "",
            country: "",
            region: "",
            isoCountryCode: "",
            postalCode: "",
            street: "",
            location: null,

            cityError: "",
            countryError: "",
            regionError: "",
            postalCodeError: "",
            streetError: ""
            
        }
        //this.refreshScreen = this.refreshScreen.bind(this)
    }

    componentWillMount() {
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }
    showinfo() {
        console.log(
            "index: ", this.state.index, "|",
            "email: ", this.state.email, "|",
            "username: ", this.state.username, "|",
            "password: ", this.state.password, "|",
            "confirmpass: ", this.state.confirmPassword, "|",
            "phone: ", this.state.phone_number, "|",
            "user_type:", this.state.userType, "|",
            "firstname: ", this.state.firstName, "|",
            "lastname: ", this.state.lastName, "|\n",
            "gender: ", this.state.gender, "|",
            "date of birth: ", this.state.dateOfBirth, "|",
            "phone: ", this.state.phone_number, "|",
            "city: ", this.state.city, "|",
            "country: ", this.state.country, "|",
            "region: ", this.state.region, "|",
            "street: ", this.state.street, "|",
            "postalcode: ", this.state.postalCode, "|"

        )
    }
    changeScreen() {
        index = this.state.index
        
        if(index == 0) {
            check = this.errorCheckScreen1()
            if(check == true) {
                this.setState({index: index+1}) 
            }
        }
        if(index == 2) {
            check = this.errorCheckScreen3()
            if(check == true) {
                this.setState({index: index+1}) 
            }
        }
    }
    moveScreen() {
        index = this.state.index
        this.setState({index: index+1}) 
            
        
    }

    errorCheckScreen3() {
        count = 0;
        if(this.state.email == "") {
            this.setState({emailError: "The email field can not be empty"});
            count = 1;
        } else {
            this.setState({errorColor: "", emailError: ""});
        }
        if(this.state.username == "") {
            this.setState({usernameError: "The username field can not be empty"});
            count = 1;
        } else {
            this.setState({errorColor: "", usernameError: ""});
        }
        if(this.state.password == "") {
            this.setState({passwordError: "The password field can not be empty"});
            count = 1;
        } else {
            this.setState({errorColor: "", passwordError: ""});
        }
        if(this.state.confirmPassword == "") {
            this.setState({comfirmPasswordError: "The password field can not be empty"});
            count = 1;
        } else {
            this.setState({errorColor: "", comfirmPasswordError: ""});
        }
        if(this.state.confirmPassword != this.state.password || 
            this.state.password == "" || this.state.confirmPassword == "") {
            this.setState({comfirmPasswordError: "The password confirmation does not match"});
            count = 1;
        } else {
            this.setState({errorColor: "", comfirmPasswordError: ""});
        }
        if (count == 1) {
            this.setState({errorColor: "#fc1f4a"});
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
        if(this.state.firstName == "") {
            this.setState({errorColor: "#fc1f4a", firstNameError: "Name field cannot be empty"})
            count = 1;
        } else {
            this.setState({errorColor: "", firstNameError: ""});
        }
        if(this.state.lastName == "") {
            this.setState({errorColor: "#fc1f4a", lastNameError: "Name field cannot be empty"})
            count = 1;
        } else {
            this.setState({errorColor: "", lastNameError: ""});
        }
        if(this.state.phone_number.length != 12) {
            this.setState({
                errorColor: "#fc1f4a",
                phoneError: "Enter a valid phone number"
            });
            count = 1;
        } else {
            this.setState({errorColor: "", phoneError: ""});
        }
        if(this.state.dateOfBirth == "") {
            this.setState({dateOfBirthError: "Enter your date of birth"})
            count = 1;
        } else {
            this.setState({dateOfBirthError: ""});
        }
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
    updateState(data) {
        this.setState({location: data});
    }

    render () {
        return (
            <SafeAreaView sc forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }}
            onPress ={ () => {Keyboard.dismiss()}}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={false} scrollEnabled={false} index={this.state.index}>
                    <View style={styles.mainScroll}>
                        <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'}>
                            <View style={{flex: 1, flexDirection: 'row',}}>
                                <Text ref = {'Location'} style = {styles.locationText}>Location</Text>
                                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 10}}>
                                    <View style={styles.container}>
                                        <Area location={this.updateState.bind(this)} style={{fontWeight: '700', fontSize: 10}}></Area>
                                    </View>
                                </TouchableOpacity>
                            </View>
     
                            <Reinput
                                fontFamily = "raleway-light"
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next"}
                                label = "Address"
                                value = {this.state.street}
                                errorColor = {this.state.errorColor}
                                error = {this.state.firstNameError}
                                onSubmitEditing={() => { this.refs['City'].focus() }}
                                onChangeText = { (value) => this.setState({ street: value }) }/>


                            <TouchableOpacity onPress = {this.moveScreen.bind(this)}>
                                <View style = {styles.button}>
                                    <Text style = {styles.buttonText}>Continue</Text>
                                </View>
                            </TouchableOpacity>

                        </KeyboardAwareScrollView>
                    </View>
                    <View style={styles.mainScroll}>
                        <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'}>
                            <Text ref = {'User'} style = {styles.textStyle}>User Details</Text>
                            <Reinput
                                fontFamily = "raleway-light"
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next"}
                                label = "First Name"
                                errorColor = {this.state.errorColor}
                                error = {this.state.firstNameError}
                                onSubmitEditing={() => { this.refs['LastName'].focus() }}
                                onChangeText = { (value) => this.setState({ firstName: value }) }/>
                            <Reinput
                                ref = {'LastName'}
                                fontFamily = "raleway-light"
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next"}
                                label = "Last Name"
                                errorColor = {this.state.errorColor}
                                error = {this.state.lastNameError}
                                onSubmitEditing={() => { this.refs['PhoneNumber'].focus() }}
                                onChangeText = { (value) => this.setState({ lastName: value }) }/>
                            <Reinput
                                fontFamily = "raleway-light"
                                ref = {'PhoneNumber'}
                                autoCorrect = {false}
                                underlineColorAndroid = "transparent"
                                returnKeyType = { "next"}
                                label = "Phone Number"
                                maxLength= {10}
                                errorColor = {this.state.errorColor}
                                error = {this.state.phoneError}
                                placeholder = "780-456-8744"
                                keyboardType = {'number-pad'}
                                onChangeText = { (value) => this.setState({ phone_number: this.state.phoneid+value })}/>
                            <View style={{justifyContent: 'space-evenly'}}>
                                <Text style={styles.textStyle}>Gender</Text>
                                <Picker ref ={'Gender'} itemStyle={{marginTop:-70, marginBottom: -25}} selectedValue = {this.state.gender} 
                                    onValueChange = {(value) => this.setState({ gender: value })}>
                                    <Picker.Item label = "Male" value = {"male"} />
                                    <Picker.Item label = "Female" value = {"female"} />
                                </Picker>
                                <Text style={styles.textStyle}>Date of Birth</Text>
                                <DatePicker
                                    ref = {'DateOfBirth'}
                                    style = {{width: 200, marginVertical: 20, alignSelf: 'center'}}
                                    date = {this.state.dateOfBirth}
                                    mode = "date"
                                    placeholder = "Select Date"
                                    format = "YYYY-MM-DD"
                                    minDate = "1910-01-01"
                                    maxDate = "2005-01-01"
                                    confirmBtnText = "Confirm"
                                    cancelBtnText = "Cancel"
                                    onDateChange={(date) => {this.setState({dateOfBirth: date})}}
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
                                    <Text fontFamily = "raleway-light" 
                                        style={{marginRight: 20 ,alignSelf: 'center', marginTop: -10, color: '#fc1f4a'}}>
                                        {this.state.dateOfBirthError}
                                    </Text>
                            </View>
                            <TouchableOpacity onPress = {this.changeScreen.bind(this)}>
                                <View style = {styles.button}>
                                    <Text style = {styles.buttonText}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                        </KeyboardAwareScrollView>
                    </View>

                    <View style={styles.mainScroll}>
                        <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'}>
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
                </Swiper>
             
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
    container: {
        fontFamily: "raleway-regular",
        fontSize: 12,
        minWidth: 40, 
        minHeight: 20, 
        maxHeight: 30, 
        maxWidth: 90, 
        padding: 7, 
        backgroundColor: 'white', 
        borderColor: '#dddddd', 
        borderWidth: 1, 
        borderRadius: 2, 
        marginRight: 10, 
        marginBottom: 5,
        justifyContent: 'center',
    },
    locationText: {
        flex: 2,
        fontFamily: "raleway-regular",
        color: '#3f51b5',
        paddingBottom: 10,
        fontSize: 24,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 100
    },
})

export default NewSignUp
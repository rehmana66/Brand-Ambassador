import React, { Component } from 'react';
import { View, Image,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import  Reinput  from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class EditAccount extends Component {
    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'} contentContainerStyle = { styles.mainScroll}>
                        <View style = {{alignItems: 'center', paddingTop: 10 , flex: 1}}>
                                <Image
                                style={{width: 80, height: 80}}
                                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('SignUp')}>
                                    <View style = {styles.loginButton}>
                                        <Text style = {styles.loginButtonText}>Change Profile Picture</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style = {styles.textStyle}>Public Info</Text>
                            <Reinput label = "Name"  defaultValue = "Big Boy" fontFamily = "raleway-light"/>
                            <Reinput label = "Bio"  defaultValue = "Description" fontFamily = "raleway-light"/>
                            <Reinput label = "Province/City"  defaultValue = "Location" fontFamily = "raleway-light"/>
                            <Reinput label = "Resume"  defaultValue = "Resume-Name" editable = {false} selectTextOnFocus = {false} fontFamily = "raleway-light"/>
                            <Text style = {styles.textStyle}>Private Info</Text>
                            <Reinput label = "Email"  defaultValue = "email@email.com" fontFamily = "raleway-light"/>
                            <Reinput label = "Phone Number"  defaultValue = "(123) 456-7890" fontFamily = "raleway-light"/>
                            <Reinput label = "Postal Code"  defaultValue = "A1B-2C3" fontFamily = "raleway-light"/>
                        </View>
                        <View style = {styles.bottomContainer}>
                            <TouchableOpacity>
                                <View style = {styles.loginButton}>
                                    <Text style = {styles.loginButtonText}>Upload Resume</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {styles.signUpButton}>
                                    <Text style = {styles.signUpButtonText}>Change Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }

}

export default EditAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff3fd',
    },
    mainScroll: {
        flexGrow: 1,
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30
    },
    publicInfoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 30,
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
    loginButton: {
        justifyContent: 'center',
        backgroundColor: '#dff3fd',
        alignItems: 'center',
        height: 40,
        borderRadius: 5
    },
    loginButtonText: {
        color: '#3f51b5',
        padding: 8
    },
    textStyle: {
        fontFamily: "raleway-regular",
        color: '#3f51b5',
        paddingBottom: 10,
        fontSize: 24,
    }
});
import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import  Reinput  from 'reinput';
import Modal from "react-native-modal";

class LogIn extends Component {

    state = {
        isModalVisible: false
    };

    passwordResetRequest = () => {
        Alert.alert(
          "Forgot Password",
          "Password Reset Requested",
          [
            { text: "Ok", onPress: () => this.setState({ isModalVisible: !this.state.isModalVisible })}
          ],
          { cancelable: false },
        );
    };
      
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                <Modal isVisible = {this.state.isModalVisible} style = {{paddingBottom: Dimensions.get('window').height/4 }}
                onBackdropPress = {() => this.setState({ isModalVisible: !this.state.isModalVisible })}>
                    <View style = {{ height: Dimensions.get('window').height/2 - 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dff3fd', borderRadius: 5 }}>
                        <View style = {{ width: Dimensions.get('window').width - 60, justifyContent: 'space-around'}}>
                            <Text style = {styles.forgotModalTitle}>Forgot Password</Text>
                            <Reinput label = "Email Address"  fontFamily = "raleway-light" keyboardType = {'email-address'} />
                            <TouchableOpacity onPress={this.passwordResetRequest}>
                                <View style = {styles.forgotModalButton}>
                                    <Text style = {styles.forgotModalButtonText}>Forgot Password?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style = { styles.loginContainer} >
                    <View style = {{alignSelf: 'center', paddingTop: 10}}>
                        <Image
                        style={{width: 80, height: 80}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                    <Text style = {styles.loginText}>Log In</Text>
                    <Reinput label = "Email Address"  fontFamily = "raleway-light"/>
                    <Reinput label = "Password"  fontFamily = "raleway-light" secureTextEntry = {true}/>
                    <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <View style = {styles.loginScreenButtons}>
                                <Text style = {styles.loginScreenButtonsText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dashboard')}>
                            <View style = {styles.loginScreenButtons}>
                                <Text style = {styles.loginScreenButtonsText}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#dff3fd'
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
        backgroundColor: '#3f51b5',
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
        backgroundColor: '#dff3fd',
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
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
    },

 })

export default LogIn;
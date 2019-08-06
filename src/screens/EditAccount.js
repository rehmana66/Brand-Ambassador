import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Alert, Button, Keyboard } from 'react-native';
import  Reinput  from 'reinput';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from "react-native-modal";
import { Auth } from 'aws-amplify';


class EditAccount extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: 'Big Boy Test',
            bio: 'Description',
            provCity: 'Province, City',
            resumeName: 'My-Resume.docx',
            email: 'email@email.com',
            phoneNumber: '(780)123-4567',
            postalCode: 'A1B-2C3',
            changeMade: false,
            isModalVisible: false,
            newPass: '',
            newPassConfirm: '',
            oldPassword: '',
        };
    };

    static navigationOptions = ({ navigation }) => {
        return {
          headerRight: (
            <Button
                onPress = {navigation.getParam('doneOnClick')}
                title = "Done"
                color = "#dff3fd"
            />
          ),
          headerLeft: (
            <Button
              onPress = {navigation.getParam('cancelOnClick')}
              title = "Cancel"
              color = "#dff3fd"
            />
          ),
        };
    }
    componentDidMount() {
        this.props.navigation.setParams({ doneOnClick: this.doneOnClick });
        this.props.navigation.setParams({ cancelOnClick: this.cancelOnClick });
    };

    changePassword = async () => {
        const { oldPass, newPass, newPassConfirm } = this.state
        if (oldPass.length < 8 || newPass.length < 8 || newPassConfirm < 8){
            console.log("Invalid Password(s) length")
        }
        else if (newPass === newPassConfirm){
            Auth.currentAuthenticatedUser()
                .then(user => {
                return Auth.changePassword(user, oldPass, newPass);
                })
                .then(data => console.log(data))
                .catch(err => console.log(err));
                this.passwordChangeRequest();
        }
    };

    doneOnClick = () => {
        Keyboard.dismiss();
        if(this.state.changeMade){
            Alert.alert(
                'Submit Changes?',
                'Are you sure you want to submit your changes?',
                [
                    {
                    text: 'Submit',
                    onPress: () => this.props.navigation.navigate('Account')
                    //Update user info
                    },
                    {
                    text: 'Go Back',
                    },
                ],
                {cancelable: false},
            )
        }
        else{
            this.props.navigation.navigate('Account');
        }
    };

    cancelOnClick = () => {
        Keyboard.dismiss();
        if(this.state.changeMade){
            Alert.alert(
                'Discard Changes?',
                'Are you sure you want to discard your changes?',
                [
                    {
                    text: 'Discard',
                    onPress: () => this.props.navigation.navigate('Account')
                    },
                    {
                    text: 'Stay',
                    },
                ],
                {cancelable: false},
            )
        }
        else{
            this.props.navigation.navigate('Account');
        }
    };

    changeMade = () => {
        this.setState({ changeMade: true })
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    passwordChangeRequest = () => {
        Alert.alert(
          "Change Password",
          "Password Change Completed",
          [
            { text: "Ok", onPress: () => this.setState({ isModalVisible: !this.state.isModalVisible })}
          ],
          { cancelable: false },
        );
    };

    render() {
        return (
            <SafeAreaView forceInset = {{ bottom: 'always' }} style = {{ flex: 1, backgroundColor: '#dff3fd' }} onPress ={ () => {
                Keyboard.dismiss() }}>
                <KeyboardAwareScrollView ref = 'scrollView' keyboardShouldPersistTaps = {'always'} contentContainerStyle = { styles.mainScroll}>
                    <Modal isVisible = {this.state.isModalVisible} style = {{paddingBottom: Dimensions.get('window').height/3 }}
                    onBackdropPress = {() => this.setState({ isModalVisible: !this.state.isModalVisible })}>
                        <View style = {{ height: Dimensions.get('window').height/2 + 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dff3fd', borderRadius: 5 }}>
                            <View style = {{ width: Dimensions.get('window').width - 60, justifyContent: 'space-around'}}>
                                <Text style = {styles.changePassModalTitle}>Change Password</Text>
                                <Reinput label = "Old Password"  fontFamily = "raleway-light" secureTextEntry = {true} onChangeText = { (value) => this.setState({ oldPass: value }) }/>
                                <Reinput label = "New Password"  fontFamily = "raleway-light" secureTextEntry = {true} onChangeText = { (value) => this.setState({ newPass: value }) }/>
                                <Reinput label = "Confirm New Password"  fontFamily = "raleway-light" secureTextEntry = {true} onChangeText = { (value) => this.setState({ newPassConfirm: value }) }/>
                                <TouchableOpacity onPress={this.changePassword}>
                                    <View style = {styles.changePassModalButton}>
                                        <Text style = {styles.changePassModalButtonText}>Change Password</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
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
                        <Reinput label = "Name"  defaultValue = {this.state.name} onChangeText = {this.changeMade} fontFamily = "raleway-light"/>
                        <Reinput label = "Bio"  defaultValue = {this.state.bio} onChangeText = {this.changeMade} fontFamily = "raleway-light"/>
                        <Reinput label = "Province/City"  defaultValue = {this.state.provCity} onChangeText = {this.changeMade} fontFamily = "raleway-light"/>
                        <Reinput label = "Resume"  defaultValue = {this.state.resumeName} editable = {false} selectTextOnFocus = {false} fontFamily = "raleway-light"/>
                        <Text style = {styles.textStyle}>Private Info</Text>
                        <Reinput label = "Email"  defaultValue = {this.state.email} onChangeText = {this.changeMade} fontFamily = "raleway-light"/>
                        <Reinput label = "Phone Number"  defaultValue = {this.state.phoneNumber} onChangeText = {this.changeMade} fontFamily = "raleway-light"/>
                        <Reinput label = "Postal Code"  defaultValue = {this.state.postalCode} onChangeText = {this.changeMade} fontFamily = "raleway-light"/>
                    </View>
                    <View style = {styles.bottomContainer}>
                        <TouchableOpacity>
                            <View style = {styles.loginButton}>
                                <Text style = {styles.loginButtonText}>Upload Resume</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {this.toggleModal}>
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
    },
    changePassModalTitle: {
        fontFamily: "raleway-regular",
        paddingBottom: 20,
        fontSize: 26,
        color: '#3f51b5',
        alignSelf: 'center'
    },
    changePassModalButton: {
        backgroundColor: '#3f51b5',
        borderRadius: 10,
        width: Dimensions.get('window').width - 60,
        alignSelf: 'center',
        margin: 5,
        height: 50
    },
    changePassModalButtonText: {
        fontFamily: "raleway-regular",
        color: '#dff3fd',
        padding: 14,
        fontSize: 16,
        alignSelf: 'center'
    },
});
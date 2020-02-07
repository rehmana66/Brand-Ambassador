import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, ScrollView,
    FlatList, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import Reinput from 'reinput';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CachedImage from '../../components/CachedImage';
import { ListItem, SearchBar, Divider, Input, Text, Button, ButtonGroup } from 'react-native-elements';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-navigation';
const { height, width } = Dimensions.get('window')

const GETUSER = `
    query listUser($email: String!) {
    listUsers(filter: {email: {contains: $email}})
    {
        items {
            id fullName phone_number user_type
            email dateOfBirth gender
            location {
              id city country isoCountryCode
              postalCode region street
            }
        }
    } 
}`;

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class Settings extends Component {


    constructor() {
        super();
        this.selectCountry = this.selectCountry.bind(this);
        this.state = {
            pickerData: null,
            isLoaded: false,
            user: null,
            count: 0,
            cca2: '',
            placeholder: '',
            initialCountry: 'ca',
            initialValue: '',
            translation: 'ca',
            phoneNumber: '',
            isValidPhoneNumber: false,
            countryCode: '',
            isoCode: '',
            selectedIndex: 0,
            name: require("../../../assets/profile/account.png"),
            gender: require("../../../assets/profile/gender.png"),
            date: "",
            fullName: "",
            gen: "",
            dob: "",
            disabled: 'flex',
            buttonText: "Edit",
            editColor: 'rgba(52, 52, 52, 0.1)',
            editCount: 0,
        };
        this.updateIndex = this.updateIndex.bind(this)
    }
    selectCountry(country) {
        this.phone.selectCountry(country.iso2);
    }
    handlesOnInputChange = (value) => {
        console.log("num changed: ",value)
        this.setState({
            cca2: value,
            count: 1,
            isValidPhoneNumber: this.phone.isValidNumber(),
            countryCode: this.phone.getCountryCode(),
            isoCode: this.phone.getISOCode(),
        });
    }


    setPhoneRef = (ref) => (this.phone = ref);

    componentDidMount() {
        Auth.currentAuthenticatedUser().then((data) => {
            
            if (data) {
                const getDetails = API.graphql(graphqlOperation(GETUSER, {email: data.attributes.email})).then(
                    (info) => this.setState({user: info.data.listUsers.items[0], isLoaded: true,
                        initialValue: info.data.listUsers.items[0].phone_number, isValidPhoneNumber: true,
                        gen: (info.data.listUsers.items[0].gender == null) ? "" : info.data.listUsers.items[0].gender,
                        fullName: (info.data.listUsers.items[0].fullName != null) ? info.data.listUsers.items[0].fullName : "",
                        dob: (info.data.listUsers.items[0].dateOfBirth != null) ? info.data.listUsers.items[0].dateOfBirth : "Birth date",
                        selectedIndex: (info.data.listUsers.items[0].gender == 'Male' ? 0 : info.data.listUsers.items[0].gender == 'Female' ? 1 : 2)
                        })
                );
            }}).catch(err => console.log(err))
    }

    handlesOnSelectCountry = (cca2) => {
        this.phone.selectCountry(cca2.toLowerCase());
        this.setState({ cca2: cca2 });
    };

    inputFocused (refName) {
        setTimeout(() => {
            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(findNodeHandle(this.refs[refName]),100,true);
        }, 50);
    }
    updateIndex (index) {
        if(index == 0) {
            this.setState({gen: 'Male'})
        } else if (index == 1) {
            this.setState({gen: 'Female'})
        } else {
            this.setState({gen: 'Other'})
        }
        this.setState({selectedIndex: index})
    }

    handleDateChange(date) {
        this.setState({date: date, dob: new Date(date)});
        
        console.log(this.state.dob)
    }

    updateAccount(num) {
        if (num == 0) {
            this.setState({buttonText: 'Save', editColor: 'rgba(52, 52, 52, 0)', disabled: 'none'});
            return;
        } else {
            console.log("hello")
        }
    }

    render() {
        
        const {isLoaded, user, count, name, date, gender,
            cca2, placeholder, initialCountry, initialValue,
            isValidPhoneNumber, countryCode, isoCode, selectedIndex, 
            dob, fullName, gen, buttonText, disabled
            } = this.state;

        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            console.log(user)
            return (
                
                <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                        <View style={{borderColor: '#EEEEEE', borderWidth: 1, borderRadius : 1, backgroundColor: '#F8F8F8'}}>
                            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '500', marginTop: 5, marginBottom: 5}}>Personal Details</Text>
                        </View>
                        <View style={{marginRight: 25}}>
                            <View style={{marginBottom: -5}}>
                                <Reinput
                                    fontFamily = "raleway-light"
                                    autoCorrect = {false}
                                    underlineColorAndroid = "transparent"
                                    returnKeyType = { "next"}
                                    label = "Full Name"
                                    value = {fullName}
                                    underlineColor='black'
                                    onSubmitEditing={() => { this.refs['phone'].focus() }}
                                    icon={<Image source = {this.state.name} style = {styles.imgStyle}/>}
                                    onChangeText={(name) => this.setState({fullName: name})}
                                    style={{marginTop: 5}}
                                    activeColor='black'
                                    marginTop= {5}
                                    fontSize={18}
                                    error=""
                                />
                            </View>
                            <PhoneInput
                                ref={this.setPhoneRef}
                                style={styles.phoneInput}
                                onPressFlag={this.onPressFlag}
                                initialCountry={initialCountry.toLowerCase()}
                                autoFormat
                                textProps={{ placeholder, keyboardType: 'phone-pad', textContentType: 'telephoneNumber',
                                    color:  (initialValue && count==0) ? 'green' : (!isValidPhoneNumber) ? 'red' : 'green',
                                    fontSize: 18}}
                                value={initialValue}
                                onChangePhoneNumber={this.handlesOnInputChange}
                                style={{marginLeft: 10}}
                                textStyle={{fontFamily: "raleway-light"}}
                                onSelectCountry={(cca2) => this.handlesOnSelectCountry(cca2)}>
                                {cca2}
                            </PhoneInput>
                            <Divider style={{height: 1, marginTop: 5, backgroundColor: 'black', marginLeft: 50}} />
                            
                            <DatePicker
                                style={{width: width-25, marginTop: 5}}
                                date={date}
                                mode="date"
                                placeholder={dob}
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={dateStyles}
                                onDateChange={(date) => this.handleDateChange(date)}
                            />
                            <View style={{flexDirection: 'row', marginTop: 30}}>
                                <Image source = {this.state.gender} style = {{height: 30, width: 30, borderRadius: 15, marginTop: 20, marginLeft: 5}}/>
                                <ButtonGroup
                                    onPress={this.updateIndex}
                                    selectedIndex={selectedIndex}
                                    buttons={['Male', 'Female', 'Other']}
                                    containerStyle={{height: 30, justifyContent: 'center', width: width-70, marginTop: 25,}}
                            />
                            </View>
                            <View style={{ marginTop: 50, marginLeft: 25, flex: 1, flexDirection: 'row'  }}>
                                <Button title='Cancel' raised containerStyle={{flex: 1, alignSelf: 'stretch', marginRight: 5}} buttonStyle={{height: 50}}
                                onPress={()=> this.props.navigation.navigate('Account')}/>
                                <Button title={buttonText} raised containerStyle={{flex: 1, alignSelf: 'stretch', marginLeft: 5}} buttonStyle={{height: 50}}
                                onPress={()=> {(buttonText =="Edit") ? this.updateAccount(0) : this.updateAccount(1)}}/>
                            </View>
                        </View>
                        <View style={{position: 'absolute', backgroundColor: this.state.editColor, left: 0, right: 0, height: height/3.2, marginTop: 29,
                            display: disabled}}>
                        </View>
                        <Text style={{marginTop: 70}}>name: {fullName}</Text>
                        <Text>phone: {(isValidPhoneNumber) ? "true" : "false"}</Text>
                        <Text>dob: {dob}</Text>
                        <Text>gender: {gen}</Text>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            );
        }
    }
}
    
export default Settings;

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: 'white',
    },
    phoneInput: {
        height: 50,
        alignContent: 'stretch',
        backgroundColor: '#FFFFFF',
    },
    imgStyle: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
});

const dateStyles = {
    dateIcon: {
        position: 'absolute',
        left: 4,
        top: 20,
    },
    dateInput: {
        top: 15,
        marginLeft: 50,
        borderBottomColor: 'black',
        borderColor: 'white',
        fontSize: 30
    },
    dateText: {
        fontSize: 18,
        alignSelf: 'flex-start',
        fontFamily: "raleway-light"
    },
    placeholderText: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: 'grey',
        fontFamily: "raleway-light"
    }
}
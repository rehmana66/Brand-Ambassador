import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, ScrollView,
    FlatList, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PhoneInput from 'react-native-phone-input';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CachedImage from '../../components/CachedImage';
import { ListItem, SearchBar, Divider, Input, Text, Button, ButtonGroup } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-navigation';

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

            icon: require("../../../assets/profile/profile.jpg"),
        };
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

        //num = this.phoneFormat(value);
        
    }


    setPhoneRef = (ref) => (this.phone = ref);


    componentDidMount() {
        Auth.currentAuthenticatedUser().then((data) => {
            
            if (data) {
                const getDetails = API.graphql(graphqlOperation(GETUSER, {email: data.attributes.email})).then(
                    (info) => this.setState({user: info.data.listUsers.items[0], isLoaded: true,
                        initialValue: info.data.listUsers.items[0].phone_number, isValidPhoneNumber: true
                        })
                );
            }}).catch(err => console.log(err))
    }

    handlesOnSelectCountry = (cca2) => {
        this.phone.selectCountry(cca2.toLowerCase());
        this.setState({ cca2: cca2 });
    };



    render() {
        
        const {isLoaded, user, count,
            cca2,
            placeholder,
            initialCountry,
            initialValue,
            isValidPhoneNumber,
            countryCode,
            isoCode, 
            } = this.state
            const valueProps = !initialValue ? {} : { value: initialValue };
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            console.log(user)
            console.log(isValidPhoneNumber, countryCode, isoCode)
            return (
                
                <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={{borderColor: '#EEEEEE', borderWidth: 1, borderRadius : 1, backgroundColor: '#F8F8F8'}}>
                            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '500', marginTop: 5, marginBottom: 5}}>Personal Details</Text>
                        </View>
                        <View style={styles.container}>
                            <View style={{flex: 1,  justifyContent: 'center'}}>
                                <View style={{borderColor: '#EEEEEE', borderWidth: 1, borderRadius : 1}}>
                                    <Input style={{}} disabledInputStyle
                                        placeholder='INPUT WITH CUSTOM ICON'
                                        leftIcon={<CachedImage style={{height: 25, width: 25}} source = {require("../../../assets/profile/account.png")}/>}
                                        leftIconContainerStyle={{}}
                                        />
                                        
                               

                                </View>
                            </View>
                            <View style={{flex: 1, backgroundColor: 'green'}}>
                                <PhoneInput
                                        ref={this.setPhoneRef}
                                        style={styles.phoneInput}
                                        onPressFlag={this.onPressFlag}
                                        initialCountry={initialCountry.toLowerCase()}
                                        autoFormat
                                        textProps={{ placeholder, keyboardType: 'phone-pad', textContentType: 'telephoneNumber',
                                            color:  (initialValue && count==0) ? 'green' : (!isValidPhoneNumber) ? 'red' : 'green'}}
                                        value={initialValue}
                                        onChangePhoneNumber={this.handlesOnInputChange}
                                        onSelectCountry={(cca2) => this.handlesOnSelectCountry(cca2)}>
                                        {cca2}
                                    </PhoneInput>
                                <Text>
                                Phone number is valid:{' '}
                                {!isValidPhoneNumber ? 'NOT A VALID NUMBER' : 'VALID!'}
                                </Text>
                                <Text>country code: {countryCode || ''}</Text>
                                <Text>iso code: {isoCode || ''}</Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            );
        }
    }
}
    
export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    phoneInput: {
        height: 50,
        alignContent: 'stretch',
        backgroundColor: '#FFFFFF',
        marginLeft: 25
    }
});
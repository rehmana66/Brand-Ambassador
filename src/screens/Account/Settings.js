import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, ScrollView,
    FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PhoneInput from 'react-native-phone-input';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CachedImage from '../../components/CachedImage';
import { ListItem, SearchBar, Divider, Header, Text, Button, ButtonGroup } from 'react-native-elements';
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
            jobs { nextToken }
            apply { nextToken }
        }
    } 
}`;

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
            //console.log(user)
            console.log(isValidPhoneNumber, countryCode, isoCode)
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.phoneForm}>
    
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
                        <View>
                            <Text>
                            Phone number is valid:{' '}
                            {!isValidPhoneNumber ? 'NOT A VALID NUMBER' : 'VALID!'}
                            </Text>
                            <Text>country code: {countryCode || ''}</Text>
                            <Text>iso code: {isoCode || ''}</Text>
                        </View>
                    </View>
                </SafeAreaView>
                
            );
        }
    }
}
    
export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 25,
        marginRight: 25,
        justifyContent: 'center'
    },
    phoneInput: {
        height: 50,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 1,
    }
});
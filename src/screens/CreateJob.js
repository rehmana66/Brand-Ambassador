import React, { Component, } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CachedImage from '../components/CachedImage';
import { ListItem, SearchBar, Divider, CheckBox, Button  } from 'react-native-elements';
import TextInput from "react-native-improved-text-input";
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import MapView from 'react-native-maps'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as queries from '../graphql/queries';
import Modal from 'react-native-modal';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
const { height, width } = Dimensions.get('window')



class CreateJob extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            price1: '',
            price2: '',
            checked: false,
            companyName: '',
            title: '',
            desc: '',
            msic: '',
            location: 'Location',
            latitude: null,
            longitude: null,
            location: null,
            locationText: "Location",
            errorMessage: null,
            locationResult: null,
            isLocationModalVisible: false,
            counter: 0,
            timeArray: [],
            date: null,
        }
    }

    componentDidMount() {
        
        this._getLocationAsync();
    }

    static navigationOptions = ({ navigation }) => {
        
        if(USERID.user_type == true) {
            return {
                headerRight: ( 
                    <TouchableOpacity onPress={()=> navigation.navigate('CreateJob')}>
                        <Text style={{marginRight: 20, color:"white", fontWeight: '300', fontSize: 20}}>Save</Text>
                    </TouchableOpacity>
                )
            };
        }
    }; 

    priceView = () => {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{marginTop: 20, fontSize: 25, marginRight: 10, fontWeight: '300'}}>$</Text>
                <View style={{flex: 1, marginTop: 20, borderColor: '#c5c7c4',
                borderWidth: 1, borderRadius: 10, height:50, justifyContent: 'center', marginRight: 10}}>
                    <TextInput placeholder="Price"
                        inputContainerStyle={{ borderBottomWidth: 0}}
                        placeholderTextColor= '#808080'
                        maxLength={50}
                        value={this.state.price1}
                        onChangeText={(price) => {this.setState({price1: price}); console.log(this.state.price)}}
                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17}}
                        style={{flex: 1, fontSize: 17, fontWeight: '300', marginLeft: 10, }}
                        keyboardType="number-pad"
                    />
                </View>
                <Text style={{marginTop: 20, fontSize: 25, marginRight: 10, fontWeight: '300'}}>-</Text>
                <View style={{flex: 1, marginTop: 20, borderColor: '#c5c7c4',
                    borderWidth: 1, borderRadius: 10, height:50, justifyContent: 'center', backgroundColor: (this.state.checked) ? 'white': '#c5c7c4'}}>
                    <TextInput placeholder="Price"
                        inputContainerStyle={{ borderBottomWidth: 0}}
                        placeholderTextColor= '#808080'
                        maxLength={50}
                        value={this.state.price2}
                        onChangeText={(price) => {this.setState({price2: price}); console.log(this.state.price)}}
                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17}}
                        style={{flex: 1, fontSize: 17, fontWeight: '300', marginLeft: 10, }}
                        keyboardType="number-pad"
                        editable={this.state.checked} selectTextOnFocus={this.state.checked}
                    />
                </View>
            </View>
        );
    }

    locationView = () => {
        return (
            <View style={{flex: 1, height: height - 300, width: width - 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}> 
                <MapView style={{flex: 1}}
                >

                </MapView>
            </View>
        )
    }

    openModal = () => {
        this.setState({isLocationModalVisible: true});
    }

    _getLocationAsync = async () => {
        try {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            
            let location = await Location.getCurrentPositionAsync({});
            let geocode = await Location.reverseGeocodeAsync(location.coords).then( 

            this.setState({ 
                location,
                locationResult: geocode,
                errorMessage: null,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                isLoaded: true
            }))
            
        
            } catch(error) {
                console.log(error)
            }
    }
  
    _handleAddTime() {
        let newly_added_data = { date: null, time: 'Select date' };
    
        this.setState({
            timeArray: [...this.state.timeArray, newly_added_data]
        });
    }

    _handleRemoveTime() {
        const newTimeArray = this.state.timeArray.slice();
        newTimeArray.pop()
        this.setState({timeArray: newTimeArray})
        console.log(this.state.timeArray)
    }
    handleDateChange(date, index) {
        const newTimeArray = this.state.timeArray.slice();
        newTimeArray[index] = {date: date, time: new Date(date).toLocaleString()};
        this.setState({timeArray: newTimeArray})
        console.log(this.state.timeArray)
    }

    render() {
        const { isLoaded, latitude, longitude, locationResult, timeArray, date } = this.state;
        let added_text = timeArray.map( (data, index) => {
            return (
                <View key={index} style={{marginTop: 5, flexDirection: 'row', marginBottom: 50}}>
                    <View style={{flex: 2}}>
                        <DatePicker
                            style={{width: 200, marginTop: 5, marginLeft: -50}}
                            date={data.date}
                            mode="date"
                            placeholder={data.time}
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={dateStyles}
                            onDateChange={(date) => this.handleDateChange(date, index)}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: -20, marginLeft: -10}}>
                        <Text style={{fontSize: 20, fontFamily: "raleway-light"}}>To</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <DatePicker
                            showIcon={false}
                            style={{width: 200, marginTop: 5, marginLeft: -50}}
                            date={data.date}
                            mode="date"
                            placeholder={data.time}
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={dateStyles}
                            onDateChange={(date) => this.handleDateChange(date, index)}
                        />
                    </View>
                    
            </View>
            )
        });
        if (isLoaded == false) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;               
        } else {
            return ( 
                <SafeAreaView style={styles.container}>
                    
                    <ScrollView>
                        
                        <KeyboardAwareScrollView style={{marginLeft: 20, marginRight: 20}}>
                            <ListItem style={{marginTop: 0, marginLeft: -20}}
                                leftIcon={<CachedImage source = {require("../../assets/profile/profile.jpg")} style = {{height: 50, width: 50}}/>}
                                title={USERID.fullName}
                                subtitle={"Listing on Marketplace"}
                                subtitleStyle={{fontWeight: '300', fontSize: 12}}
                                titleStyle={{fontWeight: '300', fontSize: 20}}
                            />
                            <View style={{flex: 2, marginTop: 0}}>
                                <TouchableOpacity style={styles.addPhotoStyles}>
                                        <CachedImage source = {require("../../assets/photo.png")} style = {{height: 25, width: 25, marginRight: 10}}/>
                                        <Text style={{fontWeight: '300'}}>Add Photos</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{marginTop: 5, fontWeight: '200', fontSize: 12}}>Choose your listing's main photo</Text>
                            <View style={{flex:5, marginBottom: 20}}>
                                <View style={styles.textInputStyle}>
                                    <TextInput placeholder="Company Name"
                                        inputContainerStyle={{ borderBottomWidth: 0}}
                                        placeholderTextColor= '#808080'
                                        maxLength={50}
                                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17}}
                                        style={{fontSize: 17, fontWeight: '300'}}
                                    />
                                </View>
                                {this.priceView()}
                                <CheckBox title='Price Range' checked={this.state.checked} 
                                onPress={() => this.setState({checked: !this.state.checked})}
                                containerStyle={styles.checkBoxContainer}
                                textStyle={{fontSize: 10}}/>
                                <View style={styles.textInputStyle}>
                                    <TextInput placeholder="Title"
                                        inputContainerStyle={{ borderBottomWidth: 0}}
                                        placeholderTextColor= '#808080'
                                        maxLength={50}
                                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17}}
                                        style={{fontSize: 17, fontWeight: '300'}}
                                    />
                                </View>
                                <View style={styles.descInputStyle}>
                                    <TextInput placeholder="Description"
                                        inputContainerStyle={{ borderBottomWidth: 0}}
                                        placeholderTextColor= '#808080'
                                        maxLength={200}
                                        multiline
                                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17, marginTop: 5}}
                                        style={{fontSize: 17, fontWeight: '300', marginRight: 5}}
                                    />
                                </View>
                                <View style={styles.textInputStyle}>
                                    <TextInput placeholder="Miscellaneous Details"
                                        inputContainerStyle={{ borderBottomWidth: 0}}
                                        placeholderTextColor= '#808080'
                                        maxLength={50}
                                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17}}
                                        style={{fontSize: 17, fontWeight: '300'}}
                                    />
                                </View>
                                <Text style={{marginTop: 5, fontWeight: '200', fontSize: 12}}>Optional</Text>
                                <TouchableHighlight onPress={this.openModal} style={styles.textInputStyle}>
                                    <Text style={{fontWeight: '200', fontSize: 17, marginLeft: 10}}>{this.state.locationText}</Text>
                                </TouchableHighlight>
                                <Modal 
                                    onModalHide={()=> {this.setState({locationText: "Hello"})}}
                                    isVisible={this.state.isLocationModalVisible} 
                                    onBackdropPress = {() => this.setState({ isLocationModalVisible: false })}
                                    style = {{alignSelf: 'center'}}>
                                        <View style={{ height: height - 300, width: width - 50, backgroundColor: global.iOSBlue, alignItems: 'center', justifyContent: 'center',}}> 
                                            <View style={{flex: 1}}>
                                                <View style={styles.locationTextInput}>
                                                    <TextInput placeholder="Choose Location"
                                                        inputContainerStyle={{ borderBottomWidth: 0}}
                                                        placeholderTextColor= '#808080'
                                                        maxLength={100}
                                                        placeholderStyle={{fontWeight: '300', marginLeft: 10, fontSize: 17}}
                                                        style={{flex: 1, fontSize: 17, fontWeight: '300'}}
                                                    />
                                                </View>
                                            </View>
                                            <MapView style={styles.map}
                                            showsUserLocation
                                            initialRegion={{latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}}>
                                            </MapView>
                                            <View style={{backgroundColor: global.iOSBlue}}>
                                                <Button title="Confirm" buttonStyle={{backgroundColor: global.iOSBlue}} containerStyle={{width: width-50}}></Button>
                                            </View>
                                        </View>
                                </Modal>
                                <Text>{latitude} {longitude}</Text>
                                <TouchableHighlight style={{marginTop: 20}} onPress={this._handleAddTime.bind(this)}>
                                        <Text>Add</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{marginTop: 20}} onPress={this._handleRemoveTime.bind(this)}>
                                        <Text>Remove</Text>
                                </TouchableHighlight>
                            {added_text}
                            </View>
                    </KeyboardAwareScrollView>
                </ScrollView>
            </SafeAreaView>
            );
        }
    }
}


export default CreateJob;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 5.5,
        width: width - 50,
    },
    addPhotoStyles: {
        flex: 1, 
        borderColor: '#c5c7c4', 
        borderWidth: 1,  
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        height: 200
    },
    checkBoxContainer: {
        alignContent: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(52, 52, 52, 0)', 
        borderWidth: 0, 
        marginLeft: 15, 
        marginTop: -6
    },
    textInputStyle: {
        flex: 1, 
        marginTop: 20, 
        borderColor: '#c5c7c4', 
        borderWidth: 1, 
        borderRadius: 10, 
        height:50, 
        justifyContent: 'center'
    },
    locationTextInput: {
        marginTop: 20, 
        borderColor: '#c5c7c4', 
        borderWidth: 1, 
        borderRadius: 10, 
        height:50, 
        justifyContent: 'center',
        width: width - 70,
        backgroundColor: 'white'
    },
    descInputStyle: {
        flex: 1, 
        marginTop: 20, 
        borderColor: '#c5c7c4', 
        borderWidth: 1, 
        borderRadius: 10, 
        height:130, 
        justifyContent: 'flex-start'
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
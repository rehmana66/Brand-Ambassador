import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    Button,
    ActivityIndicator,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CachedImage from '../components/CachedImage';
import { ListItem, SearchBar, Divider, CheckBox  } from 'react-native-elements';
import TextInput from "react-native-improved-text-input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
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
            location: 'Location'
        }
    }

    componentDidMount() {
        this.setState({isLoaded: true})
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

    render() {
        const { isLoaded } = this.state;
        
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
                                <View style={styles.textInputStyle}>
                                    <Text style={{fontWeight: '200', fontSize: 17, marginLeft: 10}}>{this.state.location}</Text>
                                </View>
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
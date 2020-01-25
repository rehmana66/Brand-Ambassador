import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, ScrollView,
    FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CachedImage from '../../components/CachedImage';
import { ListItem, SearchBar, Divider, Header, Text } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';


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

const AccountList = [
    {
        name: 'Account & Settings',
        icon: require("../../../assets/profile/account.png"),
    },
    {
        name: 'Upload Resume',
        icon: require("../../../assets/profile/resume.png"),
    },
    {
        name: 'Reviews',
        icon: require("../../../assets/profile/reviews.png"),
    },
    {
        name: 'Feedback & Support',
        icon: require("../../../assets/profile/feedback.png"),
    },
    {
        name: 'About Brand Ambassadors',
        icon: require("../../../assets/profile/about.png"),
    },
    {
        name: 'Logout',
        icon: require("../../../assets/profile/logout.png"),
    }
]

class Account extends Component {

    state = {
        image: require("../../../assets/profile/profile.jpg"),
        user: null,
        isLoaded: false
    };
    
    pickImage = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL).catch(err=> console.log(err));
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
            else {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                }).catch(err=> console.log(err));
                console.log(result.cancelled)
                if(!result.cancelled) {
                    this.setState({image: result.uri})
                }
            };
        };
    };

    logout = async () => {
        try {
            await Auth.signOut()
            this.props.navigation.navigate('Initializing')
        } catch (err) {
            console.log('error signing out...: ', err)
        }
    };

    componentDidMount() {
        Auth.currentAuthenticatedUser().then((data) => {
            if (data) {
                const getDetails = API.graphql(graphqlOperation(GETUSER, {email: data.attributes.email})).then(
                    (info) => this.setState({user: info.data.listUsers.items[0], isLoaded: true})
                );
            }}).catch(err => console.log(err))
    };

    accountProcess(value) {
        console.log(value)
        if (value == "Logout") {
            this.logout();
        }
    };
    
    renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          leftIcon={<CachedImage source = {item.icon} style = {{height: 40, width: 40}}/>}
          onPress={() => this.accountProcess(item.name)}
          chevron
        />
    );

    renderSeperator = () => {
        return (
            <Divider style={{height: 1, backgroundColor: '#c5c7c4', marginLeft: 20, marginRight: 20 }} />
        );
    };

    render() {
        let { image, user, isLoaded } = this.state;
        
        //console.log(user)
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            let phone = user.phone_number.slice(0, 2) + " (" + user.phone_number.slice(2, 5) + ")" + " " +
                user.phone_number.slice(5, 8) + "-" + user.phone_number.slice(8)
            return (
                <View style={styles.container}>
                    <View style = {styles.profileContainer}>
                        
                        <View style = {{flex: 1, marginLeft: 10}}>
                            <TouchableOpacity style = {styles.imageContainer} onPress = {this.pickImage}>
                                {image &&
                                <Image source = {this.state.image} style = {styles.imgStyle}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 4}}>
                            <View style={{marginTop: 5, marginLeft: 10, flexDirection: 'column'}}>
                                <Text h4 style={{fontWeight: '500',}} >{USERID.fullName}</Text>
                                <Text h5 style={{color: 'grey'}} >{phone}</Text>
                            </View>
                            <View style={{marginTop: 5, marginLeft: 10, flexDirection: 'row'}}>
                                <StarRating disabled={true} maxStars={5} rating={4} starSize={10}></StarRating>
                                <Text style={{color: 'grey', fontSize: 10, marginLeft: 5}}>400/500 ratings</Text>
                            </View>
                        </View>
                       
                    </View>
                    <View style={{flex: 7}}>

                    <Divider style={{height: 1, marginTop: 20, backgroundColor: '#c5c7c4', marginLeft: 20, marginRight: 20 }} />
                    <ScrollView style={{marginTop: 10}} scrollEventThrottle={16}>
                        <FlatList
                            data={AccountList}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() => (<View></View>)}
                            ItemSeparatorComponent={this.renderSeperator}
                        />
                        <Divider style={{height: 1, backgroundColor: '#c5c7c4', marginLeft: 20, marginRight: 20 }} />
                    </ScrollView>
                    
                    </View>
                </View>
            );
        }
    }

}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        alignSelf: 'center',
        height: 81,
        width: 81,
        borderRadius: 40,
    },
    imgStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingTop: 10, 
        
    },

});
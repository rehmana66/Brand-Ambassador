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

const Brand = 
    "A brand ambassador (sometimes also called a corporate ambassador) is a person who is hired by an organization or company to represent a brand in a positive light and by doing so help to increase brand awareness and sales. The brand ambassador is meant to embody the corporate identity in appearance, demeanor, values and ethics.[1] The key element of brand ambassadors is their ability to use promotional strategies that will strengthen the customer-product-service relationship and influence a large audience to buy and consume more. " +
    "\n\nPredominantly, a brand ambassador is known as a positive spokesperson, an opinion leader or a community influencer, appointed as an internal or external agent to boost product or service sales and create brand awareness. Today, brand ambassador as a term has expanded beyond celebrity branding to self-branding or personal brand management. Professional figures such as good-will and non-profit ambassadors, promotional models, testimonials and brand advocates have formed as an extension of the same concept, taking into account the requirements of every company." +
    "\n\nThe term brand ambassador loosely refers to a commodity which covers all types of event staff, varying between trade show hosts, in store promotional members and street teams.[2] According to Brain, the job of a brand ambassador was undertaken typically by a celebrity or someone of a well-known presence, who was often paid considerably for their time and effort. Nowadays however, a brand ambassador can be anyone who has knowledge or can identify certain needs a brand is seeking." +
    "\n\nThe fashion industry however, solely rely on celebrity clientele in order to remain brand ambassadors. Furthermore, brand ambassadors are considered to be the key salesperson for a product or service on offer. They must remain well informed when it comes to the brand they are representing, due to their nature of being the go-to person when questions arise from consumers.[4] The brand ambassador's job is to drive results through communication tools either publicly, such as social media, or privately including emails, messaging and further one-to-one channels."




class About extends Component {

    state = {
        isLoaded: false
    };
    componentDidMount() {
        this.setState({isLoaded: true})
    }

    render() {
        const {isLoaded } = this.state
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView scrollEventThrottle={16}>
                    <View style={{flex: 1, marginTop: 25, marginBottom: 10}}>
                        <Text h3 style={{fontWeight: '300', textAlign: 'center'}}>Brand Ambassadors</Text>
                    </View>
                    <Divider style={{height: 1, backgroundColor: '#c5c7c4', marginLeft: 25, marginRight: 25}} />
                    
                    <View style={{flex:9, marginLeft: 25, marginRight: 25, marginTop: 25, marginBottom: 40}}>
                        <Text style={{fontWeight: '300', }}>
                            {Brand}
                        </Text>
                    </View>
                    </ScrollView>
                </View>
            );
        }
    }
}
    
export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
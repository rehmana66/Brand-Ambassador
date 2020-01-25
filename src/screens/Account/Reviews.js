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

class Reviews extends Component {

    state = {
        isLoaded: false
    };
    render() {
        const {isLoaded } = this.state
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            return <View></View>
        }
    }
}
    
export default Reviews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
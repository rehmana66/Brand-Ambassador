import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, ScrollView,
    FlatList, Alert, SafeAreaView
} from 'react-native';
import TextArea from "@freakycoder/react-native-text-area";
import * as ImagePicker from 'expo-image-picker'; 
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CachedImage from '../../components/CachedImage';
import { ListItem, SearchBar, Divider, Header, Text, Button } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';


class Feedback extends Component {

    state = {
        isLoaded: false,
        starCount: 0,

    };

    componentDidMount() {
        this.setState({isLoaded: true})
    }

    onStarRatingPress(rating) {
        this.setState({starCount: rating});
    }

    submitFeedback() {
        const {starCount } = this.state
        if (starCount == 0) {
            Alert.alert('Review', 'Please choose a star rating');
        } else {
            Alert.alert('Thank you!', 'Feedback recieved!');
            this.props.navigation.navigate('Account');
        }
        
    }

    render() {
        const {isLoaded } = this.state
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={{flex: 1, marginTop: 25, alignItems: 'center',}}>
                        <Text h4 style= {{fontWeight: '300'}}>What do you think of EZshift?</Text>
                        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
                            <StarRating maxStars={5} rating={this.state.starCount} starSize={40}
                                emptyStarColor="#f2b01e" fullStarColor="#f2b01e" 
                                selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                        </View>
                        <Text style={{color: global.iOSBlue, marginTop: 10}}>Select a star rating</Text>
                    </View>
                    <View style={{flex: 4, marginBottom: 40, marginTop: 20}}>
                        <View style={styles.textArea}>
                            <TextArea
                                maxCharLimit={250}
                                placeholderTextColor={global.iOSBlue}
                                exceedCharCountColor="#990606"
                                placeholder={"Let us know what you think..."}
                                backgroundColor = 'white'/>
                        </View>
                        <Button title="Submit" raised containerStyle={{marginTop: 30}} buttonStyle={{height: 50}}
                        onPress={() => this.submitFeedback() }></Button>
                    </View>
                </SafeAreaView>
            );
        }
    }
}
    
export default Feedback;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 25,
        marginRight: 25,
    },
    textArea: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
    }
});
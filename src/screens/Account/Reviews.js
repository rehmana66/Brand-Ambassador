import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, ScrollView,
    FlatList, SafeAreaView
} from 'react-native';
import * as Progress from 'react-native-progress';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import CachedImage from '../../components/CachedImage';
import { ListItem, SearchBar, Divider, Header, Text } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

class Reviews extends Component {

    state = {
        isLoaded: false,
        data: null,
        reviews: 0,
        rating: 0,
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
        image: require("../../../assets/profile/profile.jpg"),
    };

    componentDidMount() {
        
        const { navigation } = this.props;
        const { one, two, three, four, five } = this.state;
        onestar = 0, twostar = 0, threestar = 0, fourstar = 0, fivestar = 0
        const data = navigation.getParam('data', 'No Current Reviews...');
        const rating = navigation.getParam('rating', '0');
        const reviews = navigation.getParam('reviews', '0');

        if (data) { 
            for (key in data) {
                switch(data[key].rating) {
                    case 1: onestar += 1; break;
                    case 2: twostar += 1; break;
                    case 3: threestar += 1; break;
                    case 4: fourstar += 1; break;
                    case 5: fivestar += 1; break;
                }
            }
        }

        this.setState({
            isLoaded: true, data: data, reviews: reviews, rating: rating,
            one: onestar, two: twostar, three: threestar, four: four, five: fivestar
        });
    }

    noReviews = () => {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Text h3 style={{fontWeight: '300'}} >No Reviews Found...</Text>
            </SafeAreaView>
        );
    };

    progressBar = (starNumber, number, total) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 5}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 10}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 2}}>
                        <Text style={{color: '#666666', fontSize: 11, marginRight: 1.5}}>{starNumber}</Text> 
                    </View>
                    <View style={{marginBottom: 2.5, justifyContent: 'center', alignItems: 'center'}}>
                        <StarRating disabled={true} maxStars={1} starSize={10} rating={1} fullStarColor="#c5c7c4"></StarRating>
                    </View>
                </View>
                <View style={{flex: 4, justifyContent: 'center', alignContent: 'center', marginBottom: 1.5}}>
                    <Progress.Bar style={{height: 6,}} color="#f2b01e" progress={(number/total)} width={110} 
                        unfilledColor='#d3d3d3' borderColor='white' borderRadius={0} />
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', marginRight: 15, marginBottom: 2}}>
                    <Text style={{color: 'black', fontSize: 10}}>{number}</Text>
                </View>
            </View>
        );
    }

    render() {
        const {isLoaded, data, rating, reviews } = this.state;
        const { one, two, three, four, five } = this.state;
        const total = one + two + three + four + five;
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else {
            if (!data) {
                return (this.noReviews());
            } else {
                return (
                    <SafeAreaView style={styles.container}>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{flex: 1,}}>
                            
                                <View style={styles.reviewBox}>
                                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#c5c7c4'}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{fontWeight: '300', fontSize: 40}}>{rating}</Text>
                                            <Text style={{fontWeight: '300', alignSelf: 'flex-end', marginBottom: 5, fontSize: 20}}>/5</Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <StarRating disabled={true} maxStars={5} rating={rating} starSize={30}
                                            emptyStarColor="#f2b01e" fullStarColor="#f2b01e"></StarRating>
                                        </View>
                                        <Text style={{fontWeight: '300', color: '#666666', marginTop: 5}}>{reviews} reviews</Text>
                                    </View>
                                    <View style={{flex: 1, marginTop: 15, marginBottom: 15 }}>
                                    {this.progressBar(5, five, total)}
                                    {this.progressBar(4, four, total)}
                                    {this.progressBar(3, three, total)}
                                    {this.progressBar(2, two, total)}
                                    {this.progressBar(1, one, total)}
                                    </View>
                                </View>
                                
                            </View>
                            <View  style={{flex: 1, marginBottom: 10, backgroundColor: 'blue'}}>
                                <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row', marginLeft: 25, marginRight: 25, marginTop: 5}}>
                                    <Image source = {this.state.image} style = {styles.imgStyle}/>
                                    <View style={{justifyContent: 'flex-start', marginLeft: 10, marginBottom: 15}}>
                                        <Text style={{marginBottom: 3}}>name here</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <StarRating disabled={true} maxStars={5} rating={rating} starSize={14}
                                            emptyStarColor="#f2b01e" fullStarColor="#f2b01e"></StarRating>
                                        </View>
                                        <Text style={{marginTop: 3}}>Date here</Text>
                                    </View>
                                </View>
                                <View style={{flex: 3}}>
                                    <Text style={{marginBottom: 10, marginLeft: 25, marginRight: 25, backgroundColor: 'green'}}>
                                    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a 
                                        </Text>
                                </View>
                                <Divider style={{height: 1, backgroundColor: '#c5c7c4', marginLeft: 25, marginRight: 25}} />
                            </View>
                            <View  style={{flex: 1, marginBottom: 10, backgroundColor: 'blue'}}>
                                <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row', marginLeft: 25, marginRight: 25, marginTop: 5}}>
                                    <Image source = {this.state.image} style = {styles.imgStyle}/>
                                    <View style={{justifyContent: 'flex-start', marginLeft: 10, marginBottom: 15}}>
                                        <Text style={{marginBottom: 3}}>name here</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <StarRating disabled={true} maxStars={5} rating={rating} starSize={14}
                                            emptyStarColor="#f2b01e" fullStarColor="#f2b01e"></StarRating>
                                        </View>
                                        <Text style={{marginTop: 3}}>Date here</Text>
                                    </View>
                                </View>
                                <View style={{flex: 3}}>
                                    <Text style={{marginBottom: 10, marginLeft: 25, marginRight: 25, backgroundColor: 'green'}}>
                                    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a 
                                        </Text>
                                </View>
                                <Divider style={{height: 1, backgroundColor: '#c5c7c4', marginLeft: 25, marginRight: 25}} />
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                );
            }
        }
    }
}
    
export default Reviews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    reviewBox: {
        flex: 1, 
        marginBottom: 25, 
        marginLeft: 25, 
        marginRight: 25, 
        marginTop: 25,
        borderRadius: 12, 
        borderColor: '#c5c7c4', 
        borderWidth: 1,
        flexDirection: 'row'
    },
    starBar: {
        backgroundColor: '#f2b01e', 
        borderBottomLeftRadius: 10, 
        borderTopLeftRadius: 10, 
        maxWidth: 100
    },
    starRemainderBar: {
        backgroundColor: '#c5c7c4', 
        borderBottomEndRadius: 10, 
        borderTopRightRadius: 10,
        maxWidth: 100
    },
    imgStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});
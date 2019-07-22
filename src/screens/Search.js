import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    Animated,
    Alert,
    Button,
    TouchableOpacity

} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Category from '../components/Category';
import Shift from '../components/Shift';
import Tag from '../components/Tag';

const { height, width } = Dimensions.get('window')

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            SampleArray: [{id: 2, name: 'Bartender'}, {id: 1, name: 'Barissta'}, {id: 0, name: 'Construction'}],
            count: 3, //change this later
            lastRefresh: Date(Date.now()).toString(),
            SearchText: '',
            closeURI: require('../../assets/close.png'),
            showCancel: false
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }
    onSubmit = () => {
        
        if(this.state.count >= 10) {
            popStock = this.state.SampleArray.pop()
            //console.log('poped:', popStock)
        }
        console.log('sd', this.state.SearchText)
        if(this.state.SearchText == undefined || this.state.SearchText == '') {
            return
        } else {
            this.state.SampleArray.unshift({id: this.state.count, name: this.state.SearchText});
            this.state.count = this.state.count+1
        }
      }

    forceUpdateHandler(){
        this.forceUpdate();
      };
    
    //this does not work, find out why
    componentWillMount() {
        this.scrollY = new Animated.Value(0)
        //this.startHeaderHeight = 0
        this.endHeaderHeight = 50
        if ( Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })
    }
    submitAndClear = () => {
        console.log(this.state.showCancel.valueOf())
        this.setState({
            SearchText: ''
        })
        this.state.showCancel = false
      }
    renderCancel()  {
        if (this.state.showCancel && this.state.SearchText.length > 0) {
            return (
                <TouchableOpacity onPress={this.submitAndClear}>
                    <Image source={this.state.closeURI} style={{width: 20, height: 20, resizeMode: 'cover'}}></Image>
                </TouchableOpacity>
            );
        } 
    }
    toggleCancel = () => {
        this.state.showCancel = true
    }

    render() {
        return (
            <SafeAreaView style = {{ flex: 1 }}>
                <View style = {{ flex: 1, backgroundColor: 'white' }}>
                    <View style = {styles.headerContainer}>
                        <View style={styles.searchContainer}>
                            <Ionicons name="ios-search" size={20} style={{marginHorizontal: 10}} />
                            <View style={{flex: 1 , flexDirection: 'row'}}>
                                <TextInput
                                    underlineColorAndroid= "transparent"
                                    placeholder="Search"
                                    placeholderTextColor="grey"
                                    returnKeyType = {"go"}
                                    onEndEditing = {this.refreshScreen}
                                    style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                                    onChangeText={(SearchText) => this.setState({SearchText})}
                                    onSubmitEditing={this.onSubmit}
                                    maxLength = {40}
                                    value = {this.state.SearchText}
                                    onKeyPress={this.toggleCancel}
                                    >
                                </TextInput>
                                
                                {this.renderCancel()} 
                                
                            </View>
                        </View>
                       
                        <Animated.View style={{flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: 10}}>
                            <Tag name='Dates'></Tag>
                            <Tag name='Filters'></Tag>
                            <Tag name='Shifts'></Tag>
                        </Animated.View>


                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10, paddingTop: 15}}>
                            <Text style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'left', paddingLeft: 5}}> 1906 shifts found</Text>
                            <Text style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'right'}}> Edmonton, Alberta</Text>
                        </View>
                    </View>
                    <ScrollView scrollEventThrottle={16} >
                        
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingHorizontal: 15}}>
                            <Text style={{fontSize: 20, fontWeight:'700'}}> Recent Searches:</Text>
                        </View>
                        <View style={{flex: 1, marginTop: 10, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                            
                                {this.state.SampleArray.map((item, key) =>
                                <Tag item={item} key={item.id} name={item.name}/>)}
                        </View>
                        <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
                            <Text style={{fontSize: 20, fontWeight: '700'}}>New Listings: </Text>
                            <View style={{ marginTop: 10, justifyContent: 'space-between' }}>
                                <Shift width={width} imageURI={require("../../assets/home.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/experiences.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/restaurant.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/home.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/experiences.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/restaurant.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/home.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/experiences.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                                <Shift width={width} imageURI={require("../../assets/restaurant.jpg")} title="Bartender - SMAK" desc="Requires certification" price="14"></Shift>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }

}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        height: Platform.OS == 'android' ? 180 : 130,
        //height: this.animatedHeaderHeight,
        //height: 130,
        
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: {width:0, height:0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS == 'android' ? 30: 15
    }

});
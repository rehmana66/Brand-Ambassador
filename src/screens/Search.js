import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Shift from '../components/Shift';
import Tag from '../components/Tag';
import Area from '../components/Area';
import SearchInput from '../components/SearchInput';


const { height, width } = Dimensions.get('window')

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            SampleArray: [{id: 2, name: 'Bartender'}, {id: 1, name: 'Barissta'}, {id: 0, name: 'Construction'}],
            lastRefresh: Date(Date.now()).toString(),
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }
    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }

    render() {
        return (
            <SafeAreaView style = {{ flex: 1 }}>
                <View style = {{ flex: 1, backgroundColor: 'white' }}>
                    <View style = {styles.headerContainer}>
                        <SearchInput SampleArray={this.state.SampleArray} onClick={this.refreshScreen}></SearchInput>
                        <View style={{flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: 10}}>
                            <Tag name='Dates'></Tag>
                            <Tag name='Filters'></Tag>
                            <Tag name='Shifts'></Tag>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10, paddingTop: 15, marginRight: 10}}>
                            <Text style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'left', paddingLeft: 5}}> 1906 shifts found</Text>
                            <Area style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'right'}}></Area>
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
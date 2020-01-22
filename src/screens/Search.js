import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    Dimensions,
    Button,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Shift from '../components/Shift';
import Tag from '../components/Tag';
import Area from '../components/Area';
import SearchInput from '../components/SearchInput';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
const { height, width } = Dimensions.get('window')

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:1c3aaff9-add7-44e8-b2ae-c6fde2bab990', 
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_0554WrncK',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '2rlumscuro51u9d6m56srimcov', 
    },
    "aws_appsync_graphqlEndpoint": "https://xtwbkpbhera2fdndfrvu2w4hb4.appsync-api.us-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
});

const GETAPPLICATION = `
    query listApplication($job:ID!){
        listApplications(filter: {
            job: {eq: $job}
        }) {
            items{id
            jobID{id}
            userID{id email fullName}}
        }
    }
`;

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            SampleArray: [{id: 2, name: 'Bartender'}, {id: 1, name: 'Barissta'}, {id: 0, name: 'Construction'}],
            lastRefresh: Date(Date.now()).toString(),
            jobs: [],
            location: null,
            isLoaded: false,
            jobsLoaded: false,
            refreshing: false,
            refreshLoad: false
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    fetchData = async() => {
        API.graphql(graphqlOperation(queries.listJobs, {limit: 20})).then(data =>
            {
                this.setState({ jobs:data.data.listJobs.items, isLoaded: true})
            }
        ).catch(err=> console.log(err))
    }

    componentDidMount() {
        this.fetchData();
        /*
        await API.graphql(graphqlOperation(queries.listJobs, {limit: 20})).then(data =>
            {
                this.setState({ jobs:data.data.listJobs.items, isLoaded: true })
            }
        )*/
    }
    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }
    updateState(data) {
        this.setState({location: data});
    }

    updateStatus() {
        this.setState({isLoaded: true, jobsLoaded: true});
    }
    _onRefresh = () => {
        this.setState({refreshing: true, isLoaded: false});
        this.fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }
    render() {
        const { isLoaded, jobs, refreshLoad } = this.state;
        
        if (isLoaded == false) {
            
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
                                <Text style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'left', paddingLeft: 5}}>{Object.keys(jobs).length} shifts found</Text>
                                <Area location={this.updateState.bind(this)} 
                                    style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'right'}}></Area>
                            </View>
                        </View>
                        <ScrollView scrollEventThrottle={16}refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />} >
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
                                    
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            </SafeAreaView>
            
            );
                        
        } else {
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
                                <Text style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'left', paddingLeft: 5}}>{Object.keys(jobs).length} shifts found</Text>
                                <Area location={this.updateState.bind(this)} 
                                    style={{flex: 1, fontSize: 15, fontWeight: '400', textAlign: 'right'}}></Area>
                            </View>
                        </View>
                        <ScrollView scrollEventThrottle={16}refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />} >
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
                                    {this.state.jobs.map((jobs, i) => (
                                    <Shift key={i} jobinfo={jobs} width={width} imageURI={require("../../assets/home.jpg")}></Shift>
                                    ))}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            );
        }
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
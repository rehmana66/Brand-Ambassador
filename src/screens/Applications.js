import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    FlatList,
    ActivityIndicator,
    Button
} from 'react-native';
import { ListItem, SearchBar, Divider  } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    query listApplication($status :String){
        listApplications(filter: {
            status: {eq: $status}
        }) {
            items{id job user status date
            jobID{id date name
                details {
                    id misc title desc rate
                }
            }}
        }
    }
`;


class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            applications: [],
            inMemorydata: [],
            isLoaded: false,
            search: '',
            loading: false,
            date: Date(Date.now()).toString(),
            approvedcolor: '#147efb',
            progresscolor: 'grey',
            deniedcolor: 'grey',
        };
      }
    componentDidMount() {
        this.fetchData("true");
    }
    /*
    static navigationOptions = ({ navigation }) => {
        
        if(USERID.user_type == true) {
            navigation.navigate('CreateJob')
        };
    }*/

    fetchData = async(stat) => {
        const { value } = this.state;
        API.graphql(graphqlOperation(GETAPPLICATION, {status: stat})).then(data =>
            {
                this.setState({ applications:data.data.listApplications.items,
                        inMemorydata: data.data.listApplications.items,
                        isLoaded: true, loading: true})
            }
        ).catch(err=> {console.log(err)})
    }

    _onRefresh = () => {
        this.setState({refreshing: true, loading: false});
        this.fetchData("true").then(() => {
          this.setState({refreshing: false, search: ''});
        });
      }
    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem 
            title={item.jobID.name}
            subtitle={"Pay: " + item.jobID.details.rate + "\n" + 
            "Application Date: " + new Date(item.date).toLocaleDateString() + "\n" +
            "Application Status: " + ((item.status=="true") ? "Approved" : (item.status == "false") ? "Denied" : "Pending approval")}
            onPress={()=> {console.log(item.jobID.name)}}
            leftAvatar={(item.status=="false") ? <Ionicons name={"md-alert"} size={35} color={'red'} /> : 
            (item.status=="true") ? <Ionicons name={"ios-checkmark-circle"} size={35} color={'green'} /> : 
                <Ionicons name={"md-alert"} size={35} color={'#D4AF37'} /> }
            bottomDivider
            chevron
        />
    );

    searchApplications = value => {
        console.log(this.state.applications)
        const filteredApplications = this.state.inMemorydata.filter(application => {
            let job = (application.jobID.name).toLowerCase();
            
            let searchTerm = (value).toLowerCase();

            return job.indexOf(searchTerm) > -1;
        });
        this.setState({applications: filteredApplications});
    }

    changeText(value) {
        if (value == 0) {
            this.setState({
                approvedcolor: '#147efb',
                progresscolor: 'grey',
                deniedcolor: 'grey',
                applications: []
            });
            this.fetchData("true");
        } else if (value == 1) {
            this.setState({
                approvedcolor: 'grey',
                progresscolor: '#147efb',
                deniedcolor: 'grey',
                applications: []
            });
            this.fetchData("progress");
        } else {
            this.setState({
                approvedcolor: 'grey',
                progresscolor: 'grey',
                deniedcolor: '#147efb',
                applications: []
            });
            this.fetchData("false");
        }
    }


    render() {

        const { applications, isLoaded, loading, search } = this.state;
        //console.log("new: ", this.state.applications);
        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else if (!loading) {
            return null;
        } else {
            return (
            
                <SafeAreaView style={styles.container}>
                    <SearchBar placeholder="Type Here..."
                        onChangeText={(search) => {this.setState({search}); this.searchApplications(search)}}
                        value = {search}
                        inputContainerStyle={styles.searchinputContainer}
                        containerStyle={styles.searchContainer}
                        lightTheme
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center'}}>
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => this.changeText(0)}>
                                <Text style={{fontWeight: '500', fontSize: 15, textAlign: 'center', color: this.state.approvedcolor}}>Approved</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => this.changeText(1)}>
                                <Text style={{fontWeight: '500', fontSize: 15, textAlign: 'center', color: this.state.progresscolor}}>In Progress</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => this.changeText(2)}>
                                <Text style={{fontWeight: '500', fontSize: 15, textAlign: 'center', color: this.state.deniedcolor}}>Denied</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <ScrollView scrollEventThrottle={16}refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} /> }>
                        <FlatList
                            data={this.state.applications}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() => (<View></View>)}
                            extraData={this.state.applications}
                        />
                    </ScrollView>
                    
                </SafeAreaView>
            );
        }
        
    }

}

export default Applications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchinputContainer: {
        backgroundColor: 'white',    
        shadowOffset: {width:0, height:0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
    },
    searchContainer: {
        shadowOffset: {width:0, height:0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1
    },
    menu: {
        flex: 1,
        padding: 7, 
        backgroundColor: 'white', 
        borderColor: '#dddddd',
        
    }
});
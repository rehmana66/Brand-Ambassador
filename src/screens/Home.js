import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Shift from "../components/Shift";
import {Calendar} from 'react-native-calendars';
import {ListItem, ThemeProvider} from 'react-native-elements';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import { FlatList } from 'react-native-gesture-handler';
//import USERID from '../Other/User';
const { height, width } = Dimensions.get('window')

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:316afdde-f978-4983-810e-879215b80363', 
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_CBWDFQaUL',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '2mamhmvgilo83g0o6eqfkd7a2k', 
    },
    "aws_appsync_graphqlEndpoint": "https://xtwbkpbhera2fdndfrvu2w4hb4.appsync-api.us-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
});


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

const GETUSERJOBS = `query getUserJobs($id: ID!) {
    getUser(id: $id) {
        jobs {
        items {
          jobID {
            id
            employer {
              id
              fullName
            }
            name
            date
            details {
              title
              body
              desc
              misc
              rate
              dates {
                items{
                  date
                }
              }
            }
          }
        }
      }
    }
  }`;

global.USERID = {};

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            log: {},
            testJobs: [],
            user: "",
            isLoaded: false,
            selected: undefined,
            data: [],
            userJobs: null,
            myMarkedDays: [],
            finalMarkedDays: null
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    createMarkedDates() {
        var obj = this.state.myMarkedDays.reduce((c, v) => Object.assign(c, {[v]: {marked: true}}), {});
        //console.log(this.state.myMarkedDays);
        this.setState({finalMarkedDays: obj});
        //console.log(this.state.finalMarkedDays);
    }
    componentDidMount() {
        Auth.currentAuthenticatedUser().then((data) => {
            //console.log(data)
            if (data) {
                const getDetails = API.graphql(graphqlOperation(GETUSER, {email: data.attributes.email})).then(
                    (info) => this.setState({user: info.data.listUsers.items[0], isLoaded: true})
                );
                const getJobs = API.graphql(graphqlOperation(GETUSERJOBS, {id: "aed51214-b88d-4886-82d6-0b26e5654650"})).then(
                    (info) => this.setState({userJobs: info.data.getUser.jobs}))
                    .then(this.loadJobs.bind(this));
            }}).catch(err => console.log(err));
        //console.log(this.userJobs);
        //this.loadJobs();
    }

    addUser() {
        console.log(this.state.user)
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }
    logout = async () => {
        try {
            await Auth.signOut()
            this.props.navigation.navigate('Initializing')
        } catch (err) {
            console.log('error signing out...: ', err)
        }
    }

    loadJobs(){
        var jobs = this.state.userJobs;
        for(i = 0; i < jobs['items'].length; i++){
            for(j = 0; j < jobs.items[i].jobID.details.dates['items'].length; j++){
                var newObject = {JobID: jobs.items[i].jobID.id, JobName: jobs.items[i].jobID.name, Details: jobs.items[i].jobID.details, 
                    Employer: jobs.items[i].jobID.employer, JobDate: jobs.items[i].jobID.details.dates.items[j].date};
                    this.state.testJobs.push(newObject);
                    var myDate = newObject.JobDate.substring(0, newObject.JobDate.indexOf('T'));
                    this.state.myMarkedDays.push(myDate);
            }
        }
        this.createMarkedDates();
    }

    pressTest = (item) => {
        console.log(this.state.myMarkedDays);
        //console.log(item);
    }

    scrollTest = (day) => {
        var pressedDay = day.dateString;
        console.log(pressedDay)
        if (this.state.myMarkedDays.includes(pressedDay)){
            var indexOfDate = this.state.myMarkedDays.indexOf(pressedDay)
            this.flatListRef.scrollToIndex({animated: true, index: indexOfDate, viewPosition: 0});
        }
        else
            console.log("nope");
    }

    renderItem = ({ item }) => (
        <ListItem
            topDivider
            onPress={() => this.pressTest(item)}
            title={item.JobName}
            subtitle={item.Employer.fullName}
            leftElement={
            <View style={{alignItems: 'center', borderRightWidth: 2, borderRightColor: 'grey', paddingRight: 10}}>
                <Text>{monthNames[item.JobDate.substring(6,7)-1]}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.JobDate.substring(8,10)}</Text>
                <Text>{item.JobDate.substring(item.JobDate.indexOf('T')+1, item.JobDate.indexOf('.')-3)}</Text>
            </View>}
            bottomDivider
            chevron
        />
    );

    render() {
        const { isLoaded, user } = this.state;
        if (isLoaded == false) {
            return <View></View>
        } else {
            USERID = user;
            //console.log(user.id)
            //console.log("USERID: ", USERID);
            //<Button onPress={this.logout} title="Sign Out"/>
            //<Button onPress={this.addUser} title="List Jobs"/>
            return (
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                    <View>
                        <Calendar
                            onDayPress={this.scrollTest}
                            // Collection of dates that have to be marked. Default = {}
                            markedDates={this.state.finalMarkedDays}
                        />
                    </View>
                    <FlatList
                        ref={(ref) => { this.flatListRef = ref; }}
                        data = {this.state.testJobs}
                        renderItem = {this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state.applications}>
                    </FlatList>
                </View>
            
            );
        }
      }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
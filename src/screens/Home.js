import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Shift from "../components/Shift";
import {Calendar} from 'react-native-calendars';

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
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

global.USERID = {};
global.iOSBlue = '#147efb';

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            log: {},
            jobs: [],
            user: "",
            isLoaded: false
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }


    componentDidMount() {
        Auth.currentAuthenticatedUser().then((data) => {
            //console.log(data)
            if (data) {
                const getDetails = API.graphql(graphqlOperation(GETUSER, {email: data.attributes.email})).then(
                    (info) => this.setState({user: info.data.listUsers.items[0], isLoaded: true})
                );
            }}).catch(err => console.log(err))
    }

    addUser() {
        console.log(this.state.user)
    }

    getUser() {
        

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

    render() {
        const { isLoaded, user } = this.state;
        if (isLoaded == false) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>
        } else {
            USERID = user;
            //console.log(user.id)
            //console.log("USERID: ", USERID);
            return (
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                    <Button onPress={this.logout} title="Sign Out"/>
                    <Button onPress={this.addUser} title="List Jobs"/>
                    <Calendar
  // Collection of dates that have to be colored in a special way. Default = {}
  markedDates={{
    '2020-01-20': {textColor: 'green'},
    '2020-01-22': {startingDay: true, color: 'green'},
    '2020-01-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
    '2020-01-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
  }}
  // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
  markingType={'period'}
/>
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
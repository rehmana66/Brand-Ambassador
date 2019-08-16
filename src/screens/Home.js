import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Dimensions
} from 'react-native';

import Shift from "../components/Shift";

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


class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            log: {},
            jobs: [],
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    async componentDidMount() {

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
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Button onPress={this.logout} title="Sign Out"/>
                <Button title="List Jobs"/>
                <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>New Listings: </Text>
                 </View>
            </View>

        );
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
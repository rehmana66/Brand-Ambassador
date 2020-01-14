import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Shift from "../components/Shift";

import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
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
      items{id email user_type}
    } 
}`;

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
            return <View></View>
        } else {
            console.log(user)
            return (
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                    <Button onPress={this.logout} title="Sign Out"/>
                    <Button onPress={this.addUser} title="List Jobs"/>
                    <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>New Listings: </Text>
                    </View>
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
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text
} from 'react-native';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';


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

/*
lastname: String
  phone_number: AWSPhone
  email: AWSEmail
  city: String
  country: String
  province: String
  postalcode: String
  gender: String
*/


class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            log: {},
            shifts: []
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }
    async componentDidMount() {
        const todoDetails = {
            name: 'Todo 1',
            description: 'Learn AWS AppSync'
        };
        //const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));

        //const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
        //console.log(allTodos);
    }

    async createShift() {
        //5213lor8ffaqd9b2pifkj2m53n
        //us-west-2:1c3aaff9-add7-44e8-b2ae-c6fde2bab990
        const datetime = new Date();
        console.log(datetime);
        try {
            const shiftDetails = {
                firstname: 'John',
                lastname: 'brain',
                Title: 'Home Media',
                rate: 14,
                misc: 'Requires Certification',
                date: datetime,
            };
            const newShift = await API.graphql(graphqlOperation(mutations.createShift, {input: shiftDetails}))
            

        } catch(err) {
            console.log("error: ", err)
        }
    }

     

    async listShift() {
        const allShifts = await API.graphql(graphqlOperation(queries.listShifts, {filter:{firstname: {eq:"roman"}}}));
        console.log(allShifts);
        //const oneTodo = await API.graphql(graphqlOperation(queries.getShift, { firstname: 'john' }));
        //console.log(oneTodo);
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
            <View style={{justifyContent: 'center', alignContent: 'center'}}>
                <Button onPress={this.logout} title="Sign Out"/>
                <Button onPress={this.createShift} title="Create Shift"/>
                <Button onPress={this.listShift} title="List Shift"/>
                <View>
                    <Text>Hello</Text>
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
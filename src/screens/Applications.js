import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    RefreshControl,
    SafeAreaView,
    ScrollView
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



class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
          applications: {},
          isLoaded: false
        };
      }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async() => {
        API.graphql(graphqlOperation(queries.listApplications, {limit: 20})).then(data =>
            {
                //console.log(data);
                this.setState({ applications:data.data.listApplications.items, isLoaded: true})
                //console.log(this.state.applications);
            }
        ).catch(err=> console.log(err))
    }
    render() {

        const { applications, isLoaded } = this.state;
        //console.log(applications);

        if (!isLoaded) {
            return <View></View>
        } else {
            return (
            
                <SafeAreaView style={styles.container}>
                    <View>
                    {this.state.applications.map((key, i) => (
                        <Text key={i}>{this.state.applications[i].id}</Text>
                        ))}
                    </View>
                </SafeAreaView>
            );
        }
        
    }

}

export default Applications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
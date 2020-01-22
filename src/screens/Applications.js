import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

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
          applications: [],
          isLoaded: false,
          search: '',
          loading: false,
          date: Date(Date.now()).toString()
        };
      }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.date !== this.state.date) {
            console.log("State has changed")
            console.log(prevState.date)
            console.log(this.state.date)
            this.fetchData();
        }
    }

    fetchData = async() => {
        API.graphql(graphqlOperation(queries.listApplications, {limit: 20})).then(data =>
            {
                //console.log(data);
                this.setState({ applications:data.data.listApplications.items, isLoaded: true, loading: true})
                //console.log(this.state.applications);
            }
        ).catch(err=> {console.log(err)})
    }

    updateSearch = search => {
        this.setState({ search });
      };
     
        /*
    <SafeAreaView style={styles.container}>
    <View>{this.state.applications.map((key, i) =>
        <Text key={i}>{this.state.applications[i].id}</Text> 
        
        )}</View>
</SafeAreaView>
*/

    _onRefresh = () => {
        this.setState({refreshing: true, loading: false});
        this.fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }
      keyExtractor = (item, index) => index.toString();

      renderItem = ({ item }) => (
          <ListItem 
          title={item.jobID.name}
          subtitle={"Pay: " + item.jobID.details.rate + "\n" + 
            "Application Date: " + new Date(item.date).toLocaleTimeString() + "\n" +
            "Application Status: " + ((item.status) ? "Approved" : "Pending approval")}
          onPress={()=> {console.log(item.jobID.name)}}
          leftAvatar={(!item.status) ? <Ionicons name={"md-alert"} size={35} color={'red'} /> : <Ionicons name={"ios-checkmark-circle"} size={35} color={'green'} />}
          bottomDivider
          chevron
          />
      );

    render() {
        


        const { applications, isLoaded, loading, search } = this.state;
        console.log(applications);

        if (!isLoaded) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>;
        } else if (!loading) {
            return null;
        } else {
            return (
            
                <SafeAreaView style={styles.container}>
                    <SearchBar placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                        inputContainerStyle={{backgroundColor: 'white',    
                        shadowOffset: {width:0, height:0},
                        shadowColor: 'black',
                        shadowOpacity: 0.2,
                        elevation: 1,}}
                        containerStyle={{
                            
                            shadowOffset: {width:0, height:0},
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,}}
                        lightTheme
                    />
                    <ScrollView scrollEventThrottle={16}refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} /> }>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.applications}
                            renderItem={this.renderItem}
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
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
import React, { Component} from 'react';
import { Divider, Card, Button, ListItem } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import moment from 'moment';
import CachedImage from '../components/CachedImage';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { FlatList } from 'react-native-gesture-handler';

/*const UPDATEAPP = `mutation updateApp( $user: ID!, $id: ID!, $status: String) {
    updateApplication(input: {
        user: $user
        status: $status
        id: $id
    }){
        id
    }
}`;*/

const UPDATEAPP = `
    mutation updateUser($id: ID!, $status: String){
        updateApplication(input: {
            id: $id,
            status: $status,
        }) {
            id
        }
    }
`;


class ProcessApplicant extends Component {

    constructor (props) {
        super(props);
        this.state = {
            applicant: null,
            isLoaded: false,
        }
    }

    componentDidMount(){
        const { navigation } = this.props;
        this.setState({applicant: navigation.getParam('applicant', null), isLoaded: true});
    }

    updateApplicant(status){
        const appID = this.state.applicant

        const getDetails = API.graphql(graphqlOperation(UPDATEAPP, {id: appID.id, status: status})).
        then((info) => console.log(info)).catch(err => console.log(err));
        /*
        API.graphql(graphqlOperation(UPDATEAPP, {$user:appID.user, id: appID.id, $status: status})).then((info) => {
            console.log("INFO", info)
            const { navigation } = this.props;
            navigation.popToTop();
            }
        ).catch(err=> console.log(err));*/
    }


    render() {
        const { isLoaded, applicant } = this.state;
        if (isLoaded == false) {
            return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} animating size="large"></ActivityIndicator>
        } else {
            console.log(applicant);
            return (
                
                <SafeAreaView style={styles.container}>
                    <View style = {{flex: 1}}>
                        <Text>Profile Information Here: {applicant.status}</Text>
                        <Button
                        onPress={() => this.updateApplicant("true")}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='APPROVE' />
                        <Button
                        onPress={() => this.updateApplicant("false")}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5}}
                        title='DENY' />
                    </View>
                </SafeAreaView>
            );
        }
    }
  
}

export default ProcessApplicant;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        alignSelf: 'center',
        height: 81,
        width: 81,
        borderRadius: 40,
    },
    imgStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingTop: 10, 
        
    },

});
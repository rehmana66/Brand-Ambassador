import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:a88e9101-8d00-45f7-a879-e47167f25a36', 
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_ybDxoo4oL',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '5213lor8ffaqd9b2pifkj2m53n', 
    }
});

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            log: {}
        }
        this.refreshScreen = this.refreshScreen.bind(this)
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
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
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
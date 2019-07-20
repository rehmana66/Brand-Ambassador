import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,

} from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Search', {name: 'Jane'})}
          />
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
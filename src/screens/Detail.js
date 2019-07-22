import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,

} from 'react-native';


class Detail extends Component {
    render() {
      const title = this.props.navigation.getParam('title', 'N/A');  
      const desc = this.props.navigation.getParam('desc', 'N/A');  
      const price = this.props.navigation.getParam('price', 'N/A');
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
        <Text style={{ marginTop: 16,fontSize: 20,}}>  
            Title: {title} 
        </Text>  
        <Text style={{ marginTop: 16,fontSize: 20,}}>  
            Title: {desc} 
        </Text>  
        <Text style={{ marginTop: 16,fontSize: 20,}}>  
            Title: ${price}/hr
        </Text>  
        </View>
      );
    }
  
}

export default Detail;
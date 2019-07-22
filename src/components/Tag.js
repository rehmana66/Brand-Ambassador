import React, {Component} from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

class Tag extends Component {

    render(){
        return(
            <View style={{minWidth: 40, minHeight: 20, padding: 7, backgroundColor: 'white', borderColor: '#dddddd', 
                borderWidth: 1, borderRadius: 2, marginRight: 10}}>
                    <Text style={{fontWeight: '700', fontSize: 10}}>{this.props.name}</Text>
                </View>
        );
    }
}

export default Tag;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})
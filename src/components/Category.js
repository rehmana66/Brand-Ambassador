import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

class Category extends Component {
    render(){
        return(
            <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor:'#dddddd'}}>
                <View style={{flex: 3}}>
                    <Image source={this.props.imageURI} 
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
                    <Text style={{fontWeight:'500'}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})
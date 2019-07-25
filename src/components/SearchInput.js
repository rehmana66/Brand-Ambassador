import React, {Component} from 'react';
import {
    View, StyleSheet, Platform, TextInput, TouchableOpacity, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CachedImage from './CachedImage';

class SearchInput extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            SampleArray: this.props.SampleArray,
            count: this.props.SampleArray.length, //change this later
            lastRefresh: Date(Date.now()).toString(),
            SearchText: '',
            showCancel: false,
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }
    onSubmit = () => {
        if(this.state.count >= 10) {
            popStock = this.props.SampleArray.pop()
        }
        if(this.state.SearchText == undefined || this.state.SearchText == '') {
            return
        } else {
            this.props.SampleArray.unshift({id: this.state.count, name: this.state.SearchText});
            this.state.count = this.state.count+1
        }
      }

    forceUpdateHandler(){
        this.forceUpdate();
      };
   
    submitAndClear = () => {
        this.setState({
            SearchText: ''
        })
        this.state.showCancel = false
      }
    renderCancel()  {
        if (this.state.showCancel && this.state.SearchText.length > 0) {
            return (
                <TouchableOpacity onPress={this.submitAndClear}>
                    <CachedImage source={require('../../assets/close.png')} style={{width: 20, height: 20, resizeMode: 'cover'}}></CachedImage>
                </TouchableOpacity>
            );
        } 
        
    }
    toggleCancel = () => {
        this.state.showCancel = true
    }

    render(){
        return(       
            <View style={styles.searchContainer}>
                <Ionicons name="ios-search" size={20} style={{marginHorizontal: 10}} />
                <View style={{flex: 1 , flexDirection: 'row'}}>
                    <TextInput
                        underlineColorAndroid= "transparent"
                        placeholder="Search"
                        placeholderTextColor="grey"
                        returnKeyType = {"go"}
                        onEndEditing = {this.props.onClick}
                        style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                        onChangeText={(SearchText) => this.setState({SearchText})}
                        onSubmitEditing={this.onSubmit}
                        maxLength = {40}
                        value = {this.state.SearchText}
                        onKeyPress={this.toggleCancel}
                        >
                    </TextInput>
                    
                    {this.renderCancel()}
                    
                </View>
            </View>
         );
    }
}

export default SearchInput;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: {width:0, height:0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS == 'android' ? 30: 15
    }
})
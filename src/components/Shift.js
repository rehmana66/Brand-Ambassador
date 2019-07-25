import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Platform
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

class Shift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURI : require("../../assets/thumbs-up.png"),
        }
      }
    
    onPress = () => {
        this.setState({
            imageURI: require("../../assets/thumbs-up-filled.png")
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{width: this.props.width - 40, height:  this.props.width/1.5, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{height: 40, flexDirection: 'row'}}>
                        <View style={styles.profile}>
                                <Image source={require('../../assets/logo.png')} style={{ flex: 1, width: null, height: null }}/>
                        </View>
                        <View style={{flex: 1, justifyContent:'center'}}>
                            <Text style={{fontSize: 20, fontWeight: '400', paddingLeft: 5, maxWidth: this.props.width/1.5}}>Username Here</Text>
                        </View>
                        <View style={{alignItems:'flex-end', justifyContent: 'center', paddingRight: 10}}>
                            <Image source={require('../../assets/more.png')} style={{width: 20, height: 20}}></Image>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                            <Image source={this.props.imageURI} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}></Image>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
                        <TouchableOpacity style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color: '#b63838'}}>{this.props.title}</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.desc}</Text>
                            <Text style={{fontSize: 10, fontWeight: 'bold'}}>${this.props.price}/hr</Text>
                            <StarRating disabled={true} maxStars={5} rating={4} starSize={10}></StarRating>
                        </TouchableOpacity>
                        <View style={{justifyContent: 'flex-end', marginRight: 5}}>
                            <TouchableOpacity onPress={this.onPress}>
                                <Image source={this.state.imageURI} style={{width: 30, height: 30, resizeMode: 'cover'}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft: 5}}>
                    <Text style={{fontWeight: '200', opacity: 0.5, fontSize: 12}}>4 hours ago</Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(Shift);

const styles = StyleSheet.create({
    container: {
        marginBottom: 20, 
        shadowOffset: {width:0, height:0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
    },
    profile: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        borderColor: 'white',
        borderWidth: 0,
        overflow: 'hidden',
        marginLeft: 10,
        marginTop: 5
    }

})
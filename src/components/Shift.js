import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation';

class Shift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURI : require("../../assets/thumbs-up.png")
        }
      }
    
      onPress = () => {
        this.setState({
            imageURI: require("../../assets/thumbs-up-filled.png")
        })
      }
    render(){
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',
                            {  
                                title: this.props.title,
                                desc: this.props.desc,
                                price: this.props.price
                            }
                            )}>
                <View style={{width: this.props.width - 40, height:  this.props.width/1.5 - 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{flex: 1, marginBottom: 2, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                        <Image source={this.props.imageURI} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}></Image>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color: '#b63838'}}>{this.props.title}</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.desc}</Text>
                            <Text style={{fontSize: 10, fontWeight: 'bold'}}>${this.props.price}/hr</Text>
                            <StarRating disabled={true} maxStars={5} rating={4} starSize={10}></StarRating>
                        </View>
                        <View style={{justifyContent: 'flex-end', marginRight: 5}}>
                            <TouchableOpacity onPress={this.onPress}>
                                <Image source={this.state.imageURI} style={{width: 30, height: 30, resizeMode: 'cover'}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(Shift);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})
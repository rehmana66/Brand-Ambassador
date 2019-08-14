import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Platform, Dimensions
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation';
import CachedImage from './CachedImage';


const { height, width } = Dimensions.get('window');


class Shift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURI : require("../../assets/thumbs-up.png"),
            job: this.props.jobinfo,
            title: "",
            desc: "",
            misc: "",
            body: "",
            rate: "",
            id: "",
            employerName: "",
            employerID: "",
            date: "",
        }
    }
    componentWillMount() {
        //console.log("value: ", this.state.job);
        const job = this.state.job
        this.setState({
            title: job.details.title,
            desc: job.details.desc,
            misc: job.details.misc,
            body: job.details.body,
            rate: job.details.rate,
            id: job.id,
            employerName: job.employer.firstName + " " + job.employer.lastName,
            employerID: job.employer.id,
            date: job.date
        })
    }
    //Todo: change lastname to lastName in db, check timestamp
    
    onPress = () => {
        this.setState({
            imageURI: require("../../assets/thumbs-up-filled.png")
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{width: width - 40, height:  width/1.5, borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <View style={{height: 40, flexDirection: 'row'}}>
                        <View style={styles.profile}>
                            <CachedImage source={require('../../assets/logo.png')} style={{ flex: 1, width: null, height: null }}/>
                        </View>
                        <View style={{flex: 1, justifyContent:'center'}}>
                            <Text style={{fontSize: 20, fontWeight: '400', paddingLeft: 5, maxWidth: width/1.5}}>{this.state.employerName}</Text>
                        </View>
                        <View style={{alignItems:'flex-end', justifyContent: 'center', paddingRight: 10}}>
                            <CachedImage source={require('../../assets/more.png')} style={{width: 20, height: 20}}/>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                            <CachedImage source={this.props.imageURI} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
                        <TouchableOpacity style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color: '#b63838'}}>{this.state.title}</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.state.desc}</Text>
                            <Text style={{fontSize: 10, fontWeight: 'bold'}}>{this.state.rate}/hr</Text>
                            <StarRating disabled={true} maxStars={5} rating={4} starSize={10}></StarRating>
                        </TouchableOpacity>
                        <View style={{justifyContent: 'flex-end', marginRight: 5}}>
                            <TouchableOpacity onPress={this.onPress}>
                                <CachedImage source={this.state.imageURI} style={{width: 30, height: 30, resizeMode: 'cover'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft: 5}}>
                    <Text style={{fontWeight: '200', opacity: 0.5, fontSize: 12}}>{this.state.date}</Text>
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
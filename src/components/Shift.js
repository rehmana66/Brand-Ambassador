import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Platform, Dimensions, Alert
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import { withNavigation } from 'react-navigation';
import CachedImage from './CachedImage';
import moment from 'moment';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';


const { height, width } = Dimensions.get('window');

const GETAPPLICATION = `
    query listApplication($job:ID!, $ID: ID!){
        listApplications(filter: {
            job: {eq: $job}
            user: {eq: $ID}
        }) {
            items{id
            jobID{id}
            userID{id email fullName}}
        }
    }
`;


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
            isLoaded: false,
            dates: []
        }
    }
    componentWillMount() {
        const job = this.state.job
        this.setState({
            title: job.details.title,
            desc: job.details.desc,
            misc: job.details.misc,
            body: job.details.body,
            rate: job.details.rate,
            id: job.id,
            employerName: job.employer.fullName,
            employerID: job.employer.id,
            date: job.date,
            dates: job.details.dates.items
        })
    }
    
    componentDidMount() {
        API.graphql(graphqlOperation(GETAPPLICATION, {job: this.state.id, ID: global.USERID.id})).then(
            data => {
                this.setState({isLoaded: true})
                if (!data.data.listApplications.items[0]) {
                } else {
                    this.setState({
                        imageURI: require("../../assets/thumbs-up-filled.png"),
                       
                    })
                }
            }
        ).catch(err => console.log(err));
    }
    
    onPress = () => {
        this.setState({
            imageURI: require("../../assets/thumbs-up-filled.png")
        })
        currentDate = new Date();
        const applicationDetails = {
            applicationUserIDId: global.USERID.id, 
            applicationJobIDId: this.state.id,
            user: global.USERID.id,
            job: this.state.id,
            status: "progress",  
            date: currentDate
        }
        const details = API.graphql(graphqlOperation(GETAPPLICATION, {job: this.state.id, ID: global.USERID.id})).then(
            data => {
                if (!data.data.listApplications.items[0]) {
                    API.graphql(graphqlOperation(mutations.createApplication,
                        {input: applicationDetails})).catch(err => console.log(err));
                    Alert.alert('Application Status', 'Application sent!')   
                    
                } else {
                    Alert.alert('Application Status', 'You have already applied!') 
                }
            }
        ).catch(err => console.log(err));
    }

    renderViewMore(onPress){
        return(
          <Text onPress={onPress} style={styles.readMore}>Show more dates</Text>
        )
    };

    renderViewLess(onPress){
        return(
          <Text onPress={onPress} style={styles.readMore}>Show less</Text>
        )
    };


    render(){
        const { isLoaded, date, job, dates } = this.state;

        
        if (isLoaded == false) {
            return <View></View>
        } else {
            dates.sort(function(a, b) {
                return new Date(a.start_date) - new Date(b.start_date);
            });
            return(
                <View style={styles.container}>
                    <View style={{width: width - 40, height:  width/1.4, borderWidth: 0.5, borderColor: '#dddddd' }}>
                        <View style={{height: 50, flexDirection: 'row'}}>
                            <View style={styles.profile}>
                                <CachedImage source={require('../../assets/profile/nouser.jpg')} style={{ flex: 1, width: null, height: null }}/>
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
                            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                                <Text style={{fontSize: 10, fontWeight: 'bold', color: '#b63838'}}>{this.state.job.name} - Job Name</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.state.desc} - </Text>
                                <Text style={{fontSize: 10, fontWeight: 'bold'}}>{this.state.rate}/hr</Text>
                                
                                <ViewMoreText numberOfLines={1}
                                    renderViewMore={this.renderViewMore} renderViewLess={this.renderViewLess}>
                                       {this.state.dates.map((dates, i) =>(
                                            <Text key={i} style= {{fontSize: 10, fontWeight: '300'}}>
                                                {moment(dates.start_date).format('MMMM Do YYYY, h:mm a').toString()} {"- "}
                                                {moment(dates.end_date).format('h:mm a').toString()} {"\n"}
                                            </Text>
                                        ))}
                                </ViewMoreText>

                            </View>
                            <View style={{justifyContent: 'center', marginRight: 5}}>
                                <TouchableOpacity onPress={this.onPress} >
                                    <CachedImage source={this.state.imageURI} style={{width: 30, height: 30, resizeMode: 'cover',}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text style={{fontWeight: '200', opacity: 0.5, fontSize: 12}}>Posted {moment(this.state.date).fromNow()}</Text>
                    </View>
                </View>
            );
        }
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
        marginTop: 8,
        marginRight: 5
    },
    readMore: { 
        color: '#147efb',
        fontSize: 12
    }
})
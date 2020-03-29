import React, { Component} from 'react';
import { Divider, Card, Button, ListItem } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import moment from 'moment';
import CachedImage from '../components/CachedImage';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const GETAPPS = `query getApps($job: ID!) {
    listApplications(filter: {job: {eq: $job}}) {
        items {
            id
            date
            user
            job
            status
            userID {
                id
                fullName
            }
        }
    }
}`;

class Detail extends Component {

    constructor (props) {
        super(props);
        this.state = {
            userType: null,
            details: null,
            applicants: null,
            approved: null
        }
    }

    convertToTwelve = (time) => {
        var hour = +time.substr(0, 2);
        var modHour = hour % 12 || 12;
        var ampm = (hour < 12 || hour === 24) ? "AM" : "PM";
        return modHour + time.substr(2, 3) + " " + ampm;
    }

    fetchData() {
        const { navigation } = this.props;
        const jobDetails = navigation.getParam('jobDetails', null);
        this.setState({details: jobDetails, userType: navigation.getParam('userType', null)});
        API.graphql(graphqlOperation(GETAPPS, {job: jobDetails.JobID})).then((info) => {
            this.setState({applicants: info.data.listApplications.items})
            console.log("INFO", info)
            this.setPerson(info.data.listApplications.items);
            }
        ).catch(err=> console.log(err));
    }

    setPerson(info){
        let obj = info.find(o => o.status === 'true')
        if (obj !== undefined){
            this.setState({approved: info[0].userID.fullName})
            console.log(info[0].userID.fullName);
        }
    }
    componentWillMount() {
        this.fetchData();
    }
    
    checkApplicants(applicants) {
        const {navigation} = this.props
        navigation.navigate('JobApplicants', {applicants: applicants});
    }


    render() {
        //const { navigation } = this.props;
        //const details = navigation.getParam('jobDetails', null);
        //const userType = navigation.getParam('userType', null);
        //console.log(details.JobID);
        //this.fetchData(details.JobID);
        //console.log(this.applicants);
        //this.setState({jobDetails: jobdetails})
        
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{flex: 1}}>
                <ScrollView>
                    <Card 
                    containerStyle = {{marginBottom: 5}}
                    title = {this.state.details.JobName}
                    image = {require('../../assets/home.jpg')}>
                        <Text style={{marginBottom: 10}}>This is {this.state.details.Details.desc}. There will most likely
                        be more here but lets just leave it at this for now.</Text>
                        {!this.state.userType
                            ? <Button
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VERIFY' />
                            : <View><Button
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='EDIT INFO' />
                            <Button
                            onPress={() => this.checkApplicants(this.state.applicants)}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5}}
                            title='APPLICANTS' 
                            disabled={this.state.approved == null ? false : true}/></View>
                        }
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4' }} />
                        {(this.state.userType && this.state.approved) &&
                            <ListItem
                            title={this.state.approved}
                            leftIcon={<CachedImage source = {require("../../assets/profile/account.png")} style = {{height: 40, width: 40}}/>}
                            />
                        }
                        <ListItem
                        title={monthNames[this.state.details.JobStartDate.substring(6,7)-1] + ", " + this.state.details.JobStartDate.substring(8,10) + ", " + this.state.details.JobStartDate.substring(0,4)}
                        leftIcon={<CachedImage source = {require('../../assets/calendar.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <ListItem
                        title={this.convertToTwelve(this.state.details.JobStartDate.substring(this.state.details.JobStartDate.indexOf('T')+1, this.state.details.JobStartDate.indexOf('.')-3))
                            + " " + "-" + " " + this.convertToTwelve(this.state.details.JobEndDate.substring(this.state.details.JobEndDate.indexOf('T')+1, this.state.details.JobEndDate.indexOf('.')-3))}
                            leftIcon={<CachedImage source = {require('../../assets/time.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <ListItem 
                            title={this.state.details.Details.rate}
                            leftIcon={<CachedImage source = {require('../../assets/money.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <ListItem
                            title="My Location"
                            leftIcon={<CachedImage source = {require('../../assets/location.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4' }} />
                        <ListItem
                            title="Miscellaneous"
                            subtitle={this.state.details.Details.misc}
                        />
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4' }} />
                        <ListItem
                            containerStyle={{marginBottom: 2}}
                            title={"Shift is " + moment(this.state.details.JobStartDate).fromNow()}
                            titleStyle={{color: 'grey', fontSize: 10}}
                        />
                    </Card>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
  
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        alignSelf: 'center',
        height: 81,
        width: 81,
        borderRadius: 40,
    },
    imgStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingTop: 10, 
        
    },

});
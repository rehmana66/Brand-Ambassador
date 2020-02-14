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
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

class Detail extends Component {

    constructor (props) {
        super(props);
        this.state = {
        }
    }

    convertToTwelve = (time) => {
        var hour = +time.substr(0, 2);
        var modHour = hour % 12 || 12;
        var ampm = (hour < 12 || hour === 24) ? "AM" : "PM";
        return modHour + time.substr(2, 3) + " " + ampm;
    }
   /* componentDidMount() {
        const { navigation } = this.props;
        const details = navigation.getParam('jobDetails', null);
        this.setState({jobDetails: details})
    }*/
    /*render() {
        const { navigation } = this.props;
        const details = navigation.getParam('jobDetails', null);
        //this.setState({jobDetails: jobdetails})
        console.log(details);
        const title = "title";
        const desc = "desc";
        const price = "price";
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{marginTop: 5, alignItems: 'center'}}>
                        <Text h4 style={{fontWeight: '500', fontSize: 28}} >{details.JobName}</Text>
                        <Text h5 style={{color: 'grey'}} >{details.Employer.fullName} an hour</Text>
                    </View>
                    <View style={{flex: 6}}>
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4', marginLeft: 20, marginRight: 20 }} />
                        <ScrollView style={{marginTop: 10}} scrollEventThrottle={16}>
                            <Text h5 style={{color: 'grey'}} >{details.Employer.fullName} an hour</Text>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        );
    }*/

    render() {
        const { navigation } = this.props;
        const details = navigation.getParam('jobDetails', null);
        //this.setState({jobDetails: jobdetails})
        
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{flex: 1}}>
                <ScrollView>
                    <Card 
                    containerStyle = {{marginBottom: 5}}
                    title = {details.JobName}
                    image = {require('../../assets/home.jpg')}>
                        <Text style={{marginBottom: 10}}>This is {details.Details.desc}. There will most likely
                        be more here but lets just leave it at this for now.</Text>
                        <Button
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VERIFY' />
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4' }} />
                        <ListItem
                        title={monthNames[details.JobStartDate.substring(6,7)-1] + ", " + details.JobStartDate.substring(8,10) + ", " + details.JobStartDate.substring(0,4)}
                        leftIcon={<CachedImage source = {require('../../assets/calendar.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <ListItem
                        title={this.convertToTwelve(details.JobStartDate.substring(details.JobStartDate.indexOf('T')+1, details.JobStartDate.indexOf('.')-3))
                            + " " + "-" + " " + this.convertToTwelve(details.JobEndDate.substring(details.JobEndDate.indexOf('T')+1, details.JobEndDate.indexOf('.')-3))}
                            leftIcon={<CachedImage source = {require('../../assets/time.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <ListItem 
                            title={details.Details.rate}
                            leftIcon={<CachedImage source = {require('../../assets/money.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <ListItem
                            title="My Location"
                            leftIcon={<CachedImage source = {require('../../assets/location.png')} style = {{height: 40, width: 40}}/>}
                        />
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4' }} />
                        <ListItem
                            title="Miscellaneous"
                            subtitle={details.Details.misc}
                        />
                        <Divider style={{height: 1, marginTop: 10, backgroundColor: '#c5c7c4' }} />
                        <ListItem
                            containerStyle={{marginBottom: 2}}
                            title={"Shift is " + moment(details.JobStartDate).fromNow()}
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
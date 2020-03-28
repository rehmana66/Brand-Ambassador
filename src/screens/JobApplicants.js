import React, { Component} from 'react';
import { Divider, Card, Button, ListItem } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';
import moment from 'moment';
import CachedImage from '../components/CachedImage';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { FlatList } from 'react-native-gesture-handler';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
const { height, width } = Dimensions.get('window')

class JobApplicants extends Component {

    constructor (props) {
        super(props);
        this.state = {
            applicants: null
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        const { navigation } = this.props;
        var sortApps = navigation.getParam('applicants', null);
        sortApps = sortApps.filter(function(obj) {
            return obj.status == 'progress'
        })
        sortApps.sort(this.compare); 
        this.setState({applicants: sortApps});
    }

    convertToTwelve = (time) => {
        var hour = +time.substr(0, 2);
        var modHour = hour % 12 || 12;
        var ampm = (hour < 12 || hour === 24) ? "AM" : "PM";
        return modHour + time.substr(2, 3) + " " + ampm;
    }

    renderItem = ({ item }) => (
       
        <ListItem
            topDivider
            onPress={() => this.viewApplicant(item)}
            title={item.userID.fullName}
            subtitle="star rating?"
            leftElement={
            <View style={{alignItems: 'center', borderRightWidth: 2, borderRightColor: 'grey', paddingRight: 10}}>
                <Text>{monthNames[item.date.substring(6,7)-1]}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.date.substring(8,10)}</Text>
                <Text>{this.convertToTwelve(item.date.substring(item.date.indexOf('T')+1, item.date.indexOf('.')-3))}</Text>
            </View>}
            bottomDivider
            chevron
        />
    );

    compare(a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        let comp = 0;
        if (dateA > dateB)
            comp = 1;
        else if (dateA < dateB)
            comp = -1;
        return comp;
    }

    viewApplicant(applicant) {
        const {navigation} = this.props
        navigation.navigate('ProcessApplicant', {applicant: applicant});
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{flex: 1}}>
                    <FlatList style={{flex: 1}}
                        data = {this.state.applicants}
                        renderItem = {this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state.applications}
                        ListEmptyComponent={() => (
                            <Text style={{fontWeight: '300', alignSelf: 'center', justifyContent: 'center', marginTop: height/6, fontSize: 25}}>
                                No current applicants...
                            </Text>
                        )}>
                    </FlatList>
                </View>
            </SafeAreaView>
        );
    }
  
}

export default JobApplicants;

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
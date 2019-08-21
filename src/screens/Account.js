import React, { Component } from 'react';
import { View, Image,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Divider from 'react-native-divider';

class Account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.upperContainer}>
                    <View style = {styles.upperContainerRow}>
                        <Text>Shifts Completed</Text>
                        <Text>10</Text>
                    </View>
                    <View style = {styles.upperContainerRow}>
                        <TouchableOpacity style = {styles.imageContainer}>
                            <Image style = {styles.imgStyle}
                                source={require('../../assets/bartty.jpg')}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.upperContainerRow}>
                        <Text>Upcoming Shifts</Text>
                        <Text>2</Text>
                    </View>
                </View>
                <Divider borderColor = '#3f51b5' color = 'black' orientation = 'center'>Deangelo Vickers</Divider>
                <View style = {styles.publicInfoContainer}> 
                    <Text> I don't care what your favorite flavor is. Here's a bowl of ice cream, you either like it or you don't. 
                        That's my attitude right now in this room, that's my attitude on Ice Cream Thursdays. Alright? Clear? Any questions?
                    </Text>
                </View>
                <View style = {{flex: 2}}>
                    <View style = {styles.lineStyle}></View>
                    <TouchableOpacity style = {styles.buttonPanel}>
                                <Text style = {styles.buttonPanelText}>View Shifts</Text>
                                <Image style = {{width: 25, height: 25}} source = {require('../../assets/right-arrow.png')}/>
                    </TouchableOpacity>
                    <View style = {styles.lineStyle}></View>
                    <TouchableOpacity style = {styles.buttonPanel}>
                                <Text style = {styles.buttonPanelText}>View Resume</Text>
                                <Image style = {{width: 25, height: 25}} source = {require('../../assets/right-arrow.png')}/>
                    </TouchableOpacity>
                    <View style = {styles.lineStyle}></View>
                    <TouchableOpacity style = {styles.buttonPanel} onPress = {() => this.props.navigation.navigate('EditAccount')}>
                                <Text style = {styles.buttonPanelText}>Edit Account</Text>
                                <Image style = {{width: 25, height: 25}} source = {require('../../assets/right-arrow.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff3fd',
    },
    lineStyle:{
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#3f51b5',
        margin:5,
        width: '97%',
    },
    imageContainer: {
        alignSelf: 'center',
        height: 81,
        width: 81,
        borderRadius: 40,
        borderWidth: 1,
    },
    imgStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingTop: 10 , 
        flex: 1
    },
    upperContainerRow: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    publicInfoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#dff3fd',
        marginHorizontal: 15,
        marginVertical: 20,
        width : Dimensions.get('window').width - 30,
    },
    buttonPanelText: {
        color: 'black',
        padding: 8,
        fontSize: 16,
    },
    buttonPanel: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#dff3fd', 
        width : Dimensions.get('window').width
    },
});
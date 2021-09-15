import React, { Component } from 'react'
import { Text, View,StyleSheet,  Image } from 'react-native'
import colors from '../assets/colors/colors'
import dayState from '../assets/data/dayState'

const DayStatus=() =>
{
        return (
            <View style={styles.wrapper}>

                <View style={styles.daystatuswarpper}>
                <Image source={dayState.rain}  style={styles.icon} />
                <Image source={dayState.halfsun}  style={styles.icon} />
                <Image source={dayState.sun}   style={styles.icon} />
                </View>

                <View style={styles.daynameswarpper}>
                    <Text style={styles.daynames}>Night</Text>
                    <Text style={styles.daynames}>Noon</Text>
                    <Text style={styles.daynames}>Morning</Text>
                </View>

            </View>

        
        )
    
}

export default DayStatus


const styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        height:130,
      
    },


    daystatuswarpper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
        
    },

    icon:{
     width:120,
     height:120
    },
    daynameswarpper:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        width:400,
        marginLeft:10
 

    },
    daynames:{
        fontSize:17,
        color:colors.text,
        
    }




});
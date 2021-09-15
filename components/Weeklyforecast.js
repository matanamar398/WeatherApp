import React from 'react'
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import colors from '../assets/colors/colors'
import dayState from '../assets/data/dayState'

export default function Weeklyforecast() {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        
        <View style= {styles.dayWrapper}>
            <View style = {styles.row}>
                <Text style={styles.dayname}>{days[0]}</Text>
                <Image source={dayState.rain}  style={styles.icon} /> 
            </View>
            <View style = {styles.row}>
                <Text style={styles.dayname}>{days[1]}</Text>
                <Image source={dayState.rain}  style={styles.icon} /> 
            </View>
            <View style = {styles.row}>
                <Text style={styles.dayname}>{days[2]}</Text>
                <Image source={dayState.halfsun}  style={styles.icon} /> 
            </View>
            <View style = {styles.row}>
                <Text style={styles.dayname}>{days[3]}</Text>
                <Image source={dayState.sun}  style={styles.icon} /> 
            </View>
            <View style = {styles.row}>
                <Text style={styles.dayname}>{days[4]}</Text>
                <Image source={dayState.sun}  style={styles.icon} /> 
            </View>
            <View style = {styles.row}>
                <Text style={styles.dayname}>{days[5]}</Text>
                <Image source={dayState.rain}  style={styles.icon} /> 
            </View>
        </View>
    )
}


// <Text style={styles.dayname}>Sunday</Text>
// <Image source={dayState.rain}  style={styles.icon} />    


const styles= StyleSheet.create({

    icon:{
        width:30,
        height:30,
        marginTop:6,
        marginRight:26
    },
    dayWrapper:{
        width:'100%',
        height:196,
        marginTop:53,
      
    },
    dayname:{
      color:colors.text,
      fontSize:14,
      fontWeight:'bold',
      marginLeft:22,
      marginTop:6
    },
    date:{
        color:colors.text,
        fontSize:14,  
        fontWeight:'bold', 
        marginTop:8,

    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

  

});


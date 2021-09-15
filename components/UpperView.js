import React,{ useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import colors from '../assets/colors/colors';

const UpperView = () => {
    var today = new Date();
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = days[today.getDay()];
    var date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();



    return (
        <View style ={styles.wrapper}>
            
            <View style={styles.timedayview}>
                <Text style ={styles.today}>{dayName}</Text>
                <Text style ={styles.time}>13:05:23</Text>
            </View>

            <View style= {styles.dateview}>
            <Text style ={styles.date}>{date}</Text>
            </View>
                
        
           
       

        
        </View>
    )
}

export default UpperView



const styles = StyleSheet.create({

    wrapper:{
        width:'100%',
        height:60,
        position:'absolute',
        top:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    date:{
      color:colors.text,
      fontSize:22,
    },
   

    today:{
        color:colors.text,
        fontSize:22
    },

    time:{
        color:colors.text,
        opacity:0.8,
        fontSize:16
    },
    timedayview:{
     

  
    },
    dateview:{

    }
    
        


});


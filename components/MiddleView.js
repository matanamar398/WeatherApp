
import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'


const MiddleView = (props) => {
    
    return (
        <View style={[styles.middlediv,{backgroundColor:props.color}]}  > 
             <Text style ={styles.area}>haifa</Text>
            <View style = {styles.degrees}>
                <Text style={styles.degree}>19<Text style={styles.celsius}>°C </Text></Text>
                <Text style={styles.degree}>23<Text style={styles.celsius}>°C </Text></Text>
                <Text style={styles.degree}>29<Text style={styles.celsius}>°C </Text></Text>
            </View>
        </View>
    )
}

export default MiddleView;



// {[styles.bg, {backgroundColor:'#ffff'}]} >
const styles = StyleSheet.create({

    middlediv:{
    width:'100%',
    height:140,
    alignItems:'center', //מכניס את מה שיש בתוך הדיב לאמצע לדוגמא טקסט
    marginTop:120,
    marginLeft:1
    },

    degrees:{
    flexDirection:'row',
    alignItems:'center',  
    },
    degree:{
    padding:38,
    fontWeight:'bold',
    fontSize:34,
    color:'#ffff',
    
    },

    celsius:{
        color:'#ffff',
        fontSize:15,
        
    },
    area:{
        color:colors.text,
        fontSize:33,
        alignItems:'center'
    }

});








import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors/colors';
import MiddleView from './components/MiddleView';
import UpperView from './components/UpperView';
import DayStatus from './components/DayStatus';
import Weeklyforecast from './components/Weeklyforecast';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Upper div contain time,date,area,day */}
      <UpperView/>

      {/* center div with degrees */}
      <MiddleView color = {colors.centerdiv} text = {colors.text}/>

      {/* dat status with icons */}
      <DayStatus/>

      {/* Top line */}
      <View style={styles.line}/>

      {/* Buttom line */}
      <View style={styles.bottomline}/>

      <Weeklyforecast/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
  },
  line:{
    backgroundColor:colors.centerdiv,
    width:'100%',
    height:0.8,
    position:'absolute',
    top:450,
    opacity:0.8

  },
  bottomline:{
    backgroundColor:colors.centerdiv,
    width:'100%',
    height:0.8,
    position:'absolute',
    top:660,
    opacity:0.8

  },

});

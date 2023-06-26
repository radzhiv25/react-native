import React from "react";
import {View, Text, SafeAreaView ,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Text>Current Weather</Text> */}
        <Feather name='sun' size={100} color="#1262ab" />
        <Text style={styles.temp}>25</Text>
        <Text style={styles.feel}>Feels like 34</Text>
        <Text style={styles.highLow}>High: 37 and Low: 25</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text> It's rainy.</Text>
        <Text> It would be great if you carry your Raincoat.</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper : {
    backgroundColor :'#ADD8E6',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feel: {
    fontSize : 30
  },
  highLow: {
    fontSize: 20
  },
  bodyWrapper: {
    padding: 20,
    color: 'white',
    textAlign: 'center'
  }
})
export default CurrentWeather
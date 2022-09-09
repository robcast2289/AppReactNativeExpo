import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={[styles.card, styles.shadowProp, styles.elevation]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        margin: 15,
        padding:15,
        borderWidth:1,
        borderRadius:8,
        borderColor:'rgb(200,200,200)',
        backgroundColor:'#fff',
    },
    elevation: {
      elevation: 3,
        shadowColor: '#171717',
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
})
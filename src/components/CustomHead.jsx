import { View, Text, Button } from 'react-native'
import React from 'react'
import {  } from 'react-native-web'

const CustomHead = (props) => {
    console.log(props);
  return (
    <View>
      <Text>CustomHead</Text>
      <Button title='Menu' onPress={()=>props.navigation.openDrawer()} />
      <Button title='Atras' onPress={()=>props.navigation.goBack()} />
    </View>
  )
}

export default CustomHead
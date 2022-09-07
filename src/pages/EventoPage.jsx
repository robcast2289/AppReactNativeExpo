import { View, Text } from 'react-native'
import React from 'react'
import EventoCard from '../components/EventoCard'

const EventoPage = (props) => {
    console.log(props);
    let singleEvent = props.route.params.singleEvent;
  return (
    <View>
        <EventoCard {...{singleEvent}}/>        
    </View>
  )
}

export default EventoPage
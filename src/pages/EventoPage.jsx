import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from '../components/card/Card';
import EventoCard from '../components/EventoCard'

import { ScrollView } from 'react-native-gesture-handler';
import Incluye from '../components/eventoDetalle/Incluye';
import Equipo from '../components/eventoDetalle/Equipo';
import { DetalleLogin } from '../services/eventos';
import CustomHead from '../components/CustomHead';

const apiURL = 'https://eventos.galileo.edu/api/detallelogin/';

const EventoPage = (props) => {
    let singleEvent = props.route.params.singleEvent;

    const [event, setEvent] = useState([]);

    useEffect(()=>{
        DetalleLogin(singleEvent.Evento).then(evento => setEvent(evento))
    }, [])


  return (
    <ScrollView>
    {/* <CustomHead {...props}/> */}
    <View>
        <EventoCard {...{singleEvent}}/>    
        {/* Incluye */}
        {
            ((Array.isArray(event.Detalle) && event.Detalle.length > 0) ? 
            <Incluye {...event}/>
            : null)
        }
        {/* Horario */}
        {
            ((Array.isArray(event.Horario) && event.Horario.length > 0) ? <Text>Hola</Text> : null)
        }
        {/* Nuestro Equipo */}
        {
            ((Array.isArray(event.Personal) && event.Personal.length > 0) ? <Equipo {...event}/> : null)
        }
    </View>
    </ScrollView>
  )
}

export default EventoPage



const styles = StyleSheet.create({
    separador:{
        height:1,
        backgroundColor:'rgb(200,200,200)',
        marginTop:10,
        marginBottom:10
    },
    header:{
        flexDirection:'row',
    }
})
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const dateFormat = (date) => {
    var day = new Date(date).getDate()
    var month = new Date(date).getMonth()
    var year = new Date(date).getFullYear()
    return day + '/' + month + '/' + year
}

const EventoCard = ({singleEvent}) => {
  return (
    <View key={singleEvent.Evento} style={styles.container} >
            <View>
                <Image style={styles.image} source={{uri: `https://eventos.galileo.edu${singleEvent.Fotoevento}`}} />
            </View>
            <View style={{}}>
                <Text style={styles.titleEvent}>{singleEvent.Tituloevento}</Text>
            </View>
            <View style={styles.viewRow}>
                <View style={styles.viewRow}>
                    <Text>Inicia: </Text>
                    <Text style={styles.fontBold}>{dateFormat(singleEvent.Fechaini)}</Text>
                </View>
                <View style={styles.viewRow}>
                    <Text>Termina: </Text>
                    <Text style={styles.fontBold}>{dateFormat(singleEvent.Fechafin)}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', paddingTop:8}}>
                <Ionicons name="calendar-outline" size={15} />
                <Text> Último día para asignarse: </Text>                        
                <Text style={[styles.fontBold, {color:'red'}]}>{dateFormat(singleEvent.Finasignacion)}</Text>                        
            </View>                    
            <View style={{flexDirection:'row', paddingTop:8}}>
                <Ionicons name="card-outline" size={15} />
                <Text style={styles.fontBold}> Q</Text>                        
                <Text style={styles.fontBold}>{singleEvent.Precio}</Text>                        
            </View>
        </View>
  )
}

export default EventoCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'rgb(242,242,242)'
    },
    image:{
        width:'100%', 
        height:180,
        borderRadius:8,
    },
    titleEvent:{
        fontSize:20, 
        textAlign:'center', 
        fontWeight:'bold'
    },
    viewRow:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingTop:8
    },
    fontBold:{
        fontWeight:'bold'
    },
    fontBoldWhite:{
        fontWeight:'bold',
        color: 'white'
    },
    separador:{
        height:1,
        backgroundColor:'rgb(200,200,200)',

    },
    swip:{
        width:110,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#009798'
    }
})
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import EventoCard from './EventoCard';
//import GestureHandler from 'expo';
//const { Swipeable } = GestureHandler;


const rightActions = ()=>{
    return (
        <View style={styles.swip}>
            <Ionicons name="cart-outline" size={35} color='white'/>
            <Text style={styles.fontBoldWhite}>Agregar</Text>
            <Text style={styles.fontBoldWhite}>al</Text>
            <Text style={styles.fontBoldWhite}>carrito</Text>
        </View>
    )
}

const EventoCardList = ({singleEvent, navigation}) => {
  return (
    <Swipeable
        renderRightActions={rightActions}
    >
        <TouchableHighlight 
        onPress={() => navigation.navigate('Evento',{singleEvent})}
        >
            <EventoCard {...{singleEvent}} />
        </TouchableHighlight>
    </Swipeable>
  )
}

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
        borderRadius:8
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

export default EventoCardList


export const Separador = ()=>{
    return <View style={styles.separador}></View>
}
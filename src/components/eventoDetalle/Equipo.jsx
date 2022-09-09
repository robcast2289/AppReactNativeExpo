import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Card from '../card/Card';
import Ionicons from '@expo/vector-icons/Ionicons';

const Equipo = ({Personal}) => {
  return (
    <Card>
        <View style={styles.header}>
            <Ionicons name="people" size={15} />
            <Text style={{fontWeight:'bold'}}> Nuestro Equipo</Text>
        </View>
        <View style={styles.separador}/>
        <View>
            {
                Personal?.map(ev=><Text key={ev.Correlativo} style={{fontSize:12}}>{ev.Nombre}</Text>)
            }
        </View>
    </Card>
  )
}

export default Equipo


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
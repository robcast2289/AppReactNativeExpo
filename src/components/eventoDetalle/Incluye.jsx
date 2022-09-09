import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Card from '../card/Card';
import Ionicons from '@expo/vector-icons/Ionicons';

const Incluye = ({Detalle}) => {
  return (
    <Card>
        <View style={styles.header}>
            <Ionicons name="calendar-outline" size={15} />
            <Text style={{fontWeight:'bold'}}> Incluye</Text>
        </View>
        <View style={styles.separador}/>
        <View>
            {
                Detalle?.map(ev=><Text key={ev.Correlativo} style={{fontSize:12}}>{ev.Detalle}</Text>)
            }
        </View>
    </Card>
  )
}

export default Incluye


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
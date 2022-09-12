import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
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
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={500}
            data={Personal}
            keyExtractor={(item)=>item}
            renderItem={(item,index)=>{
                console.log(item);
                return(
                    <View key={item.item.Correlativo} style={{alignItems:"center"}}>
                        <Image source={{uri:`https://eventos.galileo.edu${item.item.FOTO}`}} style={{width:150, height:200}}/>                        
                        <Text>{item.item.Nombre}</Text>
                    </View>
                )
            }}
            >

            </FlatList>
            {/* {
                Personal?.map(ev=><Text key={ev.Correlativo} style={{fontSize:12}}>{ev.Nombre}</Text>)
            } */}
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
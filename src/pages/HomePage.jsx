import react, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

const apiURL = 'https://eventos.galileo.edu/api/eventoslogin';

const dateFormat = (date) => {
    var day = new Date(date).getDate()
    var month = new Date(date).getMonth()
    var year = new Date(date).getFullYear()
    return day + '/' + month + '/' + year
}

const HomePage = () => {
    const [events, setEvent] = useState([]);

    useEffect(()=>{
        fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            const eventos = response.Eventos;
            console.log(eventos);
            setEvent(eventos);
        })
    }, [])

    return (        
        <FlatList style={styles.container}
            data={events}
            renderItem={({item:signleEvent})=>(
                <View key={signleEvent.Evento} style={{paddingBottom: 30}}>
                    <View >
                        <Image style={{width:'100%', height:150, borderRadius:8}} source={{uri: 'https://eventos.galileo.edu'+signleEvent.Fotoevento}} />
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold'}}>{signleEvent.Tituloevento}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                            <Text>Inicia: </Text>
                            <Text style={{fontWeight:'bold'}}>{dateFormat(signleEvent.Fechaini)}</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                            <Text>Termina: </Text>
                            <Text style={{fontWeight:'bold'}}>{dateFormat(signleEvent.Fechafin)}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Último día para asignarse: </Text>                        
                        <Text style={{color:'red', fontWeight:'bold'}}>{dateFormat(signleEvent.Finasignacion)}</Text>                        
                    </View>                    
                    <Text>Adios</Text>
                </View>
            )}
        />        
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 15
    }
})

export default HomePage
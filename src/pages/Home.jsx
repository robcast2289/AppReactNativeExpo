import react, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

const apiURL = 'https://eventos.galileo.edu/api/eventoslogin';

const Home = () => {
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
        <View>
            {events.map(signleEvent => (
                <View style={{padding:20}}>
                    <View style={{flex:1}}>
                        <Image style={{width:200, height:50}} source={{uri: 'https://eventos.galileo.edu'+signleEvent.Fotoevento}} />
                    </View>
                    <Text>{signleEvent.Tituloevento}</Text>
                </View>
            ))}            
        </View>
    )
}

export default Home
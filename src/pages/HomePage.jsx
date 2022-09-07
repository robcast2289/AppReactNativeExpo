import react, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, Button, StyleSheet } from "react-native";
import EventoCardList, { Separador } from "../components/EventoCardList";

import EventoPage from "./EventoPage";

const apiURL = 'https://eventos.galileo.edu/api/eventoslogin';

const HomePage = ({ navigation }) => {
    const [events, setEvent] = useState([]);

    useEffect(()=>{
        fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const eventos = response.Eventos;
            setEvent(eventos);
        })
    }, [])

    return (        
        (events == null ?
            <View>
                <Text>Holas</Text>
                <Button
                    title="Ir al detalle"
                    onPress={() => navigation.navigate('Evento')}
                />
            </View>
            :
            <FlatList style={styles.container}
            data={events}
                renderItem={({item:singleEvent})=>(
                    <EventoCardList {...{singleEvent,navigation}}/>
                )}
                ItemSeparatorComponent={()=><Separador/>}
            />        
            )
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    }
})

export default HomePage
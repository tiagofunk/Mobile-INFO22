import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';


export default function App() {
    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)
    const [altitude, setAltitude] = useState(0.0)
    const [pais, setPais] = useState("")

    useEffect(() => {
        var buscarPais = async (latitude, longitude) => {
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
            console.log(url)

            try {
                const response = await axios.get(url)
                const address = response.data.address
                
                if (address && address.country) {
                    return address.country; // Retorna o nome do país
                }
            } catch (error) {
                console.error(error);
            }
        
            return null;
        }

        var buscarCoordendadas = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Sem premissão');
                return;
            }

            let location = await Location.getCurrentPositionAsync({})            
            const lat = location.coords.latitude;
            const long = location.coords.longitude;
            const alt = location.coords.altitude;

            setLatitude(lat);
            setLongitude(long);
            setAltitude(alt);
            setPais( await buscarPais( lat, long ) )
        }
        buscarCoordendadas()
        
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Coordenadas</Text>
            <Text style={styles.paragraph}>Latitude:{latitude!=0?latitude:"..."}</Text>
            <Text style={styles.paragraph}>Longitude:{longitude!=0?longitude:"..."}</Text>
            <Text style={styles.paragraph}>Altitude:{altitude!=0?altitude:"..."}</Text>
            <Text style={styles.paragraph}></Text>
            <Text style={styles.paragraph}>Você esta no hemisfério {latitude<0?"Sul":"Norte"}</Text>
            <Text style={styles.paragraph}>Você esta no hemisfério {longitude<0?"Ocidental":"Oriental"}</Text>
            <Text style={styles.paragraph}></Text>
            <Text style={styles.paragraph}>{pais?pais:"Carregando..."}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});

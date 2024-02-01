import { View, Text, StyleSheet } from 'react-native'
import WeatherIcon from './WeatherIcon'
import { WeatherForcast } from '../types'

interface Props {
    weatherForecast: WeatherForcast
}

export default function DailyForecast({ weatherForecast }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.date}>
                <WeatherIcon forecastIcon={weatherForecast.ForecastIcon} />
                <Text style={styles.text}>{weatherForecast.week}</Text>
            </View>
            <View style={styles.temp}>
                <Text style={styles.text}>
                    {weatherForecast.forecastMintemp.value}°
                </Text>
                <Text style={styles.text}>
                    {weatherForecast.forecastMaxtemp.value}°
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 4,
        padding: 4,
    },
    text: {
        marginRight: 10,
        color: '#fff',
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
    },
    temp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: 100,
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
})

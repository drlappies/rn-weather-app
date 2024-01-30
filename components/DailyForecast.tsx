import { View, Text, StyleSheet } from 'react-native'
import WeatherIcon from './WeatherIcon'
import { WeatherForcast } from '../types'

interface Props {
    weatherForecast: WeatherForcast
}

export default function DailyForecast({ weatherForecast }: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.dateText]}>
                {weatherForecast.week}
            </Text>
            <WeatherIcon forecastIcon={weatherForecast.ForecastIcon} />

            <Text style={[styles.text, styles.mintempText]}>
                {weatherForecast.forecastMintemp.value}°
            </Text>
            <Text style={styles.text}>
                {weatherForecast.forecastMaxtemp.value}°
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 100,
    },
    text: {
        color: '#fff',
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
    },
    mintempText: {
        opacity: 0.5,
    },
    dateText: {},
})

import { View } from 'react-native'
import { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Palette } from '../theme'
import { HomeScreenNavigationProps } from '../types'
import Screen from '../components/Screen'
import Card from '../components/Card'
import { WeatherDataContext } from '../contexts/WeatherDataContext'
import { LocationContext } from '../contexts/LocationContext'

import { LocalForecastRouteName } from './LocalForecastScreen'
import DailyForecast from '../components/DailyForecast'
import { NineDayForecastRouteName } from './NineDayForecastScreen'

export default function HomeScreen() {
    const {
        currentWeatherReport,
        localWeatherForecast,
        nineDayWeatherForecast,
    } = useContext(WeatherDataContext)
    const { location } = useContext(LocationContext)
    const navigation = useNavigation<HomeScreenNavigationProps>()

    const date = new Date()

    return (
        <Screen style={styles.screen}>
            <Text style={styles.date}>
                {date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日
            </Text>
            <Text style={styles.location}>
                {location?.coords.latitude}, {location?.coords.longitude},{' '}
                {location?.coords.altitude}
            </Text>
            <Text style={styles.location}>
                {currentWeatherReport?.data?.temperature.data[0].place}
            </Text>
            <Text style={styles.temp}>
                {currentWeatherReport?.data?.temperature.data[0].value}°
            </Text>
            <Card
                title={localWeatherForecast?.data?.forecastPeriod}
                content={localWeatherForecast?.data?.forecastDesc}
                onPress={() => navigation.navigate(LocalForecastRouteName)}
            />
            <Card
                title={'九天天氣預報'}
                content={
                    <View>
                        {nineDayWeatherForecast?.data?.weatherForecast.map(
                            (weatherForecast, i) => (
                                <DailyForecast
                                    key={i}
                                    weatherForecast={weatherForecast}
                                />
                            )
                        )}
                    </View>
                }
                onPress={() => navigation.navigate(NineDayForecastRouteName)}
            />
        </Screen>
    )
}

export const HomeScreenRouteName = 'Home'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: Palette.blue_800,
    },
    date: {
        textAlign: 'center',
        fontFamily: 'Inter_500Medium',
        fontSize: 28,
        color: '#fff',
        marginVertical: 4,
    },
    location: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Inter_300Light',
        marginVertical: 2,
    },
    temp: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Inter_300Light',
    },
    forecast: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

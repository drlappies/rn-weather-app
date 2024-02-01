import { ScrollView, View } from 'react-native'
import { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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
    const insets = useSafeAreaInsets()

    const date = new Date()

    return (
        <View style={[styles.screen, { paddingTop: insets.top }]}>
            <ScrollView>
                <Text style={styles.date}>
                    {date.getFullYear()}年{date.getMonth() + 1}月
                    {date.getDate()}日
                </Text>
                {location && (
                    <Text style={styles.location}>
                        {location?.coords.latitude},{' '}
                        {location?.coords.longitude},{' '}
                        {location?.coords.altitude}
                    </Text>
                )}
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
                <Text style={styles.title}>九天天氣預報</Text>
                {nineDayWeatherForecast?.data?.weatherForecast.map(
                    (weatherForecast, i) => (
                        <DailyForecast
                            key={i}
                            weatherForecast={weatherForecast}
                        />
                    )
                )}
            </ScrollView>
        </View>
    )
}

export const HomeScreenRouteName = 'Home'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Palette.blue_800,
        paddingLeft: 12,
        paddingRight: 12,
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
    title: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Inter_400Regular',
        marginVertical: 8,
    },
})

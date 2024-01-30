import { StyleSheet } from 'react-native'
import { useContext } from 'react'
import { WeatherDataContext } from '../contexts/WeatherDataContext'
import Screen from '../components/Screen'
import Card from '../components/Card'
import { Palette } from '../theme'

export default function LocalForecastScreen() {
    const { localWeatherForecast } = useContext(WeatherDataContext)

    console.log(localWeatherForecast)

    return (
        <Screen style={styles.screen}>
            <Card
                title={localWeatherForecast?.data?.forecastPeriod}
                content={localWeatherForecast?.data?.forecastDesc}
            />
            <Card content={localWeatherForecast?.data?.generalSituation} />
            <Card content={localWeatherForecast?.data?.outlook} />
        </Screen>
    )
}

export const LocalForecastRouteName = 'LocalForecast'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: Palette.blue_800,
    },
})

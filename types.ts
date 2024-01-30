import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export enum Lang {
    EN = 'en',
    TC = 'tc',
    SC = 'sc',
}

export enum DataType {
    FLW = 'flw',
    FND = 'fnd',
    RHRREAD = 'rhrread',
    WARNSUM = 'warnsum',
    WARNING_INFO = 'warninginfo',
    SWT = 'swt',
}

export interface QueryParams {
    dataType?: string
    lang?: Lang
}

export interface LocalWeatherForecast {
    generalSituation: string
    tcInfo: string
    fireDangerWarning: string
    forecastPeriod: string
    forecastDesc: string
    outlook: string
    updateTime: string
}

export interface ForecastRh {
    uint: string
    value: number
}

export interface ForecastTemp {
    uint: string
    value: number
}

export interface WeatherForcast {
    ForecastIcon: number
    PSR: string
    forecastDate: string
    forecastMaxrh: ForecastRh
    forecastMinrh: ForecastRh
    forecastMintemp: ForecastTemp
    forecastMaxtemp: ForecastTemp
    forecastWeather: string
    forecastWind: string
    week: string
}

export interface NineDayWeatherForecast {
    weatherForecast: WeatherForcast[]
    forecastDate: string
    forecastWeather: string
    forecastMaxTemp: string
    forecastMinTemp: string
    week: string
    forecastWind: string
    forecastMaxrh: string
    forecastMinrh: string
    ForecastIcon: string
    PSR: string
}

export interface LightningData {
    place: string
    occur: boolean
}

export interface Lightning {
    data: LightningData
    startTime: string
    endTime: string
}

export interface RainfallData {
    unit: string
    place: string
    max: number
    min: number
    main: boolean
}

export interface Rainfall {
    data: RainfallData[]
    startTime: string
    endTime: string
}

export interface UVIndexData {
    place: string
    value: string
    desc: string
    message: string
}

export interface UVIndex {
    data: UVIndex
    recordDesc: string
}

export interface TemperatureData {
    place: string
    value: number
    unit: string
}

export interface Temperature {
    data: TemperatureData[]
    recordTime: string
}

export interface HumidityData {
    unit: string
    value: number
    place: string
}

export interface Humidity {
    data: HumidityData[]
    recordTime: string
}

export interface CurrentWeatherReport {
    lightning: Lightning
    rainfall: Rainfall
    temperature: Temperature
    humidity: Humidity
    icon: string
    iconUpdateTime: string
    uvindex: UVIndex
    updateTime: string
    warningMessage: string[]
    rainstormReminder: string
    specialWxTips: string[]
    tcmessage: string[]
    mintempFrom00To09: string
    rainfallFrom00To12: string
    rainfallLastMonth: string
    rainfallJanuaryToLastMonth: string
}

export type RootStackParamList = {
    Home: undefined
    LocalForecast: undefined
    NineDayForecast: undefined
}

export type HomeScreenNavigationProps = BottomTabNavigationProp<
    RootStackParamList,
    'Home'
>

export type LocalForecastScreenNavigationProps = BottomTabNavigationProp<
    RootStackParamList,
    'LocalForecast'
>

export type NineDayForecastScreenNavigationProps = BottomTabNavigationProp<
    RootStackParamList,
    'NineDayForecast'
>

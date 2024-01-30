import {
    QueryParams,
    LocalWeatherForecast,
    NineDayWeatherForecast,
    CurrentWeatherReport,
    DataType,
} from '../types'

export const getLocalWeatherForecast = async ({
    lang,
}: QueryParams): Promise<LocalWeatherForecast> => {
    const response = await fetch(
        `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${DataType.FLW}&lang=${lang}`
    )

    return response.json()
}

export const getNineDayWeatherForecast = async ({
    lang,
}: QueryParams): Promise<NineDayWeatherForecast> => {
    const response = await fetch(
        `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${DataType.FND}&lang=${lang}`
    )

    return response.json()
}

export const getCurrentWeatherReport = async ({
    lang,
}: QueryParams): Promise<CurrentWeatherReport> => {
    const response = await fetch(
        `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${DataType.RHRREAD}&lang=${lang}`
    )

    return response.json()
}

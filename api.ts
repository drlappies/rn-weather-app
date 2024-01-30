import { QueryParams } from './types'

export const getWeather = async <T>({
    lang,
    dataType,
}: QueryParams): Promise<T> => {
    const response = await fetch(
        `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${dataType}&lang=${lang}`
    )

    return response.json()
}

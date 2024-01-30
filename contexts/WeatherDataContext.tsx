import { createContext } from 'react'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import {
    getCurrentWeatherReport,
    getLocalWeatherForecast,
    getNineDayWeatherForecast,
} from '../apis/weather'
import {
    CurrentWeatherReport,
    Lang,
    LocalWeatherForecast,
    NineDayWeatherForecast,
} from '../types'

interface Context {
    currentWeatherReport?: UseQueryResult<CurrentWeatherReport>
    localWeatherForecast?: UseQueryResult<LocalWeatherForecast>
    nineDayWeatherForecast?: UseQueryResult<NineDayWeatherForecast>
}

interface Props {
    children: React.ReactNode
}

export const WeatherDataContext = createContext<Context>({})

export default function WeatherDataContextProvider({ children }: Props) {
    const currentWeatherReport = useQuery({
        queryKey: ['currentWeatherReport'],
        queryFn: () => getCurrentWeatherReport({ lang: Lang.TC }),
    })
    const localWeatherForecast = useQuery({
        queryKey: ['localWeatherForecast'],
        queryFn: () => getLocalWeatherForecast({ lang: Lang.TC }),
    })
    const nineDayWeatherForecast = useQuery({
        queryKey: ['nineDayWeatherForecast'],
        queryFn: () => getNineDayWeatherForecast({ lang: Lang.TC }),
    })

    return (
        <WeatherDataContext.Provider
            value={{
                currentWeatherReport,
                localWeatherForecast,
                nineDayWeatherForecast,
            }}
        >
            {children}
        </WeatherDataContext.Provider>
    )
}

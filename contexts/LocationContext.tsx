import { createContext, useState, useCallback, useEffect } from 'react'
import { Platform } from 'react-native'
import {
    LocationObject,
    PermissionStatus,
    getCurrentPositionAsync,
    useForegroundPermissions,
} from 'expo-location'

interface Context {
    location?: LocationObject
}

interface Props {
    children: React.ReactNode
}

export const LocationContext = createContext<Context>({})

export default function LocationContextProvider({ children }: Props) {
    const [location, setLocation] = useState<LocationObject>()
    const [status, requestPermission] = useForegroundPermissions()

    const getPermission = useCallback(async () => {
        if (status?.status === PermissionStatus.GRANTED) {
            return
        }

        await requestPermission()
    }, [status?.status])

    const getLocation = useCallback(async () => {
        if (
            status?.status !== PermissionStatus.GRANTED ||
            Platform.OS === 'android'
        ) {
            return
        }

        const location = await getCurrentPositionAsync()
        setLocation(location)
    }, [status?.status])

    useEffect(() => {
        getPermission()
        getLocation()
    }, [getPermission, getLocation])

    return (
        <LocationContext.Provider
            value={{
                location,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

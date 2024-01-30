import { useCallback, useEffect, useMemo } from 'react'
import AppLoading from 'expo-app-loading'
import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import {
    useFonts,
    Inter_900Black,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
} from '@expo-google-fonts/inter'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen, { HomeScreenRouteName } from './screens/HomeScreen'
import WeatherDataContextProvider from './contexts/WeatherDataContext'
import LocationContextProvider from './contexts/LocationContext'
import LocalForecastScreen, {
    LocalForecastRouteName,
} from './screens/LocalForecastScreen'
import NineDayForecastScreen, {
    NineDayForecastRouteName,
} from './screens/NineDayForecastScreen'
import { RootStackParamList } from './types'

const Tab = createBottomTabNavigator<RootStackParamList>()
const queryClient = new QueryClient()

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    })

    const isAppReady = useMemo(() => {
        return fontsLoaded
    }, [fontsLoaded])

    if (!isAppReady) {
        return <AppLoading />
    }

    return (
        <>
            <StatusBar style={'light'} />
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <LocationContextProvider>
                        <WeatherDataContextProvider>
                            <NavigationContainer>
                                <Tab.Navigator
                                    initialRouteName={HomeScreenRouteName}
                                    screenOptions={{
                                        headerShown: false,
                                    }}
                                >
                                    <Tab.Screen
                                        name={HomeScreenRouteName}
                                        component={HomeScreen}
                                        options={{
                                            tabBarLabel: '主頁',
                                            tabBarIcon: () => (
                                                <Ionicons name={'home'} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen
                                        name={LocalForecastRouteName}
                                        component={LocalForecastScreen}
                                        options={{
                                            tabBarLabel: '今日預測',
                                            tabBarIcon: () => (
                                                <Ionicons name={'cloud'} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen
                                        name={NineDayForecastRouteName}
                                        component={NineDayForecastScreen}
                                        options={{
                                            tabBarLabel: '九天天氣預報',
                                            tabBarIcon: () => (
                                                <Ionicons name={'sunny'} />
                                            ),
                                        }}
                                    />
                                </Tab.Navigator>
                            </NavigationContainer>
                        </WeatherDataContextProvider>
                    </LocationContextProvider>
                </QueryClientProvider>
            </SafeAreaProvider>
        </>
    )
}

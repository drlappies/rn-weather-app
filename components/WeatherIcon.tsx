import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native'

interface Props {
    forecastIcon: number
}

export default function WeatherIcon({ forecastIcon }: Props) {
    const map = new Map<number, ImageSourcePropType>([
        [50, require(`../assets/icons/pic50.png`)],
        [51, require(`../assets/icons/pic51.png`)],
        [52, require(`../assets/icons/pic52.png`)],
        [53, require(`../assets/icons/pic53.png`)],
        [54, require(`../assets/icons/pic54.png`)],
        [60, require(`../assets/icons/pic60.png`)],
        [62, require(`../assets/icons/pic62.png`)],
        [63, require(`../assets/icons/pic63.png`)],
        [64, require(`../assets/icons/pic64.png`)],
        [65, require(`../assets/icons/pic65.png`)],
        [70, require(`../assets/icons/pic70.png`)],
        [71, require(`../assets/icons/pic71.png`)],
        [72, require(`../assets/icons/pic72.png`)],
        [73, require(`../assets/icons/pic73.png`)],
        [74, require(`../assets/icons/pic74.png`)],
        [75, require(`../assets/icons/pic75.png`)],
        [76, require(`../assets/icons/pic76.png`)],
        [77, require(`../assets/icons/pic77.png`)],
        [80, require(`../assets/icons/pic80.png`)],
        [81, require(`../assets/icons/pic81.png`)],
        [82, require(`../assets/icons/pic82.png`)],
        [83, require(`../assets/icons/pic83.png`)],
        [84, require(`../assets/icons/pic84.png`)],
        [85, require(`../assets/icons/pic85.png`)],
        [90, require(`../assets/icons/pic90.png`)],
        [91, require(`../assets/icons/pic91.png`)],
        [92, require(`../assets/icons/pic92.png`)],
        [93, require(`../assets/icons/pic93.png`)],
    ])

    return <Image style={styles.icon} source={map.get(forecastIcon)} />
}

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    },
})

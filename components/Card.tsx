import { View, Pressable, StyleSheet, Text } from 'react-native'
import { Palette } from '../theme'

interface Props {
    title?: React.ReactNode
    content?: React.ReactNode
    onPress?: () => void
    style?: Object
}

export default function Card({ title, content, onPress, style }: Props) {
    return (
        <View style={[styles.card, style]}>
            <Pressable onPress={onPress}>
                {title && <Text style={styles.title}>{title}</Text>}
                {content && <Text style={styles.content}>{content}</Text>}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        backgroundColor: Palette.blue_700,
        borderRadius: 10,
        marginVertical: 8,
    },
    title: {
        color: '#fff',
        opacity: 0.5,
        marginVertical: 6,
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
    },
    content: {
        color: '#fff',
        fontFamily: 'Inter_300Light',
        fontSize: 18,
    },
})

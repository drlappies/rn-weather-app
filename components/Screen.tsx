import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
    children: React.ReactNode
    style?: Object
}

export default function Screen({ children, style }: Props) {
    const insets = useSafeAreaInsets()

    return (
        <ScrollView
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                ...style,
            }}
        >
            {children}
        </ScrollView>
    )
}

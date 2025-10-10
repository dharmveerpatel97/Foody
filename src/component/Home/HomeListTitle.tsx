import { useThemeContext } from '@utils/theme';
import { View, Text } from 'react-native'
import { HomeListTitleStyle } from 'src/styles';

const HomeListTitle = ({ title }: { title: string }) => {
    const theme = useThemeContext()
    const styles = HomeListTitleStyle(theme);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{'View All'}</Text>
        </View>
    )
}

export default HomeListTitle
import { useThemeContext } from '@utils/theme';
import { View, Text } from 'react-native'
import { HomeListTitleStyle } from 'src/styles';
import { CustomText } from '../common';

const HomeListTitle = ({ title }: { title: string }) => {
    const theme = useThemeContext()
    const styles = HomeListTitleStyle(theme);
    return (
        <View style={styles.container}>
            <CustomText variant='h5' color={theme.colors.text} >{title}</CustomText>
            <CustomText variant='h6' color={theme.colors.primary} style={{textDecorationLine:'underline'}}>{'View All'}</CustomText>
        </View>
    )
}

export default HomeListTitle
import { View } from 'react-native'
import { CustomTextInput } from '../common'
import { imagePath } from 'src/assets'
import { HomeSearchStyle } from 'src/styles'
import { useThemeContext } from '@utils/theme'

const HomeSearch = () => {
    const theme = useThemeContext()
    const styles = HomeSearchStyle(theme);
    return (
        <View style={styles.container}>
            <CustomTextInput
                leftIcon={imagePath.search_icon}
                placeholder='Search recipes...'
                errortext=""
                onChangeText={(val) => { console.log(val) }}
            />
        </View>
    )
}

export default HomeSearch
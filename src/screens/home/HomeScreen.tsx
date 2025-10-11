import { Container, CustomText, HomeSearch } from 'src/component'
import MainList from './MainList'
import { Image, View } from 'react-native'
import { imagePath } from 'src/assets'
import { useThemeContext } from '@utils'
export default function HomeScreen() {
  const theme = useThemeContext()
  return (
    <Container fullScreen={false}>
      <View style={{ flexDirection: 'row' }} >
        <View>
          <CustomText variant='h6' color={theme.colors.lightText} fontFamily='Okra-Medium' >Hello Amma?</CustomText>
          <CustomText variant='h5' fontFamily='Okra-Bold'>What do you want to {'\n'}cook today?</CustomText>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderWidth: 1, width: 50, height: 50, marginLeft: 'auto',marginTop:4 }} >
          <Image source={imagePath.user} style={{ width: 30, height: 30, marginLeft: 'auto', marginRight: 10 }} />
        </View>
      </View>
      <HomeSearch />
      <MainList />
    </Container>
  )
}
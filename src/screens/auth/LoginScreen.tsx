import { Container, CustomButton, CustomTextInput } from 'src/component'
import { imagePath, useThemeContext } from '@utils'
import { ImageBackground, ScrollView, View } from 'react-native'
import { LoginScreenStyles } from 'src/styles';

export default function LoginScreen() {
  const theme = useThemeContext()
  const styles = LoginScreenStyles(theme);
  return (
    <Container fullScreen paddingHorizontal={0}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground
          source={imagePath.login_watermark}
          style={styles.imageConatainer}
        >
          <View style={styles.transparentContaine}>
            <View style={styles.maincontainer}>
              <CustomTextInput
                leftIcon={imagePath.user}
                placeholder='Full Name'
                errortext=""
                onChangeText={(val) => { console.log(val) }}
              />
              <CustomTextInput
                leftIcon={imagePath.email}
                placeholder='Email Address'
                errortext=""
                onChangeText={(val) => { console.log(val) }}
              />
              <CustomTextInput
                leftIcon={imagePath.lock}
                placeholder='Password'
                rightIcon={imagePath.eye_open}
                errortext=""
                secureTextEntry
                onChangeText={(val) => { console.log(val) }}
              />
              <CustomTextInput
                leftIcon={imagePath.lock}
                rightIcon={imagePath.eye_open}
                placeholder='Confirm Password'
                secureTextEntry
                errortext=""
                onChangeText={(val) => { console.log(val) }}
              />
              
              <View style={{ marginVertical: 40 }} />
              <CustomButton
                title="Continue"
                isLoading={false}
                isGradient
                onPress={() => console.log("Pressed")}
              />
            </View>
          </View>
        </ImageBackground>
        {/*  */}
      </ScrollView>
    </Container>
  )
}
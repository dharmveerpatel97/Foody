import { Container, CustomButton, CustomTextInput } from 'src/component'
import { imagePath, useThemeContext } from '@utils'
import { ScrollView } from 'react-native'

export default function SignupScreen() {
  const theme = useThemeContext()
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>

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
          onChangeText={(val) => { console.log(val) }}
        />
        <CustomTextInput
          leftIcon={imagePath.lock}
          rightIcon={imagePath.eye_open}
          placeholder='Confirm Password'
          errortext=""
          onChangeText={(val) => { console.log(val) }}
        />
      </ScrollView>
      <CustomButton
        title="Continue"
        isLoading={false}
        isBordered
        borderColor={theme.colors.primary}
        onPress={() => console.log("Pressed")}
      />
    </Container>
  )
}
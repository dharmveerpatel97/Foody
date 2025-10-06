import {  NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'src/screens/SplashScreen'
import BottomTabs from './tabs/BottomTabs'
import { navigationRef } from 'src/utils/NavigationUtils'
import AnimatedTabs from './tabs/AnimatedTabs'

const Stack = createNativeStackNavigator()
const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="BottomTabs" component={AnimatedTabs} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
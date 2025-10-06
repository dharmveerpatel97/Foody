import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from 'src/utils/NavigationUtils'

export default function SplashScreen() {
  useEffect(() => {
    resetAndNavigate('Login')
  }, [])
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}
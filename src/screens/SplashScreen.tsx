import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from 'src/utils/NavigationUtils'

export default function SplashScreen() {
  useEffect(() => {
    resetAndNavigate('BottomTabs')
  }, [])
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}
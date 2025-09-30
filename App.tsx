import { View, Text } from 'react-native'
import React from 'react'
import RootNavigator from 'src/navigation/RootNavigator'
import { ThemeProvider } from '@utils'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </View>
  )
}
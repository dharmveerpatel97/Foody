import { View, Text } from 'react-native'
import React from 'react'
import RootNavigator from 'src/navigation/RootNavigator'
import { ThemeProvider } from '@utils'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </View>
    </GestureHandlerRootView>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { ShareStateContextProvider } from './SharedContex'
import BottomTabs from './BottomTabs'

export default function AnimatedTabs() {
    return (
        <ShareStateContextProvider>
            <BottomTabs />
        </ShareStateContextProvider>
    )
}
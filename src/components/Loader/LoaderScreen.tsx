import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT } from '../../styles/GStyles'
interface LoaderScreenProps {
    color ?: string
}
const LoaderScreen = ({color} :LoaderScreenProps) => {
  return (
    <View style={{
        position : "absolute",
        height : HEIGHT,
        width : "100%",
        
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        backgroundColor: 'rgba(0, 0, 0,.3)',
      }}>
        <ActivityIndicator color={color || "white"} size="large" />
      </View>
  )
}

export default LoaderScreen

const styles = StyleSheet.create({})
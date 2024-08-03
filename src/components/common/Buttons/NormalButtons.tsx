import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GStyles } from '../../../styles/GStyles'

interface NormalButtonsPros {
    title: string
    onPress: () => void
    loading?: boolean
  
}

const NormalButtons = ({onPress,title,loading} : NormalButtonsPros) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    disabled={loading}
    style={{
      backgroundColor: GStyles.primaryPurple,
      padding: 10,
      borderRadius: 100,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      width: '90%',
      gap : 10
    }}>
    <Text
      style={{
        fontWeight: 'bold',
      }}>
        {loading && <ActivityIndicator color={"white"} />}
      {/* <AntDesign name="plus" size={20} color="white" /> */}
    </Text>
    <Text
      style={{
        color: 'white',
        fontFamily: GStyles.Poppins,
        fontSize: 16,
        letterSpacing: 0.8,
        marginTop: 5,
      }}>
        
      {title}
    </Text>
  </TouchableOpacity>
  )
}

export default NormalButtons

const styles = StyleSheet.create({})
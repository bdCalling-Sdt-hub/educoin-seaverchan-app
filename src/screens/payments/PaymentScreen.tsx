import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'

const PaymentScreen = ({navigation} : NavigProps<null>) => {
  return (
    <View>
     <HeaderBackground
        title="Payment"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})
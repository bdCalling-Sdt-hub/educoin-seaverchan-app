import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'

const StudentPassCode = ({navigation} : NavigProps<null>) => {
  return (
    <View style={{
        height : "100%"
    }}>
        <HeaderBackground
        title="Student Pass Code"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />

    <View style={{
        paddingHorizontal: '4%',
        
        alignItems: 'center',
        justifyContent: 'center',
        flex : 1,
        marginBottom : "50%"
    }}>
        <Text style={{
            fontSize: 14,
            color: GStyles.gray.lightActive,
            fontFamily : GStyles.Poppins,
            marginBottom: 20,
            textAlign: 'center'
        }}>Use this passcode to login as student on another device.</Text>
        <View style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            backgroundColor: GStyles.orange.normal,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                // fontWeight: 'bold',
                color: GStyles.white,
                fontFamily : GStyles.PoppinsSemiBold,
                letterSpacing : 5
            }}>4545451</Text>
        </View>
    </View>

    </View>
  )
}

export default StudentPassCode

const styles = StyleSheet.create({})
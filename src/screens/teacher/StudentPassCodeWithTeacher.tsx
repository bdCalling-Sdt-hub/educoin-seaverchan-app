import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'
import { FontSize } from '../../utils/utils'

const StudentPassCodeWithTeacher = ({navigation,route} : NavigProps<string>) => {
  return (
    <View style={{
        height : "100%"
    }}>
        <HeaderBackground
        title="Student Pass Code"
        backgroundColor={GStyles.primaryPurple}
        ringColor={GStyles.purple.normalHover}
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
            fontSize: FontSize(14),
            color: GStyles.gray.lightActive,
            fontFamily : GStyles.Poppins,
            marginBottom: 20,
            textAlign: 'center'
        }}>Use this passcode to login as Student on another device.</Text>
        <View style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            // backgroundColor: GStyles.primaryOrange,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                   fontSize: FontSize(40),
                // fontWeight: 'bold',
                color: GStyles.textColor['#3D3D3D'],
                fontFamily : GStyles.PoppinsSemiBold,
                letterSpacing : 5
            }}>{route?.params?.data}</Text>
        </View>
    </View>

    </View>
  )
}

export default StudentPassCodeWithTeacher

const styles = StyleSheet.create({})
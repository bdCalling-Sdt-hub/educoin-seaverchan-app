import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'

const TeacherPassCode = ({navigation} : NavigProps<null>) => {
  return (
    <View style={{
        height : "100%"
    }}>
        <HeaderBackground
        title="Teacher Pass Code"
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
            fontSize: 14,
            color: GStyles.gray.lightActive,
            fontFamily : GStyles.Poppins,
            marginBottom: 20,
            textAlign: 'center'
        }}>Use this passcode to login as teacher on another device.</Text>
        <View style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            backgroundColor: GStyles.primaryPurple,
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

export default TeacherPassCode

const styles = StyleSheet.create({})
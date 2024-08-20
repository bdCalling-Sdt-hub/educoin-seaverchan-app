import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'
import { useGetUserStudentQuery } from '../../redux/apiSlices/authSlice'
import { useContextApi } from '../../context/ContextApi'
import { FontSize } from '../../utils/utils'

const StudentPassCode = ({navigation} : NavigProps<null>) => {


    const {user} = useContextApi();
    const {data}= useGetUserStudentQuery(user.token);

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
            fontSize: FontSize(14),
            color: GStyles.gray.lightActive,
            fontFamily : GStyles.Poppins,
            marginBottom: 20,
            textAlign: 'center'
        }}>Use this passcode to login as student on another device.</Text>
        <View style={{
            width: "90%",
            height: 200,
            borderRadius: 8,
            // backgroundColor: GStyles.orange.normal,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                   fontSize: FontSize(40),
                // fontWeight: 'bold',
                color: GStyles.textColor['#3D3D3D'],
                fontFamily : GStyles.PoppinsSemiBold,
                letterSpacing : 5
            }}>{data?.data.password}</Text>
        </View>
    </View>

    </View>
  )
}

export default StudentPassCode

const styles = StyleSheet.create({})
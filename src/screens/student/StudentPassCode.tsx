import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'
import { useGetUserStudentQuery } from '../../redux/apiSlices/authSlice'
import { useContextApi } from '../../context/ContextApi'
import { FontSize } from '../../utils/utils'
import Clipboard from '@react-native-clipboard/clipboard'
import { TouchableOpacity } from 'react-native'

const StudentPassCode = ({navigation} : NavigProps<null>) => {

    const {user} = useContextApi();
    const {data}= useGetUserStudentQuery(user.token);
    const copyToClipboard = () => {
        Clipboard.setString(`${data?.data.password}`);
        ToastAndroid.showWithGravity(`${data?.data.password} Copy to clipboard`, ToastAndroid.SHORT, ToastAndroid.CENTER)
      };

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
        // marginBottom : "50%"
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
            height: "10%",
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
        <TouchableOpacity
        onPress={()=>{
            copyToClipboard()
        }}
        style={{
            position : "absolute",
            bottom : "3%",
            // right : 0,
            padding: 10,
            width: "90%",
            height: "7%",
            // backgroundColor: GStyles.gray.lightActive,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
        }}>
            <Text style={{
                fontSize: FontSize(16),
                color: GStyles.textColor['#3D3D3D'],
                fontFamily : GStyles.PoppinsMedium,
              
            }}>Copy Passcode</Text>
        </TouchableOpacity>
    </View>

    </View>
  )
}

export default StudentPassCode

const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View,ToastAndroid } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'
import { FontSize } from '../../utils/utils'

const StudentPassCodeWithTeacher = ({navigation,route} : NavigProps<string>) => {
    const copyToClipboard = () => {
        Clipboard.setString(`${route?.params?.data}`);
        ToastAndroid.showWithGravity(`${route?.params?.data} Copy to clipboard`, ToastAndroid.SHORT, ToastAndroid.CENTER)
      };
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
        // marginBottom : "5%"
    }}>
        <Text style={{
            fontSize: FontSize(14),
            color: GStyles.gray.lightActive,
            fontFamily : GStyles.Poppins,
            // marginBottom: 20,
            textAlign: 'center'
        }}>Use this passcode to login as Student on another device.</Text>
        <View style={{
            width: "90%",
            height: "15%",
            borderRadius: 8,
            // backgroundColor: GStyles.primaryOrange,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                   fontSize: FontSize(40),
                // fontWeight: 'bold',
                // marginBottom : "5%",
                color: GStyles.textColor['#3D3D3D'],
                fontFamily : GStyles.PoppinsSemiBold,
                letterSpacing : 5
            }}>{route?.params?.data}</Text>
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

export default StudentPassCodeWithTeacher

const styles = StyleSheet.create({})
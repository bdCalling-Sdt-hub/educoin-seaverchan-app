import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import { useGetTeacherPasscodeQuery } from '../../redux/apiSlices/authSlice';
import { useContextApi } from '../../context/ContextApi';


const TeacherPassCode = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi();
  const {data} = useGetTeacherPasscodeQuery(user.token);
    // console.log(data);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Teacher Pass Code"
        backgroundColor={GStyles.primaryPurple}
        ringColor={GStyles.purple.normalHover}
        navigation={navigation}
      />

      <View
        style={{
          paddingHorizontal: '4%',

          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginBottom: '50%',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: GStyles.gray.lightActive,
            fontFamily: GStyles.Poppins,
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Use this passcode to login as teacher on another device.
        </Text>
        <View
          style={{
            width: '90%',
            height: 200,
            borderRadius: 8,
            // backgroundColor: GStyles.primaryPurple,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              // fontWeight: 'bold',
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.PoppinsSemiBold,
              letterSpacing: 5,
            }}>
            {data?.data}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeacherPassCode;

const styles = StyleSheet.create({});

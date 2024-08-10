import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {BarChart} from 'react-native-gifted-charts';
import { useContextApi } from '../../context/ContextApi';
import { useGetUserStudentQuery } from '../../redux/apiSlices/authSlice';
import { imageUrl } from '../../redux/api/baseApi';

const StudentProfileScreen = ({navigation}: NavigProps<null>) => {
  const barData = [
    {value: 30, label: 'Sun'},
    {value: 50, label: 'Mon'},
    {value: 20, label: 'Tue'},
    {value: 70, label: 'Wed'},
    {value: 35, label: 'Thu'},
    {value: 90, label: 'Fri'},
    {value: 20, label: 'Sat'},
  ];


  const {user} = useContextApi()
  const {data : studentData} = useGetUserStudentQuery(user.token)

  // console.log(user);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Profile"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
      <View
        style={{
          borderColor: GStyles.borderColor['#ECECEC'],
          borderWidth: 1,
          padding: 15,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: '4%',
          marginTop: 15,
          gap: 10,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            borderColor: GStyles.primaryOrange,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
            source={{
              uri: imageUrl + studentData?.data?.profile
            }}
          />
        </View>
        <View
          style={{
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              color: GStyles.textColor['#3D3D3D'],
              fontWeight: '600',
              letterSpacing: 0.5,
            }}>
           {studentData?.data?.name}
          </Text>

          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontWeight: '400',
              letterSpacing: 0.5,
            }}>
            {studentData?.data?.class}
          </Text>
          <Text
            style={{
              fontFamily: GStyles.PoppinsSemiBold,
              fontSize: 20,
              color: GStyles.primaryOrange,
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Level {studentData?.data?.level}
          </Text>

          <View
            style={{
              flexDirection: 'row',

              gap: 5,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 12,
                color: '#797979',
                fontWeight: '400',
                letterSpacing: 0.5,
              }}>
              {studentData?.data?.points}
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
          
        </View>
        <TouchableOpacity 
        onPress={()=>navigation?.navigate('StudentProfileEdit',studentData)}
        style={{
            position : "absolute",
            top : 15,
            right : 15,
            backgroundColor : GStyles.primaryOrange,
            padding : 5,
          borderRadius : 100,
          height : 30,
          width : 30,
          justifyContent : 'center',
          alignItems : 'center',
          }}>

            <AntDesign name="edit" size={16} color={"white"} />
          </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: '4%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFF3E7',
            height: 65,
            borderRadius: 4,
          }}>
          <View
            style={{
              backgroundColor: GStyles.primaryOrange,
              height: 65,
              width: '40%',
              borderRadius: 4,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 17,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level {studentData?.data?.level}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: GStyles.Poppins,
                fontWeight: '400',
                letterSpacing: 0.8,
              }}>
              45\200
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level {studentData?.data?.level as number + 1}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StudentProfileScreen;

const styles = StyleSheet.create({});

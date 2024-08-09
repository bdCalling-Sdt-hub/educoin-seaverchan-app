import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigProps} from '../../../interfaces/NavigationPros';
import {imageUrl} from '../../../redux/api/baseApi';

interface StudentCardProps {
  student?: {
    name?: string;
    image?: string;
    class?: string;
    level?: number;
    points?: number;
  };
  onPress?: () => void;
  width?: any;
  height?: any;
  imgBorderColor?: string;
  imgAssets?: any;
}

const StudentCard = ({
  onPress,
  student,
  width,
  imgBorderColor,
  imgAssets,
}: StudentCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',

        gap: 8,
        padding: 15,
        position: 'relative',
        //   backgroundColor: GStyles.primaryBlue,
        borderWidth: 1,
        borderColor: '#ECECEC',
        width: width ? width : '100%',
      }}>
      <View
        style={{
          width: 61,
          height: 61,
          borderWidth: 1,
          borderColor: imgBorderColor ? imgBorderColor : GStyles.primaryBlue,
          padding: 3,
          borderRadius: 100,
        }}>
        <Image
          resizeMode="cover"
          style={{
            width: 53,
            height: 53,
            borderRadius: 100,
          }}
          source={{uri: imageUrl + student?.image}}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#3D3D3D',
            fontSize: 16,
            fontWeight: '500',
            fontFamily: GStyles.PoppinsSemiBold,

            textAlign: 'center',
            letterSpacing: 0.4,
            marginVertical: 1,
            
          }}>
          {student?.name}
        </Text>
        <Text
          style={{
            color: '#3D3D3D',
            fontSize: 12,
            fontWeight: '500',
            fontFamily: GStyles.Poppins,
            textAlign: 'center',
            letterSpacing: 0.4,
          }}>
          class : {student?.class}
        </Text>
        <Text
          style={{
            color: '#3D3D3D',
            fontSize: 12,
            fontWeight: '500',
            fontFamily: GStyles.Poppins,
            textAlign: 'center',
            letterSpacing: 0.4,
          }}>
          level {student?.level}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5,
            marginTop: 2,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#797979',
              fontFamily: GStyles.Poppins,

              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            Points:
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#797979',
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            {student?.points}
          </Text>
          <AntDesign name="star" color={GStyles.primaryYellow} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StudentCard;

const styles = StyleSheet.create({});

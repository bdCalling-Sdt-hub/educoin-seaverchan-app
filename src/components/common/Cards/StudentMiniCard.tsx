import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GStyles, WIDTH} from '../../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

interface StudentCardProps {
  student?: {
    name?: string;
    image?: string;
    class?: number;
    level?: number;
    points?: number;
  };
  onPress?: () => void;
  width?: any;
  height?: any;
  imgBorderColor?: string;
  borderColor?: string;
}
const StudentMiniCard = ({onPress, student, borderColor}: StudentCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 16,
          borderWidth: 1,
          borderColor: borderColor
            ? borderColor
            : GStyles.borderColor['#ECECEC'],
          borderRadius: 10,
          padding: 10,
          width: WIDTH * .45,
          height: 80,
        }}>
        <View
          style={{
            borderRadius: 100,
            borderColor: GStyles.primaryOrange,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          
          }}>
          <Image
          resizeMode='cover'
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
            }}
            source={{
              uri: student?.image 
            }}
          />
        </View>
        <View
          style={{
            gap: -2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
            }}>
            <Text
            numberOfLines={1}
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 16,
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '500',
                letterSpacing: 0.5,
                maxWidth : WIDTH * .27
              }}>
             {student?.name}
            </Text>
          </View>
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
              {student?.points}
            </Text>
            <AntDesign name="star" size={18} color={GStyles.primaryYellow} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StudentMiniCard;

const styles = StyleSheet.create({});

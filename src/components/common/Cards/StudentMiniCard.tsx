import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';

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
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
          borderWidth: 1,
          borderColor: borderColor
            ? borderColor
            : GStyles.borderColor['#ECECEC'],
          borderRadius: 10,
          padding: 10,
          width: 170,
          height: 80,
        }}>
        <View
          style={{
            borderRadius: 100,
            borderColor: GStyles.primaryOrange,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 45,
            height: 45,
          }}>
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
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
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 16,
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Aadi T
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
              45{' '}
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

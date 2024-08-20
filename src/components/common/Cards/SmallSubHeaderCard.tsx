import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import { FontSize } from '../../../utils/utils';

interface SmallSubHeaderCardProps {
  title: string;
  subTitle: string;
  count: number;
  icon?: string;
  option?: boolean;
  onPress?: () => void;
  marginVertical?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
}

const SmallSubHeaderCard = ({
  count,
  icon,
  onPress,
  subTitle,
  title,
  option,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  marginBottom,
  marginTop,
}: SmallSubHeaderCardProps) => {
  return (
    <View
      style={{
        height: 70,
        borderWidth: 1,
        borderColor: '#ECECEC',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 8,

        marginHorizontal: marginHorizontal ? marginHorizontal : '4%',
        paddingHorizontal: paddingHorizontal ? paddingHorizontal : 10,
        paddingVertical: paddingVertical ? paddingVertical : 0,
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      <View>
        <Text
          style={{
            color: GStyles.textColor['#3D3D3D'],
            fontSize: FontSize(16),
            fontWeight: '600',
            fontFamily: GStyles.PoppinsMedium,
            letterSpacing: 0.8,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: GStyles.textColor['#3D3D3D'],
            fontSize: FontSize(12),
            fontWeight: '400',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.8,
          }}>
          {subTitle}: {count}
        </Text>
      </View>
      {/* <TouchableOpacity
        style={{
          padding: 10,
        }}>
        <Entypo name="dots-three-horizontal" color="#3D3D3D" size={20} />
      </TouchableOpacity> */}
    </View>
  );
};

export default SmallSubHeaderCard;

const styles = StyleSheet.create({});

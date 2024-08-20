import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { FontSize } from '../utils/utils';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  style?: any;
  icon?: any;
  iconStyle?: any;
}

const BackButton = ({title, onPress, style, icon, iconStyle}: ButtonProps) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          padding: 15,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 999,
        }}
        onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={25} color="#6A6D7C" />
      </TouchableOpacity>
      <View
        style={{
          paddingVertical: 15,
          width: '100%',
        }}>
        <Text
          style={{
            color: '#6C6E70',
            fontSize: FontSize(18),
            lineHeight: 21,

            fontWeight: '600',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

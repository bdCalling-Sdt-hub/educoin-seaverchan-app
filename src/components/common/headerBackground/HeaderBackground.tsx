import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface HeaderBackgroundProps {
  title?: string;
  navigation?: NavigationProp<ParamListBase>;
  backgroundColor?: string;
  ringColor?: string;
}

const HeaderBackground = ({
  title,
  backgroundColor,
  ringColor,
  navigation,
}: HeaderBackgroundProps) => {
  return (
    <View>
      <View
        style={{
          position: 'relative',
          backgroundColor: backgroundColor
            ? backgroundColor
            : GStyles.primaryBlue,
          height: 90,
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
          justifyContent: 'center',
          alignItems: 'center',
          //   gap: 26,
          paddingHorizontal: '4%',
        }}>
        <View
          style={{
            position: 'absolute',
            top: -70,
            left: -30,
            width: 153,
            height: 153,
            borderColor: ringColor ? ringColor : '#349EE6',
            borderWidth: 10,
            borderRadius: 100,
            opacity: 0.4,
          }}></View>
        <View
          style={{
            position: 'absolute',
            top: -142,
            right: -10,
            width: 216,
            height: 216,
            borderColor: ringColor ? ringColor : '#349EE6',
            borderWidth: 24,
            borderRadius: 100,
            opacity: 0.4,
          }}></View>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={{
            padding: 12,
            position: 'absolute',
            left: 10,
          }}>
          <Ionicons name="arrow-back" color="white" size={26} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: GStyles.PoppinsSemiBold,
              fontSize: 20,
              lineHeight: 30,
              textAlign: 'center',
              color: 'white',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderBackground;

const styles = StyleSheet.create({});

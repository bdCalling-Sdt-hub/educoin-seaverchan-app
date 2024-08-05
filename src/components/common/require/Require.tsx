import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GStyles} from '../../../styles/GStyles';

interface RequireProps {
  title: string;
}

const Require = ({title}: RequireProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}>
      <FontAwesome name="circle" size={6} color={GStyles?.primaryOrange} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          fontFamily: GStyles.Poppins,
          color: GStyles.textColor['#3D3D3D'],
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Require;

const styles = StyleSheet.create({});

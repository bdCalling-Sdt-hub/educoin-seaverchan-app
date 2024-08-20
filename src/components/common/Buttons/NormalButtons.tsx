import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';
import { FontSize } from '../../../utils/utils';

interface NormalButtonsPros {
  title: string;
  onPress: () => void;
  loading?: boolean;
  BtnColor ?  : string;
}

const NormalButtons = ({onPress, title, loading,BtnColor}: NormalButtonsPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        backgroundColor: BtnColor || GStyles.primaryPurple,
        padding: 10,
        borderRadius: 100,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '90%',
        gap: 10,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
        }}>
        {loading && <ActivityIndicator color={'white'} />}
        {/* <AntDesign name="plus" size={20} color="white" /> */}
      </Text>
      <Text
        style={{
          color: 'white',
          fontFamily: GStyles.Poppins,
          fontSize: FontSize(16),
          letterSpacing: 0.8,
          marginTop: 5,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default NormalButtons;

const styles = StyleSheet.create({});

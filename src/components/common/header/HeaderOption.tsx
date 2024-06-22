import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigProps} from '../../../interfaces/NavigationPros';
import {GStyles} from '../../../styles/GStyles';

interface HeaderOptionsProps {
  op1: string;
  op2: string;
  op3?: string;
  initialOp?: string;
  isOp?: string;
  setIsOp: (value: any) => void;
  borderWidth?: number;
  borderColor?: string;
  marginHorizontal?: number;
  activeBorderColor: string;
  marginBottom?: number;
  marginTop?: number;
}
// use option with 3 children must use string type for `isOp` prop setIsop as string and pass the string value of the option you want to set as isOp prop.

const HeaderOption = ({
  initialOp,
  op1,
  op2,
  op3,
  setIsOp,
  isOp,
  borderColor,
  borderWidth,

  marginHorizontal,
  activeBorderColor,
  marginBottom,
  marginTop,
}: HeaderOptionsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 5,
        alignItems: 'center',
        borderBottomColor: borderColor
          ? borderColor
          : GStyles.borderColor['#ECECEC'],
        borderBottomWidth: borderWidth ? borderWidth : 2,

        marginHorizontal: marginHorizontal ? marginHorizontal : '4%',
        marginBottom: marginBottom ? marginBottom : 0,
        marginTop: marginTop ? marginTop : 0,
      }}>
      {op1 && (
        <TouchableOpacity onPress={() => setIsOp(op1)} style={{}}>
          <Text
            style={{
              color: GStyles.textColor['#3D3D3D'],
              fontSize: 16,
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              borderBottomColor:
                isOp === op1
                  ? activeBorderColor
                  : GStyles.borderColor['#ECECEC'],
              borderBottomWidth: isOp === op1 ? 3 : 0,
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            {op1}
          </Text>
        </TouchableOpacity>
      )}

      {op2 && (
        <TouchableOpacity onPress={() => setIsOp(op2)} style={{}}>
          <Text
            style={{
              color: GStyles.textColor['#3D3D3D'],
              fontSize: 16,
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              borderBottomColor:
                isOp === op2
                  ? activeBorderColor
                  : GStyles.borderColor['#ECECEC'],
              borderBottomWidth: isOp === op2 ? 3 : 0,
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            {op2}
          </Text>
        </TouchableOpacity>
      )}
      {op3 && (
        <TouchableOpacity onPress={() => setIsOp(op3)} style={{}}>
          <Text
            style={{
              color: GStyles.textColor['#3D3D3D'],
              fontSize: 16,
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              borderBottomColor:
                isOp === op3
                  ? activeBorderColor
                  : GStyles.borderColor['#ECECEC'],
              borderBottomWidth: isOp === op3 ? 3 : 0,
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            {op3}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderOption;

const styles = StyleSheet.create({});

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
  fillButton?: boolean;
  gap ?: number;
  filButtonRadius?: number;
  filButtonHight?: number; //
  containerBackgroundColor ?: string;
  containerPadding?: number;
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
fillButton,
  marginHorizontal,
  activeBorderColor,
  marginBottom,
  marginTop,
  filButtonRadius,
  gap,
  filButtonHight,
  containerBackgroundColor,
  containerPadding
}: HeaderOptionsProps) => {
  return (
    <>
    {
      fillButton ? <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
    
        gap:gap ? gap : 10,
        alignItems: 'center',
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
        marginBottom: marginBottom ? marginBottom : 0,
        marginTop: marginTop ? marginTop : 0,
        backgroundColor :containerBackgroundColor ? containerBackgroundColor: "#F8F8F8",
        padding :containerPadding ? containerPadding : 10,
        borderRadius : 8,
        // elevation : 1
        
      }}>
      {op1 && (
        <TouchableOpacity onPress={() => setIsOp(op1)} style={{
          flex : 1,
          borderRadius : filButtonRadius ?filButtonRadius : 8,
          backgroundColor: isOp === op1? activeBorderColor? activeBorderColor : GStyles.primaryBlue : "transparent",
          alignItems : "center",
          justifyContent : "center",
          height :filButtonHight ?filButtonHight : 45,
          borderWidth: isOp === op1? borderWidth? borderWidth : 1 : 1,
          borderColor:  activeBorderColor? borderColor : GStyles.primaryBlue ,
        }}>
          <Text
            style={{
           
              fontSize: 16,
             
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
             
              color : isOp === op1 ?"white" : activeBorderColor ? activeBorderColor : GStyles.textColor['#3D3D3D'] ,
              textAlign: 'center',
            
            }}>
            {op1}
          </Text>
        </TouchableOpacity>
      )}

      {op2 && (
        <TouchableOpacity onPress={() => setIsOp(op2)} style={{
          flex : 1,
          borderRadius : filButtonRadius ?filButtonRadius : 8,
          backgroundColor: isOp === op2? activeBorderColor? activeBorderColor : GStyles.primaryBlue : "transparent",
          alignItems : "center",
          justifyContent : "center",
          height :filButtonHight ?filButtonHight : 45,
          borderWidth: isOp === op2? borderWidth? borderWidth : 1 : 1,
          borderColor:  activeBorderColor? borderColor : GStyles.primaryBlue ,
          
        }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              color : isOp === op2 ?"white" : activeBorderColor ? activeBorderColor : GStyles.textColor['#3D3D3D'] ,
         
            }}>
            {op2}
          </Text>
        </TouchableOpacity>
      )}
      {op3 && (
        <TouchableOpacity onPress={() => setIsOp(op3)} style={{
          flex : 1,
          borderRadius : filButtonRadius ?filButtonRadius : 8,
          backgroundColor: isOp === op3? activeBorderColor? activeBorderColor : GStyles.primaryBlue : "transparent",
          alignItems : "center",
          justifyContent : "center",
          height :filButtonHight ?filButtonHight : 45,
          borderWidth: isOp === op3? borderWidth? borderWidth : 1 : 1,
          borderColor:  activeBorderColor? borderColor : GStyles.primaryBlue ,
        }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              color : isOp === op3 ?"white" : activeBorderColor ? activeBorderColor : GStyles.textColor['#3D3D3D'] ,
            
            }}>
            {op3}
          </Text>
        </TouchableOpacity>
      )}
    </View> : <View
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
    }
    </>
   
  );
};

export default HeaderOption;

const styles = StyleSheet.create({});

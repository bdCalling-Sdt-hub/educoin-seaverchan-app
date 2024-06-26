import {View, Modal, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GStyles} from '../../../styles/GStyles';

type CustomModalProps = {
  modalVisible: boolean;
  setModalVisible?: Function | any;
  children: JSX.Element;
  height?: string | number;
  paddingHorizontal?: string;
  slide?: 'slide' | 'fade';
  onlyTopRadius?: number;
  Radius?: number;
  width?: string | number;
  center?: string;
  appearance?: boolean;
  backButton?: boolean;
  containerAlign?: 'center' | 'flex-start' | 'flex-end';
  backGroundColor?: string;
  transparent?: boolean;
  containerColor?: string;
};

const ModalOfBottom = ({
  children,
  modalVisible,
  setModalVisible,
  height,
  paddingHorizontal,
  slide,
  onlyTopRadius,
  Radius,
  width,
  center,
  appearance: normal,
  backButton,
  containerAlign,
  backGroundColor,
  transparent,
  containerColor,
}: CustomModalProps) => {
  return (
    <Modal
      animationType={slide ? 'slide' : 'fade'}
      transparent={true}
      visible={modalVisible}>
      <Pressable
        disabled={normal || false}
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : '0%',
          justifyContent: containerAlign ? containerAlign : 'center',
          alignItems: 'center',
          backgroundColor: transparent
            ? 'transparent'
            : backGroundColor
            ? backGroundColor
            : '#00000AAA',
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            borderRadius: Radius ? 9 : 0,
            borderTopRightRadius: onlyTopRadius && 9,
            borderTopLeftRadius: onlyTopRadius && 9,
            backgroundColor: containerColor ? containerColor : 'white',
            height: height ? height : '50%',
            width: width ? width : '90%',
            padding: 10,
            justifyContent: center && 'center',
            position: 'relative',

            borderTopColor: GStyles.borderColor['#ECECEC'],
            borderTopWidth: 3,
          }}>
          {backButton && (
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
                zIndex: 999,
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  // backgroundColor: globalStyle.primary,
                  //   backgroundColor: 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                <AntDesign name="close" size={24} color={'#3D3D3D'} />
              </View>
            </TouchableOpacity>
          )}
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

export default ModalOfBottom;

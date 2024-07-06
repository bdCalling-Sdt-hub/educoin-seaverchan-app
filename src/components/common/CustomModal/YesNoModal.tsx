import {View, Modal, Pressable, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GStyles} from '../../../styles/GStyles';

type CustomModalProps = {
  modalVisible: boolean;
  setModalVisible?: Function | any;
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
  noPress?: ()=>void;
  yesPress?: ()=>void;
};

const YesNoModal = ({

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
            borderRadius: Radius ? 9 : 10,
            // borderTopRightRadius: onlyTopRadius && 9,
            // borderTopLeftRadius: onlyTopRadius && 9,
            backgroundColor: containerColor ? containerColor : 'white',
            height: height ? height : '25%',
            width: width ? width : '70%',
            padding: 10,
            justifyContent: center && 'center',
            position: 'relative',

            // borderTopColor: GStyles.borderColor['#ECECEC'],
            // borderTopWidth: 3,
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
          <View style={{
            height : "100%",
            justifyContent:'center',
            alignItems : "center"
      
          }}>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop : 20
          }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
              Are you sure?
            </Text>
            <Text style={{fontSize: 16, marginBottom: 20}}>
              This action cannot be undone.
            </Text>
          </View>
         <View style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            marginBottom: 20,
            marginTop: 30,
            width: '80%',
            
        
         }}>
                <TouchableOpacity style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                // backgroundColor: "red",
                borderWidth : 1,
                borderColor : "gray",
                borderRadius: 5,
                width: '45%',
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
  
            }}>
                <Text style={{
           color :   "gray",
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "rgba(200,0,0,1)",
                borderRadius: 5,
                width: '45%',
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
  
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>Yes</Text>
            </TouchableOpacity>
        
         </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default YesNoModal;

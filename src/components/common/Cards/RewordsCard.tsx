import {Image, ImageProps, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigProps} from '../../../interfaces/NavigationPros';

interface RewordsCardProps extends NavigProps<null> {
  title ?: string;
  achieved?: boolean;
  marginHorizontal?: number;
  editOption?: boolean;
  img?: string;
  editRoute?: string;
  routeData?: any;
  onPress?: () => void;
  borderColor?: string;
  borderWidth?: number;
  disabled?: boolean;
  backGroundColor?: string;
  backGroundColorProgress?: string;
  backGroundProgressWidth?: string;
  iconOrTextColor?: string;
  imgAssets?: any ;
  claimBtn?: boolean;
  claimPress?: ()=>void;
  removeBtn?: boolean;
  removePress?: ()=>void;
  points ?: number;
}

const RewordsCard = ({
  achieved,
  marginHorizontal,
  title,
  editOption,
  img,
  navigation,
  editRoute,
  routeData,
  borderColor,
  onPress,
  borderWidth,
  disabled,
  backGroundColor,
  backGroundColorProgress,
  backGroundProgressWidth,
  iconOrTextColor,
  imgAssets,
  claimBtn,
  claimPress,
  removeBtn,
  removePress,
  points
  
}: RewordsCardProps) => {
  // console.log(points);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: backGroundColor ? backGroundColor : 'white',
        borderRadius: 10,
        marginVertical: 5,
        borderColor: borderColor ? borderColor : GStyles.borderColor['#ECECEC'],
        // borderWidth: borderWidth ? borderWidth : 2,
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
        elevation: 2,
      }}>
      <View
        style={{
          backgroundColor: backGroundColorProgress
            ? backGroundColorProgress
            : 'white',
          width: backGroundProgressWidth ? backGroundProgressWidth : '5%',
          paddingHorizontal: 8,
          borderRadius: 10,
          position: 'absolute',
          height : "100%"
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          padding: 14,
        }}>
        {
          imgAssets ? <Image
          source={imgAssets}
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
          }}
        /> :<Image
        source={{
          uri: img,
        }}
        style={{
          width: 60,
          height: 60,
          // borderRadius: 100,
        }}
      />
        }
        {achieved ? (
          <View style={{gap: 5}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#3D3D3D',
                fontFamily: GStyles.PoppinsSemiBold,
                letterSpacing: 0.8,
          
              width: 200,
              }}>
              {title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <AntDesign name="staro" size={20} color={GStyles.primaryYellow} />
              <Text
                style={{
                  color: GStyles.primaryYellow,
                  fontFamily: GStyles.Poppins,
                  fontSize: 18,
                  letterSpacing: 0.8,
                }}>
                {points ? points : 0}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{gap: 5,width : '100%'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#3D3D3D',
                fontFamily: GStyles.PoppinsSemiBold,
                letterSpacing: 0.8,
                width: "70%",
              }}>
             {title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <AntDesign name="staro" size={20} color={iconOrTextColor ? iconOrTextColor :'#C3C3C3'} />
              <Text
                style={{
                  color:iconOrTextColor ? iconOrTextColor : '#C3C3C3',
                  fontFamily: GStyles.Poppins,
                  fontSize: 18,
                  letterSpacing: 0.8,
                }}>
                {points ? points : 0}
              </Text>
            </View>
          </View>
        )}

       
      </View>
      {editOption && (
          <TouchableOpacity
            onPress={() =>
              editRoute &&
              editOption &&
              navigation?.navigate(editRoute, {data: routeData})
              
            }
            style={{
              padding: 5,
              position : "absolute",
              right : 15,
            }}>
            <FontAwesome5 name="edit" size={20} color="#3D3D3D" />
          </TouchableOpacity>
        )}
        {claimBtn && (
          <TouchableOpacity
          
            onPress={claimPress
              
            }
            style={{
              paddingVertical : 8,
              paddingHorizontal : 26,
    
              backgroundColor : GStyles.primaryOrange,
              borderRadius : 6,
              justifyContent : 'center',
              alignItems : 'center',
              position : "absolute",
              right : 15,
            }}>
            <Text style={{
              fontSize : 12,
              fontFamily : GStyles.PoppinsBold,
              color : 'white'
            }}>Claim</Text>
          </TouchableOpacity>
        )}
        {removeBtn && (
          <TouchableOpacity
          
            onPress={removePress
              
            }
            style={{
              paddingVertical : 8,
              paddingHorizontal : 15,
    
              backgroundColor : GStyles.gray.lightHover,
              borderRadius : 10,
              justifyContent : 'center',
              alignItems : 'center',
              position : "absolute",
              right : 15,
            }}>
            <Text style={{
              fontSize : 12,
              fontFamily : GStyles.PoppinsBold,
              color : 'white'
            }}>remove</Text>
          </TouchableOpacity>
        )}
        
    </TouchableOpacity>
  );
};

export default RewordsCard;

const styles = StyleSheet.create({});

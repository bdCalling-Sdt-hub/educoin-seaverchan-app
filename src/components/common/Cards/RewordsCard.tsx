import {Image, ImageProps, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigProps} from '../../../interfaces/NavigationPros';
import { IReword } from '../../../redux/interface/interface';
import { FontSize } from '../../../utils/utils';

interface RewardsCardProps extends NavigProps<null> {
  title ?: string;
  achieved?: boolean;
  marginHorizontal?: number;
  editOption?: boolean;
  img?: string;
  editRoute?: string;
  routeData?: IReword;
  onPress?: () => void;
  optionOnPress?: ()=>void;
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
  earnDate ? : Date;
  
}

const RewardsCard = ({
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
  points,
  optionOnPress,
  earnDate
  
}: RewardsCardProps) => {
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
                fontSize: FontSize(16),
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
                  fontSize: FontSize(18),
                  letterSpacing: 0.8,
                }}>
                {points ? points : 0}
              </Text>
          
            </View>
          </View>
        ) : (
          <View style={{gap: 5,width : '100%'}}>
            <Text
            numberOfLines={2}
              style={{
                fontSize: FontSize(16),
                fontWeight: '500',
                color: '#3D3D3D',
                fontFamily: GStyles.PoppinsSemiBold,
                letterSpacing: 0.8,
                width: claimBtn ? "45%" : "60%",
              }}>
             {title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width : "50%",
                gap:  4,
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
          <AntDesign name="staro" size={20} color={iconOrTextColor ? iconOrTextColor :'#C3C3C3'} />
              <Text
                style={{
                  color:iconOrTextColor ? iconOrTextColor : '#C3C3C3',
                  fontFamily: GStyles.Poppins,
                  fontSize:FontSize(18),
                  letterSpacing: 0.8,
                }}>
                {points ? points : 0}
                
              </Text>
           
              <Text
                style={{
                  color: GStyles.orange?.dark,
                  fontFamily: GStyles.Poppins,
                  fontSize: FontSize(12),
                  letterSpacing: 0.8,
                  paddingHorizontal : 5
                
                }}>
           {earnDate && new Date(earnDate).toDateString() }
              </Text>
          
            </View>
          </View>
        )}

       
      </View>
      {editOption && (
          <TouchableOpacity

          
            onPress={() =>
          {
            if(!editRoute){
              optionOnPress && optionOnPress()
            }
            if( editRoute &&
             editOption ){

               navigation?.navigate(editRoute, {data: routeData})
             }
          }
              
            }
            style={{
              padding: 5,
              position : "absolute",
              right : 5,
            }}>
              
                <View
                  // onPressIn={onPressOption}
               
                  style={{
                    paddingHorizontal: 10,
                  }}>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color={'black'}
                  />
           
              </View>
            {/* <FontAwesome5 name="edit" size={20} color="#3D3D3D" /> */}
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
              fontSize : FontSize(12),
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
              fontSize : FontSize(12),
              fontFamily : GStyles.PoppinsBold,
              color : 'white'
            }}>remove</Text>
          </TouchableOpacity>
        )}
        
    </TouchableOpacity>
  );
};

export default RewardsCard;

const styles = StyleSheet.create({});

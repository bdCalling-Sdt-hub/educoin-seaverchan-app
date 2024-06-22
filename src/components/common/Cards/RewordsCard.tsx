import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GStyles} from '../../../styles/GStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigProps} from '../../../interfaces/NavigationPros';

interface RewordsCardProps extends NavigProps {
  title: string;
  achieved?: boolean;
  marginHorizontal?: number;
  editOption?: boolean;
  img: string;
  route?: string;
  routeData?: any;
}

const RewordsCard = ({
  achieved,
  marginHorizontal,
  title,
  editOption,
  img,
  navigation,
  route,
  routeData,
}: RewordsCardProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 5,
        borderColor: GStyles.borderColor['#ECECEC'],
        borderWidth: 2,
        marginHorizontal: marginHorizontal ? marginHorizontal : '5%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          padding: 14,
        }}>
        <Image
          source={{
            uri: img,
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
          }}
        />
        {achieved ? (
          <View style={{gap: 5}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#3D3D3D',
                fontFamily: GStyles.PoppinsSemiBold,
                letterSpacing: 0.8,
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
                100
              </Text>
            </View>
          </View>
        ) : (
          <View style={{gap: 5}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#3D3D3D',
                fontFamily: GStyles.PoppinsSemiBold,
                letterSpacing: 0.8,
              }}>
              30 min play a video game
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 3,
              }}>
              <AntDesign name="staro" size={20} color={'#C3C3C3'} />
              <Text
                style={{
                  color: '#C3C3C3',
                  fontFamily: GStyles.Poppins,
                  fontSize: 18,
                  letterSpacing: 0.8,
                }}>
                100
              </Text>
            </View>
          </View>
        )}
      </View>
      {editOption && (
        <TouchableOpacity
          onPress={() =>
            route &&
            editOption &&
            navigation?.navigate(route, {data: routeData})
          }
          style={{
            padding: 5,
          }}>
          <FontAwesome5 name="edit" size={20} color="#3D3D3D" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RewordsCard;

const styles = StyleSheet.create({});

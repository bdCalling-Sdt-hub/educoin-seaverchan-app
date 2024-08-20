import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FontSize } from '../../utils/utils';

const StudentPublicProfileScreen = ({navigation}: NavigProps) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Profile"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
      <View
        style={{
          borderColor: GStyles.borderColor['#ECECEC'],
          borderWidth: 1,
          padding: 28,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: '4%',
          marginTop: 15,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            borderColor: GStyles.primaryOrange,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
            }}
          />
        </View>
        <View
          style={{
            gap: -5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,

              gap: 5,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Points :{' '}
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: '#797979',
                fontWeight: '400',
                letterSpacing: 0.5,
              }}>
              45{' '}
            </Text>
            <AntDesign name="star" size={24} color={GStyles.primaryYellow} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              gap: 5,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Name :{' '}
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Aadi T
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              gap: 10,
            }}>
            <Text
              style={{
                fontFamily: GStyles.PoppinsLight,
                fontSize: FontSize(16),
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '200',
                letterSpacing: 0.5,
              }}>
              Progress:
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: GStyles.primaryPurple,
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Good
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StudentPublicProfileScreen;

const styles = StyleSheet.create({});

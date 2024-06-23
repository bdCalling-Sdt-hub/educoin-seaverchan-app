import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';

const ProgressScreen = ({navigation}: NavigProps) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Progress"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
      <View
        style={{
          borderColor: GStyles.borderColor['#ECECEC'],
          borderWidth: 1,
          padding: 15,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: '4%',
          marginTop: 15,
          gap: 10,
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
            marginBottom: 5,
            alignSelf: 'center',
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
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              color: GStyles.textColor['#3D3D3D'],
              fontWeight: '600',
              letterSpacing: 0.5,
            }}>
            Aadi T
          </Text>

          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontWeight: '400',
              letterSpacing: 0.5,
            }}>
            Class : 01
          </Text>
          <Text
            style={{
              fontFamily: GStyles.PoppinsSemiBold,
              fontSize: 20,
              color: GStyles.primaryOrange,
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Level 1
          </Text>

          <View
            style={{
              flexDirection: 'row',

              gap: 5,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 12,
                color: '#797979',
                fontWeight: '400',
                letterSpacing: 0.5,
              }}>
              45{' '}
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: '4%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFF3E7',
            height: 65,
            borderRadius: 4,
          }}>
          <View
            style={{
              backgroundColor: GStyles.primaryOrange,
              height: 65,
              width: '40%',
              borderRadius: 4,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 17,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level 1
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: GStyles.Poppins,
                fontWeight: '400',
                letterSpacing: 0.8,
              }}>
              45\200
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level 2
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({});

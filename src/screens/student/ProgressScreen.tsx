import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';

const ProgressScreen = ({navigation}: NavigProps) => {
  const barData = [
    {value: 30, label: 'Sun'},
    {value: 50, label: 'Mon'},
    {value: 20, label: 'Tue'},
    {value: 70, label: 'Wed'},
    {value: 35, label: 'Thu'},
    {value: 90, label: 'Fri'},
    {value: 20, label: 'Sat'},
  ];
  return (
    <View>
      <HeaderBackground
        title="Progress"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            borderWidth: 1,
            borderColor: GStyles.borderColor['#ECECEC'],
            borderRadius: 10,
            padding: 10,
            width: '40%',
          }}>
          <View
            style={{
              width: 41,
              height: 41,
              borderRadius: 100,
              borderColor: GStyles.primaryOrange,
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
              }}
            />
          </View>
          <View
            style={{
              gap: -2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 5,
              }}>
              <Text
                style={{
                  fontFamily: GStyles.Poppins,
                  fontSize: 16,
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
              <AntDesign name="star" size={18} color={GStyles.primaryYellow} />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginBottom: 15,
          marginTop: 5,
          paddingHorizontal: '4%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: GStyles.primaryOrange,
            width: 88,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 14,
              color: GStyles.white,
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Weak
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: GStyles.primaryOrange,
            width: 88,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 14,
              color: '#828282',
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: GStyles.primaryOrange,
            width: 88,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 14,
              color: '#828282',
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Year
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: '4%',
        }}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              gap: 5,
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderRadius: 100,
              borderWidth: 1,
              borderColor: GStyles.borderColor['#ECECEC'],
              padding: 5,
              paddingHorizontal: 10,
              width: 69,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: GStyles.PoppinsSemiBold,
                fontSize: 12,
                color: GStyles.textColor['#3D3D3D'],
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              2024
            </Text>
            <AntDesign
              name="down"
              color={GStyles.textColor['#3D3D3D']}
              size={10}
            />
          </TouchableOpacity>
        </View>
        <BarChart
          barWidth={21}
          noOfSections={10}
          stepHeight={25}
          frontColor={GStyles.primaryBlue}
          rulesColor={'white'}
          maxValue={100}
          barBorderBottomLeftRadius={0}
          barBorderBottomRightRadius={0}
          barBorderTopLeftRadius={0}
          barBorderTopRightRadius={0}
          barStyle={{
            borderRadius: 0,
            // hight: 250,
          }}
          //   height={250}
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 30,
          paddingHorizontal: '4%',
          gap: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ECECEC',
            width: 40,
            height: 40,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="arrowleft" size={20} color={'#C3C3C3'} />
        </TouchableOpacity>

        <View style={{height: 40, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 16,

              fontFamily: GStyles.PoppinsSemiBold,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            19 Jan-2024
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFDAB5',
            width: 40,
            height: 40,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="arrowright" size={20} color={'#FF8811'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({});

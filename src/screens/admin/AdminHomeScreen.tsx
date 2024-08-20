import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GStyles} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import { FontSize } from '../../utils/utils';

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const AdminHomeScreen = ({navigation}: AdminHOmeProps) => {
  return (
    <View>
      {/* header part  start */}
      <View
        style={{
          height: 170,
          backgroundColor: GStyles.primaryBlue,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          position: 'relative',
          paddingHorizontal: '4%',
          gap: 26,
          paddingVertical: 17,
        }}>
        <View
          style={{
            position: 'absolute',
            top: -30,
            left: -20,
            width: 153,
            height: 153,
            borderColor: '#349EE6',
            borderWidth: 15,
            borderRadius: 100,
            opacity: 0.4,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Image
              style={{
                height: 46,
                width: 46,
                borderRadius: 100,
                //   alignSelf: 'center',
              }}
              source={{
                uri: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
              }}
            />
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: FontSize(16),
                  fontWeight: '800',
                  fontFamily: GStyles.Poppins,
                  lineHeight: 22,
                  letterSpacing: 1.4,
                }}>
                Welcome back
              </Text>
              <Text
                style={{
                  color: 'white',
                     fontSize: FontSize(20),
                  fontFamily: GStyles.Poppins,
                  fontWeight: '800',
                  letterSpacing: 0.8,
                  lineHeight: 27,
                }}>
                Aarav Sharma
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 28,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AdminNotification')}>
              <View
                style={{
                  position: 'relative',
                }}>
                <Feather name="bell" color="white" size={24} />
                <View
                  style={{
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: '#B0000B',
                    borderRadius: 100,
                    opacity: 0.8,
                    zIndex: 999,
                  }}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation?.openDrawer()}>
              <Feather name="menu" color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: 48,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              borderRadius: 100,
            }}>
            <TextInput
              placeholder="Search here...."
              placeholderTextColor="#858585"
            />
            <Feather name="search" color="#858585" size={24} />
          </View>
        </View>
      </View>
      {/* header part  end */}
      {/* body part start */}
      <View
        style={{
          paddingHorizontal: '4%',
        }}>
        <View
          style={{
            paddingVertical: 24,
            paddingHorizontal: 5,
            width: '100%',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllTeacher')}
            style={{
              width: 70,
              padding: 4,
            }}>
            <Text
              style={{
                textAlign: 'right',
                color: GStyles.primaryPurple,
                fontSize: FontSize(14),
                fontWeight: '400',
                fontFamily: GStyles.Poppins,
                lineHeight: 19,
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {/* simple Card  start */}

        <View
          style={{
            height: 70,
            width: '100%',
            borderWidth: 1,
            borderColor: '#ECECEC',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderRadius: 8,
          }}>
          <View>
            <Text
              style={{
                color: '#3D3D3D',
                fontSize: FontSize(16),
                fontWeight: '600',
                fontFamily: GStyles.PoppinsSemiBold,
                lineHeight: 22,
                letterSpacing: 0.8,
              }}>
              Dan’s family
            </Text>
            <Text
              style={{
                color: '#3D3D3D',
                fontSize: FontSize(14),
                fontWeight: '400',
                fontFamily: GStyles.Poppins,
                lineHeight: 19,
                letterSpacing: 0.8,
              }}>
              Kids Count : 26
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
            }}>
            <Entypo name="dots-three-horizontal" color="#3D3D3D" size={20} />
          </TouchableOpacity>
        </View>
        {/* simple Card  end */}

        {/* kids card start */}
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 10,
            gap: 15,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {[...Array(10)].map((item, index) => (
            <View
              key={index}
              style={{
                width: 156,
                height: 168,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                padding: 24,
                position: 'relative',
                //   backgroundColor: GStyles.primaryBlue,
                borderWidth: 1,
                borderColor: '#ECECEC',
              }}>
              <View
                style={{
                  width: 61,
                  height: 61,
                  borderWidth: 1,
                  borderColor: GStyles.primaryBlue,
                  padding: 3,
                  borderRadius: 100,
                }}>
                <Image
                  style={{
                    width: 53,
                    height: 53,
                    borderRadius: 100,
                  }}
                  source={{
                    uri: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
                  }}
                />
              </View>
              <Text
                style={{
                  color: '#3D3D3D',
                  fontSize: FontSize(16),
                  fontWeight: '500',
                  fontFamily: GStyles.PoppinsSemiBold,
                 
                  letterSpacing: 0.8,
                }}>
                Aadi T
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Text
                  style={{
                    fontSize: FontSize(12),
                    color: '#797979',
                    fontFamily: GStyles.Poppins,
                    lineHeight: 18,
                    fontWeight: '400',
                    letterSpacing: 0.8,
                  }}>
                  Reword:
                </Text>
                <Text
                  style={{
                    fontSize: FontSize(12),
                    color: '#797979',
                    fontFamily: GStyles.Poppins,
                    lineHeight: 18,
                    fontWeight: '400',
                    letterSpacing: 0.8,
                  }}>
                  4.5
                </Text>
                <AntDesign name="star" color={GStyles.primaryYellow} />
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  padding: 10,
                }}>
                {/* <FontAwesome name="tasks" color="#686868" size={18} />
                 */}
                <Image
                  source={require('../../assets/icons/taskIcon.png')}
                  style={{
                    width: 18,
                    height: 18,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* kids card end */}
      </View>
      {/* body part end */}

      <StatusBar
        backgroundColor={GStyles.primaryBlue}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
    </View>
  );
};

export default AdminHomeScreen;

const styles = StyleSheet.create({});

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

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const StudentHomeScreen = ({navigation}: AdminHOmeProps) => {
  const [isCompeted, setIsCompeted] = React.useState(false);

  return (
    <View
      style={{
        height: '100%',
      }}>
      {/* header part  start */}
      <View
        style={{
          height: 170,
          backgroundColor: GStyles.primaryOrange,
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
            borderColor: GStyles.primaryOrange,
            borderWidth: 15,
            borderRadius: 100,
            opacity: 0.4,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
            paddingVertical: 5,
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
                uri: 'https://s3-alpha-sig.figma.com/img/7e25/5623/4294ee5c7b1b9f58586be6b07d5af09b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UqVh6r11OAxRRUyG9Ja8zPMX~ljsBgG1IQzANVfrxnuDysbnef64v2qruEJL6c~1sQfwVOryFtqkQaNFbXvhaAxNOVYFtCbe1UN~i1AOGAgAOrK4Zb0D6vJ8G5-uVV1Z8mcLcIbg68eMBOuh7KRB0iTkjG6RIKyp0j7LdBRFf9B-DHREoCbHAfgeMGKHdJ5ZEzuzgYmAX8GP1I9YhjiJuzfnTWEucKKFdzFkD8ntIJbtePxOD7myM6uIRrzqAsW8SXaU1M8xglowzRma9rkzofTVy170u7386aKAuDbHoIMGI44B4x8C2cr6PueVzpGeFP2O3WxADEXSxtmb1MoEqA__',
              }}
            />
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '800',
                  fontFamily: GStyles.Poppins,
                  lineHeight: 22,
                  letterSpacing: 1.4,
                }}>
                Rina Karina
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                  fontWeight: '400',
                  letterSpacing: 0.8,
                }}>
                Your Points: 100
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
      <ScrollView
        style={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            alignItems: 'center',
            borderBottomColor: GStyles.borderColor['#ECECEC'],
            borderBottomWidth: 2,
          }}>
          <TouchableOpacity
            onPress={() => setIsCompeted(!isCompeted)}
            style={{
              width: '40%',
            }}>
            <Text
              style={{
                color: GStyles.textColor['#3D3D3D'],
                fontSize: 16,
                fontFamily: GStyles.Poppins,
                fontWeight: '400',
                borderBottomColor: isCompeted
                  ? GStyles.borderColor['#ECECEC']
                  : GStyles.primaryOrange,
                borderBottomWidth: isCompeted ? 0 : 3,
                textAlign: 'center',
              }}>
              New Task
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsCompeted(!isCompeted)}
            style={{
              width: '40%',
            }}>
            <Text
              style={{
                color: GStyles.textColor['#3D3D3D'],
                fontSize: 16,
                fontFamily: GStyles.Poppins,
                fontWeight: '400',
                borderBottomColor: isCompeted
                  ? GStyles.primaryOrange
                  : GStyles.borderColor['#ECECEC'],
                borderBottomWidth: isCompeted ? 3 : 0,
                textAlign: 'center',
              }}>
              Completed Task
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            // key={i}
            style={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ECECEC',
              borderRadius: 8,
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 14,
                // alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: GStyles.primaryBlue,
                  borderRadius: 100,
                }}>
                <Image
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/5ed6/a25e/30d0b09b0411b981dafc20d45811f98b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~gmlW1G6g5XRSx36O1Frt5zyupXRqxCUz4lJFTg1sC92Wij9xKlXrGfrqjpOszO74yM-8qMQVXvtj03PtQpYwwm29OkuZdsGHhNTq97CPSjQab8IPyIvpSJIfcD814JsuPBE8Y7p~dJaR7ntiFamBpNKLxuJ3f36DYf8-wmZP8iv4vtHfm55Q26s3gjKT~2NEL7ss8iSDL282wxCC7woBNemG9gjMmA7Qxa96-PvXQRsGTKqX9aMDBJ7AI2qKYpmvjP9w4d1pM7IR7JtEdhFAf3jcnptld-3EYZGrcr9ITpjbBGb0GZKguL11wwH07SxkzyB5if8wZt44qA3Ee5tA__',
                  }}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 100,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.primaryPurple,
                  }}>
                  Home Errands
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: GStyles.PoppinsMedium,
                    color: '#3D3D3D',
                  }}>
                  Make Your Bed
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Text>Points:</Text>
                  <Text>50</Text>
                  <AntDesign name="star" color={GStyles.primaryYellow} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.primaryBlue,
                    marginTop: 8,
                  }}>
                  anytime
                </Text>
              </View>
            </View>
            {/* {assign.includes(i) ? ( */}
            {/* <TouchableOpacity
                onPress={() => navigation.navigate('EditCustomTask')}
                style={{
                  backgroundColor: GStyles.primaryBlue,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 100,
                  width: 90,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="edit" size={16} color="white" />
              </TouchableOpacity>
            ) : ( */}
            <TouchableOpacity
              onPress={() => {
                //   setAssign([...assign, i]);
              }}
              style={{
                backgroundColor: GStyles.primaryBlue,
                borderRadius: 100,
                width: 100,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: GStyles.Poppins,
                }}>
                Achieve
              </Text>
            </TouchableOpacity>
            {/* )} */}
          </View>
        </View>
      </ScrollView>
      {/* body part end */}

      <StatusBar
        backgroundColor={GStyles.primaryOrange}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
    </View>
  );
};

export default StudentHomeScreen;

const styles = StyleSheet.create({});

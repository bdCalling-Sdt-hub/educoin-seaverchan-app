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
import CustomModal from '../../components/common/CustomModal/CustomModal';

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const StudentHomeScreen = ({navigation}: AdminHOmeProps) => {
  const [isCompeted, setIsCompeted] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

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
              onPress={() => navigation.navigate('StudentNotification')}>
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
                paddingVertical: 8,
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
                paddingVertical: 8,
              }}>
              Completed Task
            </Text>
          </TouchableOpacity>
        </View>
        {isCompeted ? (
          <>
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
                <View
                  style={{
                    // backgroundColor: GStyles.primaryBlue,

                    width: 100,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: GStyles.primaryBlue,
                      fontSize: 14,
                      fontFamily: GStyles.Poppins,
                    }}>
                    Done
                  </Text>
                </View>
                {/* )} */}
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: '4%',
                // borderWidth: 1,
                // borderColor: '#ECECEC',
                borderRadius: 8,
                marginTop: 24,
                marginBottom: 18,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: GStyles.PoppinsMedium,
                  color: GStyles.textColor['#3D3D3D'],

                  fontWeight: '500',
                }}>
                Class Member
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StudentPublicProfile')}
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
                    borderWidth: 2,
                    borderColor: GStyles.primaryBlue,
                    padding: 3,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#3D3D3D',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: GStyles.PoppinsSemiBold,
                    lineHeight: 24,
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
                      fontSize: 12,
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
                      fontSize: 12,
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
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('AllStudents')}
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
                    width: 156,
                    height: 168,
                    backgroundColor: 'rgba(0, 0, 0, 0.10)',
                    position: 'absolute',
                    zIndex: 10000,
                    borderWidth: 1,
                    borderColor: '#ECECEC',
                    borderRadius: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 41,
                      color: 'white',
                      fontFamily: GStyles.PoppinsMedium,
                      letterSpacing: 0.8,
                    }}>
                    12+
                  </Text>
                </View>
                <View
                  style={{
                    width: 61,
                    height: 61,
                    borderWidth: 2,
                    borderColor: GStyles.primaryBlue,
                    padding: 3,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#3D3D3D',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: GStyles.PoppinsSemiBold,
                    lineHeight: 24,
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
                      fontSize: 12,
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
                      fontSize: 12,
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
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
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
                    setModalVisible(true);
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StudentPublicProfile')}
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
                    borderWidth: 2,
                    borderColor: GStyles.primaryBlue,
                    padding: 3,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#3D3D3D',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: GStyles.PoppinsSemiBold,
                    lineHeight: 24,
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
                      fontSize: 12,
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
                      fontSize: 12,
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
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('AllStudents')}
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
                    width: 156,
                    height: 168,
                    backgroundColor: 'rgba(0, 0, 0, 0.10)',
                    position: 'absolute',
                    zIndex: 10000,
                    borderWidth: 1,
                    borderColor: '#ECECEC',
                    borderRadius: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 41,
                      color: 'white',
                      fontFamily: GStyles.PoppinsMedium,
                      letterSpacing: 0.8,
                    }}>
                    12+
                  </Text>
                </View>
                <View
                  style={{
                    width: 61,
                    height: 61,
                    borderWidth: 2,
                    borderColor: GStyles.primaryBlue,
                    padding: 3,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#3D3D3D',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: GStyles.PoppinsSemiBold,
                    lineHeight: 24,
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
                      fontSize: 12,
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
                      fontSize: 12,
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
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
      {/* body part end */}

      <StatusBar
        backgroundColor={GStyles.primaryOrange}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
      <CustomModal
        modalVisible={modalVisible}
        backButton
        setModalVisible={setModalVisible}
        height={289}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: GStyles.PoppinsMedium,
              textAlign: 'center',
              color: GStyles.textColor['#3D3D3D'],
              marginTop: 10,
            }}>
            Done Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            You will go to class and show your performance and then the teacher
            will give you a star on your work
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: GStyles.primaryOrange,
                width: '30%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default StudentHomeScreen;

const styles = StyleSheet.create({});

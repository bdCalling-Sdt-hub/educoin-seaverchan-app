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

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderOption from '../../components/common/header/HeaderOption';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import { HomeNavigProps } from '../../interfaces/NavigationPros';



const StudentHomeScreen = ({
  navigation,

}: HomeNavigProps<null>) => {
  const [isCompeted, setIsCompeted] = React.useState('New Task');
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* header part  start */}
      {/* <View
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
      </View> */}
      <HomeTopHeader
        drawerNavigation={navigation}
        navigation={navigation}
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        notifyRoute="StudentNotification"
        profileStyle="student"
        imgAssets={require("../../assets/icons/icon (10).png")}
        userDetails={{
     
          name: 'Rina Karina',
          points: 100,
        }}
        containerGap={30}
      />
      {/* header part  end */}
      {/* body part start */}
      <ScrollView
       showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
        }}>
        <HeaderOption
          isOp={isCompeted}
          setIsOp={setIsCompeted}
          fillButton
          gap={24}
          marginTop={5}
          marginBottom={15}
          // marginHorizontal={10}
          
          op1="New Task"
          op2="Completed Task"
          borderColor={GStyles.orange.lightActive}
          activeBorderColor={GStyles.primaryOrange}
          filButtonHight={48}
        />
        {isCompeted === 'Completed Task' ? (
          <>
            <View
              style={{
                marginBottom: 25,
              }}>
              {[...Array(10)].map((_, index) => (
                <View
                  key={index}
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
                          uri: 'https://s3-alpha-sig.figma.com/img/7e25/5623/4294ee5c7b1b9f58586be6b07d5af09b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoYP6qbNyHMaDp7G~F0LsLi4D0Zb2zJK9~MoCQh-nBo13nilsaprRhhB~jZ3NESLlm45D6~LJzohohDlrx1PyVFJhC1c6SYzNiZemEYD9S5WofLU-5StHzQuuoU6dPwZJHLeX9AX9EdHNV-u3xX9jlMTspEKEb2cXbH0QH54QsEbsKi0ILq7RQvW~PBB251NBenJtxcsXGiDmjHaRyEcKjS8L56erB11TsgtmpBgpeQvRnY5rrLgBzX1H-hD769AETCEgNj7T9ZbUwJq1-YuI9j13kTEuTtjv9cuwWlkaOLGYSnJTxfrjoMU36e3zvQDAi6O~Gm00Uiwa0J7HtQAlQ__',
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

                  <View
                    style={{
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
                      Completed
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            {/* <View
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
            </View> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              {/* <TouchableOpacity
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
                    borderWidth: 1,
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
                  
               
                  <Image
                    source={require('../../assets/icons/taskIcon.png')}
                    style={{
                      width: 18,
                      height: 18,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </TouchableOpacity> */}

              {/* <TouchableOpacity
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
                    borderWidth: 1,
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
                  <Image
                    source={require('../../assets/icons/taskIcon.png')}
                    style={{
                      width: 18,
                      height: 18,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </TouchableOpacity> */}
            </View>
          </>
        ) : (
          <>
            <View>
              <View
                style={{
                  marginBottom: 25,
                }}>
                {[...Array(10)].map((_, index) => (
                  <View
                    key={index}
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
                            uri: 'https://s3-alpha-sig.figma.com/img/3655/c251/53c01811a584d55f7d5e1984c81a983b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ozsInqYzyeuOvHLdANZdHfcFbTIGXFbUTleaOF3JlQiNYkY~PCDec1-w0eXvlor-~VVpwiAIUUFl8~TXFk-8gKDJ3lDcqSlzAcjm02S6TlU5eEsforuhkhDfrMXZJKzFwc9j18HTvP3UM~BKZQOMB1IVXHfLdVGy-ad5EUkKxiTtuqIWkj16a4vJHT6xoMJkELxcqPBHnpB2aWekC5ntJjA~HOn8a9-rjSGKAJxMDfOcTgOu1KVbOY4XaSPI0gZK~OfMVOr7rTi6-K4Xn5LMp8Wy~4YJSOSu~V3iroaEvTbUIHZRZDZ-f81~WOSZe~KE19ZY6PU3Ck9dzCzWlLxLaA__',
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
                          <AntDesign
                            name="star"
                            color={GStyles.primaryYellow}
                          />
                        </View>
                      </View>
                    </View>

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
                       Achieved
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
            {/* <View
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
                    borderWidth: 1,
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
            </View> */}
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
        height={'30%'}
        width={'85%'}
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

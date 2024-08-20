import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {GStyles} from '../../styles/GStyles';
import { FontSize } from '../../utils/utils';

interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}
const AllTeacherScreen = ({navigation}: AdminRoutesProps) => {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <HeaderBackground title="All Teacher" navigation={navigation} />

      <View
        style={{
          backgroundColor: 'white',
          height: 48,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 20,
          marginHorizontal: '4%',
          borderRadius: 100,
        }}>
        <TextInput
          placeholder="Search here...."
          placeholderTextColor="#858585"
          style={{
            flex: 1,
            paddingHorizontal: 10,
          }}
        />
        <Feather name="search" color="#858585" size={24} />
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                Esther
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
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
                  <FontAwesome name="tasks" color="#686868" size={18} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* kids card end */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllTeacherScreen;

const styles = StyleSheet.create({});

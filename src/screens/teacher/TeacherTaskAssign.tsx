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
import {GStyles} from '../../styles/GStyles';
import HeaderOption from '../../components/common/header/HeaderOption';
import {NavigProps} from '../../interfaces/NavigationPros';
import CustomModal from '../../components/common/CustomModal/CustomModal';

const TeacherTaskAssign = ({navigation}: NavigProps<null>) => {
  const [assign, setAssign] = React.useState<number[]>([]);
  const [op, setOp] = React.useState<string>('Personal Student');
  const [studentClass, setStudentClass] = React.useState<number>();
  const [isClassOk, setIsClassOk] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Assign Task"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

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
          borderColor : GStyles.borderColor['#ECECEC'],
          borderWidth: 1,
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
      <HeaderOption
        isOp={op}
        setIsOp={setOp}
        activeBorderColor={GStyles.primaryPurple}
        op1="Personal Student"
        op2="Class"
        marginHorizontal={10}
      />
      {op === 'Personal Student' ? (
        <>
          <TouchableOpacity
            onPress={() => {
              if (assign?.length > 0) {
                setAssign([]);
              } else {
                setAssign([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20, 21,
                ]);
              }
            }}
            style={{
              paddingHorizontal: '4%',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsMedium,
              }}>
              {assign.length > 0
                ? 'Deselect All' + `(${assign?.length})`
                : 'Select All'}
            </Text>
          </TouchableOpacity>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: '4%',
              paddingBottom: 10,
            }}>
            {[...Array(20)].map((item, i: number) => (
              <View
                key={i}
                style={{
                  height: 80,
                  borderWidth: 1,
                  borderColor: '#ECECEC',
                  borderRadius: 8,
                  marginVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
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
                      fontSize: 16,
                      fontFamily: GStyles.PoppinsMedium,
                      color: '#3D3D3D',
                      marginTop: 10,
                    }}>
                    Hari Danang
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>Points:</Text>
                    <Text>50</Text>
                    <AntDesign name="star" color={GStyles.primaryYellow} />
                  </View>
                </View>
                {assign.includes(i) ? (
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('EditCustomTask')}
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
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: GStyles.Poppins,
                      }}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setAssign([...assign, i]);
                    }}
                    style={{
                      borderColor: GStyles.primaryBlue,
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      borderRadius: 100,
                      width: 90,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: GStyles.primaryBlue,
                        fontSize: 16,
                        fontFamily: GStyles.Poppins,
                      }}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <>
          {isClassOk ? (
            <>
              <View
                style={{
                  paddingHorizontal: '4%',
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (assign?.length > 0) {
                        setAssign([]);
                      } else {
                        setAssign([
                          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                          16, 17, 18, 19, 20, 21,
                        ]);
                      }
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: GStyles.PoppinsMedium,
                      }}>
                      {assign.length > 0
                        ? 'Deselect All' + `(${assign?.length})`
                        : 'Select All'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setIsClassOk(false);
                      setStudentClass(0);
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: GStyles.PoppinsMedium,
                      }}>
                      Select Class {studentClass ? studentClass : ''}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: '4%',
                  paddingBottom: 10,
                }}>
                {[...Array(20)].map((item, i: number) => (
                  <View
                    key={i}
                    style={{
                      height: 80,
                      borderWidth: 1,
                      borderColor: '#ECECEC',
                      borderRadius: 8,
                      marginVertical: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
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
                          fontSize: 16,
                          fontFamily: GStyles.PoppinsMedium,
                          color: '#3D3D3D',
                          marginTop: 10,
                        }}>
                        Hari Danang
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text>Points:</Text>
                        <Text>50</Text>
                        <AntDesign name="star" color={GStyles.primaryYellow} />
                      </View>
                    </View>
                    {assign.includes(i) ? (
                      <TouchableOpacity
                        // onPress={() => navigation.navigate('EditCustomTask')}
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
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: GStyles.Poppins,
                          }}>
                          Submit
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setAssign([...assign, i]);
                        }}
                        style={{
                          borderColor: GStyles.primaryBlue,
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          borderRadius: 100,
                          width: 90,
                          height: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                        }}>
                        <Text
                          style={{
                            color: GStyles.primaryBlue,
                            fontSize: 16,
                            fontFamily: GStyles.Poppins,
                          }}>
                          Submit
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </ScrollView>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={{
                  paddingHorizontal: '4%',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: GStyles.PoppinsMedium,
                  }}>
                  Select All Class
                </Text>
              </TouchableOpacity>
              <ScrollView>
                {[...Array(20)].map((item, i: number) => (
                  <TouchableOpacity
                    onPressIn={() => setStudentClass(i + 1)}
                    key={i}
                    style={{
                      paddingVertical: 10,
                      marginHorizontal: 10,
                      marginBottom: 10,
                      borderWidth: 1,
                      borderColor:
                        studentClass === i + 1
                          ? GStyles.primaryPurple
                          : '#ECECEC',
                      borderRadius: 8,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: GStyles.PoppinsMedium,
                        fontSize: 16,
                        color: '#3D3D3D',
                      }}>
                      Class {i + 1}{' '}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
        </>
      )}

      <View
        style={{
          paddingHorizontal: '4%',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: GStyles.white,
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (op === 'Personal Student') {
              setModalVisible(true);
            }
            if (op === 'Class' && studentClass) {
              setIsClassOk(true);
            }
            if (op === 'Class' && isClassOk && studentClass) {
              setModalVisible(true);
            }
          }}
          style={{
            backgroundColor: GStyles.primaryBlue,
            padding: 10,
            borderRadius: 100,

            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            {op === 'Personal Student'
              ? 'Send'
              : op === 'Class' && studentClass && isClassOk
              ? 'Send'
              : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
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
            Assign Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            simply dummy text of the printing and typesetting industry
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: GStyles.primaryPurple,
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
                Exit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default TeacherTaskAssign;

const styles = StyleSheet.create({});

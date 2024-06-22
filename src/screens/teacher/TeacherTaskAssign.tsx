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

const TeacherTaskAssign = ({navigation}: NavigProps) => {
  const [assign, setAssign] = React.useState<number[]>([]);
  const [op, setOp] = React.useState<string>('Personal Student');
  console.log(assign);
  return (
    <View
      style={{
        height: '100%',
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
            Select All
          </Text>
        </TouchableOpacity>
      ) : (
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
      )}
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
          //   onPress={() => setModalVisible(true)}
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
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherTaskAssign;

const styles = StyleSheet.create({});

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';
import {TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native';

const TaskDetailsScreen = ({navigation}: NavigProps<null>) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Details"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView>
        <View
          style={{
            height: 185,

            justifyContent: 'center',
            alignItems: 'center',
            borderColor: GStyles.borderColor['#ECECEC'],
            borderWidth: 1,
            marginHorizontal: '4%',
            marginVertical: 20,
            borderRadius: 8,
            gap: 8,
            position: 'relative',
          }}>
          <View
            style={{
              borderColor: GStyles.primaryPurple,
              borderWidth: 1,
              width: 56,
              height: 56,
              borderRadius: 100,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/3655/c251/53c01811a584d55f7d5e1984c81a983b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P9qGzbglmKvuIvejcQ4cAUk2v-bTOj-Y0qAmgmo~YRNwE0yNPgiu~~WO9Ag~kCTCc9BKhyqvohE~N9J7nYBWdPNQCEi7zYI-Lr56jYZgTHtQz3cE8xL6XsXVE8-0tn5PL7b84An9XrbmK31UZxXDGsFuRSXAZWRXG9UDHDTEOPlGlu-Ks9XAfVlXQw1nTs05uyWgRRMUDVRuygw-TsXJDsjMIU13ZmBp9efGu73vxqC7iyskCZKkAJYNz7Lp9Jl5xjQwgsF038NXLyL5clxVbyKafeonu4GVB6R9OG0v3SjX-sphSRcbbfSYAEuet-GyX4hDNY1j~kAlCg9o6FMafA__',
              }}
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.textColor['#3D3D3D'],
                }}>
                Category:
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.primaryPurple,
                }}>
                Home Errands
              </Text>
            </View>
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
              <Text>Rewards:</Text>
              <Text>50</Text>
              <AntDesign name="star" color={GStyles.primaryYellow} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('EditTeacherCustomTask');
            }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: 15,
            }}>
            <AntDesign
              name="edit"
              size={25}
              color={GStyles.textColor['#3D3D3D']}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: '5%',
            marginTop: 20,
            borderRadius: 10,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.PoppinsMedium,
              color: '#3D3D3D',
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Student who completed this task
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...Array(10)]}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => {
                  navigation?.navigate('StudentsProgressAndInfo');
                }}
                style={{
                  borderRadius: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  padding: 15,
                  position: 'relative',
                  //   backgroundColor: GStyles.primaryBlue,
                  width: 100,
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
                      uri: 'https://s3-alpha-sig.figma.com/img/5ed6/a25e/30d0b09b0411b981dafc20d45811f98b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~gmlW1G6g5XRSx36O1Frt5zyupXRqxCUz4lJFTg1sC92Wij9xKlXrGfrqjpOszO74yM-8qMQVXvtj03PtQpYwwm29OkuZdsGHhNTq97CPSjQab8IPyIvpSJIfcD814JsuPBE8Y7p~dJaR7ntiFamBpNKLxuJ3f36DYf8-wmZP8iv4vtHfm55Q26s3gjKT~2NEL7ss8iSDL282wxCC7woBNemG9gjMmA7Qxa96-PvXQRsGTKqX9aMDBJ7AI2qKYpmvjP9w4d1pM7IR7JtEdhFAf3jcnptld-3EYZGrcr9ITpjbBGb0GZKguL11wwH07SxkzyB5if8wZt44qA3Ee5tA__',
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 14,
                      fontWeight: '500',
                      fontFamily: GStyles.PoppinsMedium,

                      textAlign: 'center',
                      letterSpacing: 0.4,
                    }}>
                    Alvin Tao
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: '4%',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 20,
          right: 0,
          width: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation?.navigate('TeacherCreateTask')}
          style={{
            backgroundColor: GStyles.primaryPurple,
            padding: 10,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '50%',
            gap: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            <AntDesign name="plus" size={20} color="white" />
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Add new task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskDetailsScreen;

const styles = StyleSheet.create({});

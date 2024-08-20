import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { FontSize } from '../../utils/utils';

interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}

const AdminTask = ({navigation}: AdminRoutesProps) => {
  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
      }}>
      <HeaderBackground navigation={navigation} title="Rewards" />

      {/* card container  */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 15,
          paddingHorizontal: '4%',
        }}
        showsVerticalScrollIndicator={false}>
        {[...Array(10)].map((item, index) => (
          <Fragment key={index}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                marginVertical: 5,
                borderColor: '#ECECEC',
                borderWidth: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 24,
                  padding: 14,
                }}>
                <View
                  style={{
                    borderBlockColor: GStyles.primaryBlue,
                    borderWidth: 1,
                    borderColor: GStyles.primaryBlue,

                    borderRadius: 100,
                    padding: 5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/3655/c251/53c01811a584d55f7d5e1984c81a983b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P9qGzbglmKvuIvejcQ4cAUk2v-bTOj-Y0qAmgmo~YRNwE0yNPgiu~~WO9Ag~kCTCc9BKhyqvohE~N9J7nYBWdPNQCEi7zYI-Lr56jYZgTHtQz3cE8xL6XsXVE8-0tn5PL7b84An9XrbmK31UZxXDGsFuRSXAZWRXG9UDHDTEOPlGlu-Ks9XAfVlXQw1nTs05uyWgRRMUDVRuygw-TsXJDsjMIU13ZmBp9efGu73vxqC7iyskCZKkAJYNz7Lp9Jl5xjQwgsF038NXLyL5clxVbyKafeonu4GVB6R9OG0v3SjX-sphSRcbbfSYAEuet-GyX4hDNY1j~kAlCg9o6FMafA__',
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                    }}
                  />
                </View>
                <View style={{gap: 5}}>
                  <Text
                    style={{
                      fontSize: FontSize(16),
                      fontWeight: '500',
                      color: '#3D3D3D',
                      fontFamily: GStyles.PoppinsSemiBold,
                      letterSpacing: 0.8,
                    }}>
                    Make Your Bed
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
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
                      16
                    </Text>
                    <AntDesign name="star" color={GStyles.primaryYellow} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Fragment>
        ))}
      </ScrollView>

      {/* create new Task button  */}
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
          onPress={() => navigation.navigate('CreateTask')}
          style={{
            backgroundColor: GStyles.primaryBlue,
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
              fontSize: FontSize(16),
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

export default AdminTask;

const styles = StyleSheet.create({});

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { SherAvatar } from '../../utils/ShearData';

const AllStudentsScreen = ({navigation}: NavigProps<null>) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Progress"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />

      <FlatList
        data={SherAvatar}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          paddingBottom: 20,
        }}
        ListHeaderComponentStyle={{
          alignSelf: 'flex-start',
        }}
        ListHeaderComponent={() => (
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
        )}
        renderItem={item => (
          <Fragment key={item.index}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation?.navigate('StudentPublicProfile')}
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
                    source={item.item.img}
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
          </Fragment>
        )}
      />
    </View>
  );
};

export default AllStudentsScreen;

const styles = StyleSheet.create({});

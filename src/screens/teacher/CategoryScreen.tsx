import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {NavigProps} from '../../interfaces/NavigationPros';
import { categoryIcons, ShearIcons } from '../../utils/ShearData';


const CategoryScreen = ({navigation}: NavigProps<null>) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Categories"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: '4%',
          paddingTop: 20,
          paddingBottom: 30,
          gap: 20,
        }}
        data={ShearIcons}
        // numColumns={2}

        ListHeaderComponent={() => (
          <TouchableOpacity
      
            onPress={() => {
              navigation?.navigate('TeacherAddCategory');
            }}
            style={{
              //   height: 182,

              borderWidth: 1,
              borderColor: '#E9E9E9',
              borderRadius: 8,
              padding: 16,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                gap: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/images/custom/customTaskImage.png')}
                resizeMode="center"
                style={{
                  width: 55,
                  height: 55,
                }}
              />

              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    // textAlign: 'center',
                    fontFamily: GStyles.PoppinsSemiBold,
                    fontSize: 16,
                    color: '#3D3D3D',
                  }}>
                  Add new
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderItem={item => (
          <TouchableOpacity
          disabled
            onPress={() => {}}
            key={item.index}
            style={{
              //   height: 182,

              borderWidth: 1,
              borderColor: '#E9E9E9',
              borderRadius: 8,
              padding: 16,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                gap: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={item.item.img}
                resizeMode="center"
                style={{
                  width: 70,
                  height: 70,
                }}
              />

              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    // textAlign: 'center',
                    fontFamily: GStyles.PoppinsSemiBold,
                    fontSize: 16,
                    color: '#3D3D3D',
                  }}>
                  {item.item.title === 'New Task'
                    ? 'New Task'
                    : item.item.title}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation?.navigate('EditCategory')}
                style={{
                  backgroundColor: GStyles.primaryPurple,

                  borderRadius: 100,
                  width: 76,
                  height: 33,
                  justifyContent: 'center',
                  alignItems: 'center',
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
                      fontSize: 14,
                      color: 'white',
                      fontFamily: GStyles.PoppinsSemiBold,
                    }}>
                    Edit
                  </Text>
                  <AntDesign name="edit" size={16} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});

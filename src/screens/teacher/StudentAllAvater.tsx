import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';

const StudentAllAvatar = ({navigation}: NavigProps) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="All Avatar"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[...Array(10)]}
        numColumns={3}
        contentContainerStyle={{
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginHorizontal: 'auto',
        }}
        columnWrapperStyle={{
          justifyContent: 'flex-start',

          gap: 20,
        }}
        renderItem={item => (
          <TouchableOpacity
            key={item.index}
            style={{
              height: 110,
              width: 110,
              borderRadius: 100,
              backgroundColor: '#F1F1F1',
              justifyContent: 'center',
              alignItems: 'center',
              // borderColor: GStyles.primaryPurple,
              // borderWidth: 2,
            }}>
            <Image
              style={{
                width: 105,
                height: 105,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StudentAllAvatar;

const styles = StyleSheet.create({});

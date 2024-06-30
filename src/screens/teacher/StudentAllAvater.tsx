import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';


const data = [
  {
    id: 1,
    avatar: require("../../assets/images/studentAvatar/1.png"),
  },
  {
    id: 2,
    avatar: require("../../assets/images/studentAvatar/2.png"),
  },
  {
    id: 3,
    avatar: require("../../assets/images/studentAvatar/3.png"),
  },
  {
    id: 4,
    avatar: require("../../assets/images/studentAvatar/4.png"),
  },
  {
    id: 5,
    avatar: require("../../assets/images/studentAvatar/5.png"),
  },
  {
    id: 6,
    avatar: require("../../assets/images/studentAvatar/6.png"),
  },
  {
    id: 7,
    avatar: require("../../assets/images/studentAvatar/7.png"),
  },
  {
    id: 8,
    avatar: require("../../assets/images/studentAvatar/8.png"),
  },
  {
    id: 9,
    avatar: require("../../assets/images/studentAvatar/9.png"),
  },
]

const StudentAllAvatar = ({navigation}: NavigProps<null>) => {
  const [selectAvatar,setSelectedAvatar] =React.useState<number>()
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
        data={data}
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
            onPress={()=>{
              setSelectedAvatar(item.index)
            }}
            style={{
              height: 110,
              width: 110,
              borderRadius: 100,
              backgroundColor: '#F1F1F1',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: item.index === selectAvatar ? GStyles.primaryPurple : GStyles.borderColor['#ECECEC'],
              borderWidth: 2,
            }}>
            <Image
              style={{
                width: 105,
                height: 105,
                borderRadius: 100,
              }}
              source={item.item.avatar}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StudentAllAvatar;

const styles = StyleSheet.create({});

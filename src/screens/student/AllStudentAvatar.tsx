import { StyleSheet, View } from 'react-native';

import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import { NavigProps } from '../../interfaces/NavigationPros';
import { GStyles } from '../../styles/GStyles';

const AllStudentAvatar = ({navigation}: NavigProps<null>) => {
  const [selectAvatar,setSelectedAvatar] =React.useState<number>()
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
     <HeaderBackground
        title="Avatar"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        data={SherAvatar}
        numColumns={3}
        contentContainerStyle={{
          paddingVertical: 20,
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
              source={item.item.img}
              resizeMode='center'
            />
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
};

export default AllStudentAvatar;

const styles = StyleSheet.create({});

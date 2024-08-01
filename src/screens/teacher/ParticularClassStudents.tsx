import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import StudentCard from '../../components/common/Cards/StudentCard';

 interface ParamsData {
  class: string;
 }

const ParticularClassStudents = ({navigation, route}: NavigProps<ParamsData>) => {
  console.log(route?.params);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title={`Class:  ${route?.params.data.class}`}
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Array(2)]}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{
          gap: 10,
          alignSelf: 'center',
        }}
        ListHeaderComponentStyle={{
          width: '100%',
        }}
        renderItem={item => (
          <Fragment key={item.index}>
            <StudentCard
              imgBorderColor={GStyles.primaryPurple}
              width={'45%'}
              imgAssets={require(`../../assets/images/avatar/15.png`)}
              student={{
               
                class: 1,
                level: 9,
                name: 'John Doe',
                points: 100,
              }}
              onPress={() => {
                // console.log('lol');
                navigation?.navigate('StudentsProgressAndInfo');
              }}
              key={item.index}
            />
          </Fragment>
        )}
      />
    </View>
  );
};

export default ParticularClassStudents;

const styles = StyleSheet.create({});

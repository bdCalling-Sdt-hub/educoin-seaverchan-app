import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import StudentCard from '../../components/common/Cards/StudentCard';

const ParticularClassStudents = ({navigation, route}: NavigProps) => {
  console.log(route?.params);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title={`Class:  ${route?.params?.class}`}
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Array(20)]}
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
              student={{
                image:
                  'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                class: 1,
                level: 9,
                name: 'John Doe',
                points: 100,
              }}
              onPress={() => {
                // console.log('lol');
                navigation.navigate('StudentsProgressAndInfo');
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

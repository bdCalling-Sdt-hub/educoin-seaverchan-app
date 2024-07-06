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
                  'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afixL5pE~IsaQw65jxMkzseJItxix97TkD~rbrgD-m2ZvD6625T~S~qc1EmHgAqM0FK-rPxSkffSVBr65cWbKC~5LRopTzHlnJKSBZl62DNtTNfUhNBSzznBnHDzTs-08EF2-XWNaGDkutf4N4nnUKNQq6XBfYf81yQEmsmGCN9kNdNsbF1pIDMBlOauet~gbJsNqcr1-xEf~WUeIGHnKDXcMO4hmKX7URkswKuQI-aoSNkVsHNsXacbM9FRMuXWMJr45pUdEkTRVUT6KgUB-rcpvBIEconh1gHFfSYiQhTO83LWKyDcrOd5OKS2GC7OC9nmJim41o1De7u4RdQADw__',
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

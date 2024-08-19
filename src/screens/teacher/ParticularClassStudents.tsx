import {FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles, WIDTH} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import StudentCard from '../../components/common/Cards/StudentCard';
import { useGetStudentThrowClassQuery } from '../../redux/apiSlices/teacher/teacherStudentSlices';
import { useContextApi } from '../../context/ContextApi';
import { GridList } from 'react-native-ui-lib';
import { imageUrl } from '../../redux/api/baseApi';
import { useLoginStudentMutation } from '../../redux/apiSlices/authSlice';

 interface ParamsData {
  class: string;
 }

const ParticularClassStudents = ({navigation, route}: NavigProps<ParamsData>) => {
  // console.log(route?.params);
  const [pageStudent, setPageStudent] = React.useState(1);
const {user} = useContextApi();
  const {data : students,refetch : studentRefetch,isSuccess : studentIsSuccess,isFetching : studentLoading} = useGetStudentThrowClassQuery({token :  user.token , className : route?.params?.data})

  const [loadingStudent] = useLoginStudentMutation();
  const [ALlStudents, setAllStudents] = React.useState<any[]>([]);



  React.useEffect(() => {
    // Append new students data to the existing state only if there are new items
    if (students?.data?.length) {
      setAllStudents(prevStudents => prevStudents.concat(students?.data));
    }
    // return ()=>{
    //   // Cleanup function
    //   setPage(1);
    // }
  }, [students?.data]);

  const loadMoreStudents = () => {
    if (pageStudent < students?.pagination?.totalPage) {
      setPageStudent(prevPage => prevPage == 0 ? 2 :prevPage + 1);
    }
  };

  const resetStudentData = () => {
    if(pageStudent){
      setPageStudent(0);
      setAllStudents([]);
     studentRefetch();
 
    }
   };
  

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title={`${route?.params.data}`}
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <GridList
          showsVerticalScrollIndicator={false}
          onEndReached={students?.data?.length ? loadMoreStudents : () => {}}
          onEndReachedThreshold={0}
       
          refreshControl={
            <RefreshControl
              refreshing={studentLoading}
              onRefresh={resetStudentData}
              colors={[GStyles?.primaryPurple]}
            />
          }
          data={ALlStudents.length ? ALlStudents : students?.data}
          numColumns={2}
          containerWidth={WIDTH * 0.9}
          contentContainerStyle={{
            // alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: '5%',
          }}
          // ListHeaderComponent={item => (

          // ListHeaderComponent={item => (

          // )}
          renderItem={({item, index}) => (
            <View key={index} style={{}}>
              <Image
                source={{
                  uri: imageUrl + item?.profile,
                }}
              />

              <StudentCard
                imgBorderColor={GStyles.primaryPurple}
                width={'100%'}
                student={{
                  class: item?.class,
                  level: item?.level,
                  name: item?.name,
                  points: item?.points,
                  image: item?.profile,
                }}
                onPress={() => {
                  // console.log('lol');
                  loadingStudent(item.password).then(res => {
                    // console.log(res.data);
                    if (res.data.success) {
                      navigation?.navigate('StudentsProgressAndInfo', res.data);
                    }
                    if (res.error) {
                    }
                  });
                }}
                key={index}
              />
            </View>
          )}
        />
    </View>
  );
};

export default ParticularClassStudents;

const styles = StyleSheet.create({});

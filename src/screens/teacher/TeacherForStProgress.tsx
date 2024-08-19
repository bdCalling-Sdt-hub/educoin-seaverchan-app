import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles, HEIGHT, WIDTH} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import HeaderOption from '../../components/common/header/HeaderOption';
import StudentMiniCard from '../../components/common/Cards/StudentMiniCard';
import {Dropdown} from 'react-native-element-dropdown';

import Animated, {
  Easing,
  ReduceMotion,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {PieChart} from 'react-native-gifted-charts';
import LinearGradient from 'react-native-linear-gradient';
import { useContextApi } from '../../context/ContextApi';
import { useGetClassesQuery } from '../../redux/apiSlices/teacher/tacherClassSlices';
import { useGetSingleStudentQuery, useGetStatisticStudentQuery, useGetStudentThrowClassQuery } from '../../redux/apiSlices/teacher/teacherStudentSlices';
import { imageUrl } from '../../redux/api/baseApi';
import LoaderScreen from '../../components/Loader/LoaderScreen';

const TeacherForStProgress = ({navigation}: NavigProps<null>) => {


  const {user} = useContextApi();
  const {data : classes, isSuccess : classesIsSuccess,isLoading : classLoading} = useGetClassesQuery({token : user.token});
  const [selectedClass, setSelectedClass] = useState<any>(classes?.data![0]?.className);
  const {data : students,refetch : studentRefetch,isSuccess : studentIsSuccess , isLoading : studentLoading} = useGetStudentThrowClassQuery({token :  user.token , className : selectedClass})
  const [selectedStudent, setSelectedStudent] = useState<string>(students?.data![0]?._id as string);
  const {data : ProgressIfo,refetch : studentInfoRefetch, isSuccess : ProgressInfLoading,isLoading : ProgressLoading} = useGetStatisticStudentQuery({token : user.token, id : selectedStudent})
  // console.log(students);
  // console.log(student?.data._id);
  
  // console.log(ProgressIfo?.data?.totalCompletedTask + 1);



  const [data, setData] = useState<Array<{
    value: number;
    color: string;
    text: string;
  }>>(
    [
      {value: 0, color: '#42A5F5', text: '0%'},
    // {value: 0, color: '#AB47BC', text: '0%'},
    {value: 0, color: '#FF8811', text: '0%'},
    ]
  );
  const [isOp, setIsOp] = React.useState('Profile');
  const [value, setValue] = React.useState<string>();
  const [isFocus, setIsFocus] = React.useState(false);
  const [isPayment, setIsPayment] = React.useState(false);
  const [animate, setAnimate] = useState(false);

  const animationOpacity = useSharedValue(0);

  const progressBar = useSharedValue('0%');

// console.log(ProgressIfo, students);

  React.useLayoutEffect(() => {
   
    progressBar.value = withTiming('50%',{duration: 500});  
    animationOpacity.value = withSpring(1);
      //  studentInfoRefetch()

    return () => {
      progressBar.value = '1%';
      animationOpacity.value = 0;
    };
  }, [selectedClass,selectedStudent]);

  const ProgressPercentage = ProgressIfo?.data.totalCompletedTask && ProgressIfo?.data.totalAssignTask
  ? (ProgressIfo?.data.totalCompletedTask / ProgressIfo?.data.totalAssignTask) * 100
  : 0;


  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
       
      <HeaderBackground
        title="Progress"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      {/* {!isPayment && (
        <View
          style={{
            height: HEIGHT,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            width: WIDTH,
            // backgroundColor: 'white',
          }}>
          <LinearGradient
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={[
              'rgba(255,255,255,.1)',
              'rgba(255,255,255,.4)',
              'rgba(255,255,255,.9)',
              'rgba(255,255,255,1)',
              'rgba(255,255,255,1)',
              'rgba(255,255,255,1)',
              'rgba(255,255,255,1)',
            ]}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: GStyles.primaryPurple,
                paddingHorizontal: '8%',
                paddingVertical: '3%',
                borderRadius: 10,

                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  fontSize: 12,
                }}>
                Active Now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )} */}

      {
        classLoading || ProgressLoading ||studentLoading ? <View style={{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center',
          height : '100%'
        }}>
          <ActivityIndicator size="large" color={GStyles?.primaryPurple} />
        </View> :   <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            paddingHorizontal: '4%',

            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{}}>
           {
            !classLoading && <Dropdown
            // maxHeight={150}
            style={{
              // flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              width: '100%',
              gap: 20,
            }}
            iconStyle={{
              marginHorizontal: 10,
            }}
            labelField="className"
            valueField="className"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              // console.log(item);
              setSelectedClass(item?.className);
          
            }}
            placeholder="select class"
            data={classes?.data}
          />
           }
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
              gap: 15,
              paddingVertical: 10,
            }}
            data={students?.data}
            renderItem={item => (
              <StudentMiniCard
                student={{
                  class: item?.item?.class,
                  image:imageUrl + item?.item.profile,
                  level: item?.item.level,
                  name: item?.item?.name,
                  points: item?.item?.points,
                }}
                borderColor={
                  selectedStudent === item.item?._id
                    ? GStyles.primaryOrange
                    : GStyles.borderColor['#ECECEC']
                }
                onPress={() => {
                  studentRefetch()
                  studentInfoRefetch()
                  setSelectedStudent(item?.item?._id)
              
                }}
                key={item.index}
              />
            )}
          />
        </View>

    

        {
          students?.data?.length !== 0 && <>
           <Animated.View
            style={[styles.container, {opacity: animationOpacity}]}>
            <PieChart
              data={[
                {value: ProgressIfo?.data.totalCompletedTask || 0, color: '#42A5F5', text: `${ProgressIfo?.data.totalCompletedTask}`},
                // {value: ProgressIfo?.data.totalUnCompletedTask || 0, color: '#AB47BC', text: `${ProgressIfo?.data.totalUnCompletedTask}%`},
                {value: ProgressIfo?.data.totalAssignTask || 1, color: '#FF8811', text: `${ProgressIfo?.data.totalAssignTask || 0}`},
              ]}
              showText
              textColor="white"
              textSize={16}
              // isAnimated
              // initialAngle={100}
              // endAngle={10}
            
              // animationDuration={1000}
        radius={120}
              textBackgroundColor="black"
              textBackgroundRadius={15}
              donut
              innerRadius={60}
              centerLabelComponent={() => (
                <View style={styles.centerText}>
                  <Text style={styles.levelText}>

                {
                  Math.round(ProgressPercentage) 
                }%
                  </Text>
                </View>
              )}
            />
          </Animated.View>
          <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              // alignItems: 'center',
              marginTop: 20,
              marginBottom: 30,
              gap: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: GStyles.primaryOrange,
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                }}></View>
              <Text
                style={{
                  fontSize: 16,
                  color: GStyles.textColor['#3D3D3D'],
                  fontFamily: GStyles.Poppins,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                Total Assigned Work:{ProgressIfo?.data?.totalAssignTask}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: GStyles.primaryBlue,
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                }}></View>
              <Text
                style={{
                  fontSize: 16,
                  color: GStyles.textColor['#3D3D3D'],
                  fontFamily: GStyles.Poppins,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                Total Completed Work: {ProgressIfo?.data?.totalCompletedTask}
              </Text>
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: GStyles.primaryPurple,
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                }}></View>
              <Text
                style={{
                  fontSize: 16,
                  color: GStyles.textColor['#3D3D3D'],
                  fontFamily: GStyles.Poppins,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                Total Uncompleted Work: {ProgressIfo?.data?.totalUnCompletedTask}
              </Text>
            </View> */}
          </View>
        </View>
          </>
        }
     
      </ScrollView>
      }

    
    </View>
  );
};

export default TeacherForStProgress;

const styles = StyleSheet.create({
  container: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 24,
    color: '#FFA726', // Replace with your GStyles.primaryOrange
    fontFamily: 'Poppins-Bold', // Replace with your GStyles.PoppinsBold
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  scoreText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // Replace with your GStyles.Poppins
    color: '#797979',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});

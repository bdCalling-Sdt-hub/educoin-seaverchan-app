import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {GStyles, WIDTH} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import SmallSubHeaderCard from '../../components/common/Cards/SmallSubHeaderCard';
import StudentCard from '../../components/common/Cards/StudentCard';
import HeaderOption from '../../components/common/header/HeaderOption';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import {useSelector} from 'react-redux';
import {useGetStudentsQuery} from '../../redux/apiSlices/teacher/teacherStudentSlices';
import {useContextApi} from '../../context/ContextApi';

import {imageUrl} from '../../redux/api/baseApi';
import {
  ActionSheet,
  ButtonProps,
  GridList,
  GridView,
} from 'react-native-ui-lib';
import {
  FontSize,
  removeStorageRole,
  removeStorageToken,
} from '../../utils/utils';
import {
  useDeletedClassMutation,
  useGetClassesQuery,
} from '../../redux/apiSlices/teacher/tacherClassSlices';
import {
  useGetUserTeacherQuery,
  useLoginStudentMutation,
} from '../../redux/apiSlices/authSlice';
import PopUpModal, {PopUpModalRef} from '../../components/modals/PopUpModal';
import {RefreshControl} from 'react-native-gesture-handler';
import {useGetNotificationsQuery} from '../../redux/apiSlices/setings/notification';

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const TeacherHomeScreen = ({navigation}: AdminHOmeProps) => {
  const [pageStudent, setPageStudent] = React.useState(1);
  const [pageClass, setPageClass] = React.useState(1);
  const PopModal = React.useRef<PopUpModalRef>();
  const {user, setUser} = useContextApi();
  const {
    data: userTeacherInfo,
    isSuccess,
    isError: userTeacherInfoError,
  } = useGetUserTeacherQuery(user?.token);
  const {
    data: students,
    isLoading: studentLoading,
    refetch: studentRefetch,
    isFetching : studentsFetching,
  } = useGetStudentsQuery({token : user?.token, page : pageStudent == 0 ? 1 : pageStudent });
  const {
    data: classes,
    isLoading: classesLoading,
    refetch: classesRefetch,
    isFetching : classesFetching,
  } = useGetClassesQuery({token : user?.token, page : pageClass == 0 ? 1 : pageClass });
  const {data: notifications, refetch} = useGetNotificationsQuery(user.token);
  const [deletedClass, results] = useDeletedClassMutation();
  const [loadingStudent] = useLoginStudentMutation();
  const [selectedItem, setSelectItem] = React.useState<any>();
  const [op, setOp] = React.useState<string>('All Students');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isYes, setIsYes] = React.useState(false);
  const [classActions, setClassActions] = useState<boolean>(false);
  // const token = useSelector((state) => state?.token?.token)
  const [search, setSearch] = React.useState<string>(null);

  const handleClassAction = useCallback(
    (action: 'edit' | 'deleted') => {
      if (action === 'edit') {
        navigation?.navigate('TeacherEditClass', {data: selectedItem});
      }
      if (action === 'deleted') {
        // console.log({token: user.token, id: selectedItem?._id});
        selectedItem?._id &&
          deletedClass({token: user.token, id: selectedItem?._id}).then(res => {
            // console.log(res);
          });
        // console.log('deleted');
      }
    },
    [selectedItem],
  );

  //  console.log(classes);

  // if(userTeacherInfoError?.status === 401){
  //     removeStorageRole();
  //     removeStorageToken();
  //     setUser({
  //       token: null,
  //       role: null,
  //     });
  // }

  const [AllClasses, setAllClasses] = React.useState([]);
  const [ALlStudents, setALlStudents] = React.useState([]);
  
  React.useEffect(() => {
    // Append new classes data to the existing state only if there are new items
    if (classes?.data?.length) {
      setAllClasses(prevClasses => prevClasses.concat(classes?.data));
    }
    return ()=>{
      // Cleanup function
    
    }
  }, [classes?.data]);
  
  React.useEffect(() => {
    // Append new students data to the existing state only if there are new items
    if (students?.data?.length) {
      setALlStudents(prevStudents => prevStudents.concat(students?.data));
    }
    return ()=>{
      // Cleanup function
  
    }
  }, [students?.data]);
  
  const loadMoreStudents = () => {
    if (pageStudent < students?.pagination?.totalPage) {
      setPageStudent(prevPage => prevPage == 0 ? 2 :prevPage + 1);
    }
  };
  
  const loadMoreClasses = () => {
    if (pageClass <= classes?.pagination?.totalPage) {
      setPageClass(prevPage => prevPage === 0 ? 2 :prevPage + 1);
    }
  };

  // console.log(page,classes?.pagination?.totalPage);
  
  const resetStudentData = () => {
   if(pageStudent){
     setPageStudent(0);
    setALlStudents([]);
    studentRefetch();

   }
  };
  const resetClassData = () => {
   if(pageClass){
     setPageClass(0);
    setAllClasses([]);
    classesRefetch();
   }
  };

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: GStyles.white,
        position: 'relative',
      }}>
      {/* header part  start */}

      <HomeTopHeader
        ringColorOpacity={0.1}
        ringColor={GStyles.purple.normalActive}
        backgroundColor={GStyles.primaryPurple}
        setSearchValue={setSearch}
        searchValue={search}
        isNotification={!!notifications?.data?.find(nt => nt?.read === false)}
        profileStyle="teacher"
        userDetails={{
          image: imageUrl + userTeacherInfo?.data?.profile,
          name: userTeacherInfo?.data?.name,
        }}
        navigation={navigation}
        drawerNavigation={navigation}
        notifyRoute="TeacherNotification"
        // containerGap={35}
      />
      {/* header part  end */}

      {/* <SmallSubHeaderCard
        marginTop={10}
        title="Teacher Name"
        count={20}
        subTitle="Students Counts"
      /> */}
      <HeaderOption
        op1="All Students"
        op2="All Classes"
        initialOp="All Students"
        fillButton
        filButtonHight={48}
        marginHorizontal={20}
        gap={30}
        setIsOp={setOp}
        isOp={op}
        borderColor={GStyles.purple.lightHover}
        // borderWidth={0}
        activeBorderColor={GStyles.primaryPurple}
        marginTop={10}
        marginBottom={5}
      />
      {op === 'All Students' ? (
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
          data={ALlStudents.length ? ALlStudents?.filter(student =>
            search
              ? student?.name
                  ?.toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              : student,
          ) : students?.data}
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
                      navigation.navigate('StudentsProgressAndInfo', res.data);
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
      ) : (
        <GridList
          showsVerticalScrollIndicator={false}
         
          data={AllClasses?.length ? AllClasses.filter(classe =>
            search ? classe.className.includes(search) : classe,
          ) : classes?.data}
          numColumns={2}

          onEndReached={classes?.data?.length ? loadMoreClasses : () => {}}
          onEndReachedThreshold={0}
          containerWidth={WIDTH * 0.9}
          refreshControl={
            <RefreshControl
              refreshing={classesLoading}
              onRefresh={resetClassData}
              colors={[GStyles?.primaryPurple]}
            />
          }
          contentContainerStyle={{
            // alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: '5%',
          }}
          // ListHeaderComponent={item => (

          // )}
          renderItem={({item, index}) => (
            <Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ParticularClassStudent', {
                    data: item?.className,
                  });
                }}
                style={{
                  height: 168,
                  width: WIDTH / 2.5,
                  borderWidth: 1,
                  borderColor: GStyles.borderColor['#ECECEC'],
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: GStyles.textColor['#3D3D3D'],

                    textAlign: 'center',
                    fontFamily: GStyles.Poppins,
                  }}>
                  {item?.className}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setSelectItem(item);
                    setClassActions(true);
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 5,
                    right: 0,
                    padding: 10,
                    zIndex: +1,
                  }}>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color={GStyles.primaryPurple}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </Fragment>
          )}
        />
      )}

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          width: 68,
          height: 68,
          backgroundColor: GStyles.primaryPurple,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 30,
          zIndex: 9999,
        }}>
        <AntDesign name="plus" color={'white'} size={24} />
      </TouchableOpacity>

      <StatusBar
        backgroundColor={GStyles.primaryPurple}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Radius={8}
        height={'33%'}
        width={'80%'}
        backButton>
        <View
          style={{
            gap: 15,
            marginTop: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              fontWeight: '500',
              marginTop: 20,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            What do you want to add?
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (classes?.data?.length !== 0 || AllClasses?.length !==0) {
                setModalVisible(false);
                navigation?.navigate('TeacherAddNewStudent');
              } else {
                PopModal.current?.open({
                  buttonText: 'Ok',
                  title: 'Warning',
                  content: 'No classes available. Please add a class first.',
                });
              }
            }}
            style={{
              borderColor: GStyles.primaryPurple,
              borderWidth: 1,
              height: 56,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: GStyles.primaryPurple,
                fontFamily: GStyles.Poppins,
              }}>
              Add New Student
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('TeacherAddNewClass');
            }}
            style={{
              borderColor: GStyles.primaryPurple,
              borderWidth: 1,
              height: 56,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: GStyles.primaryPurple,
                fontFamily: GStyles.Poppins,
              }}>
              Add New Class
            </Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
      <YesNoModal
        modalVisible={isYes}
        setModalVisible={setIsYes}
        yesPress={() => {
          setIsYes(false);
        }}
      />
      <ActionSheet
        visible={classActions}
        onDismiss={() => {
          setClassActions(false);
        }}
        // title={'Class options'}
        // message={'Message goes here'}
        // cancelButtonIndex={3}
        destructiveButtonIndex={0}
        //  optionsStyle={}
        dialogStyle={{
          borderTopRightRadius: 10,
          borderTopStartRadius: 10,
        }}
        containerStyle={{
          paddingBottom: 20,
          paddingTop: 15,
        }}
        options={[
          {
            label: 'Edit',
            onPress: () => {
              handleClassAction('edit');
            },
          },
          {
            label: 'Deleted',
            onPress: () => {
              handleClassAction('deleted');
            },
          },
        ]}
        renderAction={(option, index: number, onOptionPress) => {
          return (
            <View key={index} style={{}}>
              <TouchableOpacity
                onPress={() => onOptionPress(index)}
                style={{
                  paddingHorizontal: '4%',
                  paddingVertical: 12,

                  borderRadius: 8,
                  justifyContent: 'center',
                  // alignItems : "center",
                }}>
                <Text
                  style={{
                    fontSize: FontSize(14),
                    color:
                      option?.label === 'Deleted'
                        ? 'rgba(255,20,20,.7)'
                        : 'gray',
                    fontFamily: GStyles.Poppins,
                  }}>
                  {option?.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <PopUpModal ref={PopModal} />
    </View>
  );
};

export default TeacherHomeScreen;

const styles = StyleSheet.create({});

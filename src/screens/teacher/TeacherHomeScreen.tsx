import {
  ActionSheet,
  ButtonProps,
  GridList,
  GridView,
} from 'react-native-ui-lib';
import {
  ActivityIndicator,
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
import {
  FontSize,
  isTablet,
  removeStorageRole,
  removeStorageToken,
} from '../../utils/utils';
import {GStyles, WIDTH} from '../../styles/GStyles';
import { IClass, IStudent } from '../../redux/interface/interface';
import {NavigationProp, ParamListBase, useFocusEffect, useIsFocused} from '@react-navigation/native';
import PopUpModal, {PopUpModalRef} from '../../components/modals/PopUpModal';
import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {
  useDeletedClassMutation,
  useGetClassesQuery,
  useLazyGetClassesQuery,
} from '../../redux/apiSlices/teacher/tacherClassSlices';
import {useGetStudentsQuery, useLazyGetSingleStudentQuery, useLazyGetStudentsQuery} from '../../redux/apiSlices/teacher/teacherStudentSlices';
import {
  useGetUserTeacherQuery,
  useLoginForTeacherStudentMutation,
  useLoginStudentMutation,
} from '../../redux/apiSlices/authSlice';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderOption from '../../components/common/header/HeaderOption';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import { NavigProps } from '../../interfaces/NavigationPros';
import PaginationHook from '../../utils/hooks/PaginationHook';
import {RefreshControl} from 'react-native-gesture-handler';
import SmallSubHeaderCard from '../../components/common/Cards/SmallSubHeaderCard';
import StudentCard from '../../components/common/Cards/StudentCard';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import {imageUrl} from '../../redux/api/baseApi';
import {useContextApi} from '../../context/ContextApi';
import {useGetNotificationsQuery} from '../../redux/apiSlices/setings/notification';
import {useSelector} from 'react-redux';

const TeacherHomeScreen = ({navigation,route}: NavigProps<string>) => {
  const isFocused = useIsFocused();
  const [pageStudent, setPageStudent] = React.useState(1);
  const [pageClass, setPageClass] = React.useState(1);
  const PopModal = React.useRef<PopUpModalRef>();
  const {user} = useContextApi();

  //get user info fetch 

  const {
    data: userTeacherInfo,
  } = useGetUserTeacherQuery(user?.token);


  

  // get all notification 
  const {data: notifications, refetch} = useGetNotificationsQuery(user.token);
  // class deleted post 
  const [deletedClass, results] = useDeletedClassMutation();
  // student login fetch
  const [loadingStudent] = useLoginForTeacherStudentMutation();
  
 const imgUrl = userTeacherInfo?.data.profile.startsWith("https") ? userTeacherInfo?.data.profile : `${imageUrl}/${userTeacherInfo?.data?.profile}`


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

   // get student fetch 
   const [AllStudents, setAllStudents] = React.useState<Array<IStudent>>([]);

   const [fetchStudent , { isFetching : studentFetching  ,currentData : studentData ,isLoading : studentLoading }]= useLazyGetStudentsQuery()

   const [handleLoadMoreStudent ,loadStudent] = PaginationHook(fetchStudent,setAllStudents,AllStudents,setPageStudent,pageStudent,studentData,studentFetching)
  // get class fetch 

   const [fetchClass , { isFetching : classFetching  ,currentData : classData ,isLoading : classLoading }]= useLazyGetClassesQuery()

   
   // doing student pagination 
   const [AllClasses, setAllClasses] = React.useState<Array<IClass>>([]);


  // doing class pagination 

  const [handleLoadMoreClass ,loadIClass] = PaginationHook(fetchClass,setAllClasses,AllClasses,setPageClass,pageClass,classData,classFetching)

  // console.log(pageStudent);

  

  // React.useEffect(()=>{
 
  //   return ( )=>{
  //     // cleanup code here
  //   }
  // },[])


  useEffect(() => {
    setTimeout(()=>{
      handleRefetchStudent()
    handleRefetchClass()
    },100)
  }, [isFocused]);



  // refetch handle manual
  const handleRefetchStudent = () =>{
    setPageStudent(1)
    fetchStudent({token : user.token,pageStudent}).then(res=>{
    //  console.log(res);
    setAllStudents(res.data?.data)
    })
  }

  

  const handleRefetchClass = () =>{
    setPageClass(1)
    fetchClass({token : user.token,pageClass}).then(res=>{
    //  console.log(res);
    setAllClasses(res.data?.data)
    })
  }





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
          image: imgUrl,
          name: userTeacherInfo?.data?.name,
        }}
        navigation={navigation}
        drawerNavigation={navigation}
        notifyRoute="TeacherNotification"
        // containerGap={35}
      />
    
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
          onEndReached={handleLoadMoreStudent}
          onEndReachedThreshold={0.5}
       
          refreshControl={
            <RefreshControl
              refreshing={studentLoading}
              onRefresh={handleRefetchStudent}
              colors={[GStyles?.primaryPurple]}
            />
          }
      
          data={AllStudents?.filter(student =>
            search
              ? student?.name
                  ?.toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              : student,
          ) }
          numColumns={2}
          containerWidth={WIDTH * 0.9}
          contentContainerStyle={{
            // alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: '5%',
          }}
       
          ListFooterComponent={()=>{
            return studentFetching? <ActivityIndicator color={GStyles?.primaryPurple} size="large" /> : null;
          }}
          renderItem={({item, index}) => (
       

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
            
              />
        
          )}
        />
      ) : (
        <GridList
          showsVerticalScrollIndicator={false}
         
     
          data={AllClasses?.filter(classe =>
            search ? classe.className.includes(search) : classe,
          ) }
          numColumns={ 2}

          onEndReached={handleLoadMoreClass}
          onEndReachedThreshold={0.5}
          containerWidth={WIDTH * 0.9}
          refreshControl={
            <RefreshControl
              refreshing={classLoading}
              onRefresh={handleRefetchClass}
              colors={[GStyles?.primaryPurple]}
            />
          }
          contentContainerStyle={{
            // alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: '5%',
          }}
          ListFooterComponent={()=>{
            return classFetching? <ActivityIndicator color={GStyles?.primaryPurple} size="large" /> : null;
          }}
          renderItem={({item, index}) => (
            <Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation?.navigate('ParticularClassStudent', {
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
                    fontSize: FontSize(16),
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
          backgroundColor: "green",
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
        // height={'33%'}
        width={'80%'}
        backButton>
        <View
          style={{
            gap: 15,
            marginTop: 10,
            marginBottom : 20
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              fontWeight: '500',
              marginTop: 20,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            What do you want to add?
          </Text>
          <TouchableOpacity
            onPress={() => {
              if ( AllClasses?.length !==0) {
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
                fontSize: FontSize(16),
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
              navigation?.navigate('TeacherAddNewClass');
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
                fontSize: FontSize(16),
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
              handleRefetchClass()
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

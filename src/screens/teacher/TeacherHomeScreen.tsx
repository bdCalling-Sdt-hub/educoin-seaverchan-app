import {
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
import React, {Fragment, useState} from 'react';
import {GStyles} from '../../styles/GStyles';
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
import {useGetClassesQuery, useGetStudentsQuery} from '../../redux/apiSlices/teacherSlices';
import {useContextApi} from '../../context/ContextApi';
import {useGetUserQuery} from '../../redux/apiSlices/authSlice';
import {imageUrl} from '../../redux/api/baseApi';
import { ActionSheet, ButtonProps } from 'react-native-ui-lib';
import { FontSize } from '../../utils/utils';

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const TeacherHomeScreen = ({navigation}: AdminHOmeProps) => {
  const {user} = useContextApi();
  const {data: userInfo} = useGetUserQuery(user?.token);
  const {data: students} = useGetStudentsQuery(user?.token);
  const {data : classes} = useGetClassesQuery(user?.token);
  const [op, setOp] = React.useState<string>('All Students');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isYes, setIsYes] = React.useState(false);
  const [classActions, setClassActions] = useState<boolean>(false);
  // const token = useSelector((state) => state?.token?.token)

  // console.log(students);
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
        profileStyle="teacher"
        userDetails={{
          image: imageUrl + userInfo?.data?.profile,
          name: userInfo?.data?.name,
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={students?.data}
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
          // ListHeaderComponent={item => (

          // )}
          renderItem={({item, index}) => (
            <Fragment key={index}>
              <StudentCard
                imgBorderColor={GStyles.primaryPurple}
                width={'45%'}
                imgAssets={{
                  uri: imageUrl + item?.image,
                }}
                student={{
                  class: item?.class,
                  level: item?.level,
                  name: item?.name,
                  points: item?.points,
                }}
                onPress={() => {
                  // console.log('lol');
                  navigation.navigate('StudentsProgressAndInfo');
                }}
                key={index}
              />
            </Fragment>
          )}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={classes?.data}
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
          // ListHeaderComponent={item => (

          // )}
          renderItem={({item, index}) => (
            <Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ParticularClassStudent', {
                    data: {class: index + 1},
                  });
                }}
                style={{
                  height: 168,
                  width: '45%',
                  borderWidth: 1,
                  borderColor: GStyles.borderColor['#ECECEC'],
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
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
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: GStyles.textColor['#3D3D3D'],
                      textAlign: 'center',
                    }}>
                  {
                      new Date(item?.startDate).toLocaleDateString()
                  }
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                   setClassActions(true)
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: 10,
                    zIndex: +1,
                  }}>
                  <Entypo
                    name="dots-three-vertical"
                    size={24}
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
              setModalVisible(false);
              navigation.navigate('TeacherAddNewStudent');
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
      onDismiss={()=>{
        setClassActions(false)
      }}
 title={'Class options'}
 message={'Message goes here'}
 cancelButtonIndex={3}
 destructiveButtonIndex={0}
//  optionsStyle={}
 showCancelButton
 containerStyle={{
  paddingBottom : 20,


 }}
 options={[
  {label: 'Edit', onPress: ()=>{} },
  {label: 'Deleted', style : {
   backgroundColor : "red"
  }, onPress:()=>{} },

 ]}
renderAction={(option, index: number, onOptionPress)=>{
  return<View key={index} >
     <TouchableOpacity style={{
      paddingHorizontal : "4%",
      paddingVertical : 10,

      borderRadius : 8,
      justifyContent : "center",
      // alignItems : "center",
     }}>
     <Text style={{
        fontSize : FontSize(16),
        color : option?.label === "Deleted" ? "rgba(255,20,20,.7)" : "gray",
        fontFamily : GStyles.Poppins,
      }}>{option?.label}</Text>
     </TouchableOpacity>
  </View>
}}
/>

    </View>
  );
};

export default TeacherHomeScreen;

const styles = StyleSheet.create({});

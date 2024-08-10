import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GStyles} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderOption from '../../components/common/header/HeaderOption';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import {HomeNavigProps} from '../../interfaces/NavigationPros';
import RewordsCard from '../../components/common/Cards/RewordsCard';
import StudentCard from '../../components/common/Cards/StudentCard';
import TaskCard from '../../components/common/Cards/TaskCard';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import LottieView from 'lottie-react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useContextApi } from '../../context/ContextApi';
import { useGetEarnRewordsQuery, useGetStudentAssignRewordsQuery, useGetStudentAssignTaskQuery, useStudentAchieveActionMutation, useStudentClaimActionMutation } from '../../redux/apiSlices/student/studentSlices';
import { imageUrl } from '../../redux/api/baseApi';
import { useGetUserStudentQuery } from '../../redux/apiSlices/authSlice';

const NewStudentHomeScreen = ({navigation}: HomeNavigProps<null>) => {

   const {user} = useContextApi()
   const {data : assignTaskData, refetch : assignTaskRefetch} = useGetStudentAssignTaskQuery(user.token);
   const {data : assignRewordsData} = useGetStudentAssignRewordsQuery(user.token);
   const {data : assignRewordsEarnedData} = useGetEarnRewordsQuery(user.token);
   const {data : studentUser} = useGetUserStudentQuery(user.token);
   const [achieveAction,achieveActionResults] = useStudentAchieveActionMutation()
   const [claimAction,claimActionResults] = useStudentClaimActionMutation()



  //  console.log(assignTaskData);

  const [isCompeted, setIsCompeted] = React.useState('Tasks');
  const [search,setSearch] = React.useState<string>(null)
  const [modalVisible, setModalVisible] = React.useState(false);
  const [claimModal, setClaimModal] = React.useState(false);
  const [yesNoModal, setYesNoModal] = React.useState(false);
  const [selected, setSelected] = useState([]);
  const bottom = useSharedValue(0)
  
  const animationStyle = useAnimatedStyle(()=>{
    return {
      
        position : "absolute",
        width : 200,
        height : 200,
        zIndex : +1,
        bottom :  bottom.value
    
    }
  })

  useEffect(()=>{
   if(claimModal){
    bottom.value =  withSpring(60)
   }
   else{
    bottom.value = withSpring(0)
   }
  },[claimModal])

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* header part  start */}

      <HomeTopHeader
        drawerNavigation={navigation}
        navigation={navigation}
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        notifyRoute="StudentNotification"
        profileStyle="student"
        // imgAssets={require('../../assets/images/avatar/1.png')}
        searchValue={search}
        setSearchValue={setSearch}
        userDetails={{
          name: studentUser?.data?.name,
          points: studentUser?.data?.points,
          image : imageUrl + studentUser?.data?.profile,
          pendingPoints : studentUser?.data?.pendingPoints,
          rewardsTotal : studentUser?.data?.rewards

        }}
        containerGap={30}
      />
      {/* header part  end */}
      <HeaderOption
        isOp={isCompeted}
        setIsOp={setIsCompeted}
        fillButton
        gap={24}
        marginTop={15}
        marginBottom={5}
        marginHorizontal={15}
        op1="Tasks"
        op2="Rewords"
        op3="Earned"
        borderColor={GStyles.orange.lightActive}
        activeBorderColor={GStyles.primaryOrange}
        filButtonHight={48}
      />
      {/* body part start */}
   
        {isCompeted === 'Earned' ? (
          <>
            <View
              style={{
                marginBottom: 25,
              }}>
            <FlatList data={assignRewordsEarnedData?.data} renderItem={(item)=>{
              return(
                <RewordsCard
                key={item.index}
                removePress={() => {
                  setYesNoModal(!yesNoModal);
                }}
                // removeBtn
                iconOrTextColor={GStyles.primaryOrange}
                imgAssets={{uri : imageUrl + item?.item?.reward?.image}}
                marginHorizontal={10}
                points={10}
                title={item?.item?.reward?.name}
              />
              )
            }} />
            </View>

          
          </>
        ) : isCompeted === 'Rewords' ? (
        

              <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal : "4%",
                paddingBottom : "10%",
                gap : 10
               }} data={assignRewordsData?.data}  renderItem={(item)=>{
          console.log();
                return (
                  <RewordsCard
                  navigation={navigation}
                  // route="EditRewords"
                  // routeData={'demo'}
                  // editOption={true}
                  claimPress={()=>{
                    claimAction({token : user.token,id : item?.item?._id}).then(res=>{
                      if(res.error){
                        console.log(res.error);
                      }
                      if(res?.data?.success){
                        setClaimModal(!claimModal);
                        // setModalVisible(!modalVisible);
                        // navigation.navigate('StudentNotification')
                        // console.log(res.data);
                      }
                    })
                  }}
                  disabled
                  claimBtn={Math.round((Number(studentUser?.data?.points)/item?.item?.reward?.requiredPoints) * 100)>=100 ? 100 : Math.round((Number(studentUser?.data?.points)/item?.item?.reward?.requiredPoints) * 100) === 100}
                
                  iconOrTextColor={GStyles.orange.normal}
                  backGroundColor={'#FFF3E7'}
                  backGroundColorProgress={'#FFDAB5'}
                  backGroundProgressWidth={`${Math.round((Number(studentUser?.data?.points)/item?.item?.reward?.requiredPoints) * 100)>=100 ? 100 : Math.round((Number(studentUser?.data?.points)/item?.item?.reward?.requiredPoints) * 100)}%`}

              
                  borderColor={GStyles.borderColor['#ECECEC']}
                  // onPress={() => setSelected(index)}
                  points={item?.item?.reward.requiredPoints}
                  title={item?.item?.reward?.name}
                  imgAssets={{uri : imageUrl + item?.item?.reward.image}}
                />
                )
              }}/>
        
        ) : (
          
             
               <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal : "4%",
                paddingBottom : "10%"
               }} data={assignTaskData?.data} renderItem={(item)=>{
                return(
                  <TaskCard
                  approveBTColor={GStyles.primaryOrange}
                  completedTextColor={GStyles.primaryOrange}
                  isButton
                  button
                  // buttonText={"Completed"}
  
                 imageUrl={imageUrl +  item?.item?.task?.category?.image}
                  
                  category={item?.item?.task?.category?.name}
                  // completed
                 
                  buttonText={item?.item?.status === "inProgress" ? "Pending..." : "Achieved"}
                  approveDisabled={item?.item?.status === "inProgress"}
                  // description=''
                  title={item?.item?.task?.name}
                  points={item?.item?.task?.points}
                  time={item?.item?.task?.repeat}
                  OnButtonPress={()=>{
                    // console.log("ok");
                    console.log(item.item.task._id);
                    achieveAction({token : user.token,id : item?.item?._id}).then(res=>{
                      // console.log(res);
                      if(res.data.success){
                        setModalVisible(true)
                      }
                    })
                  }}
                />
                )
               }} />
          
        )}
    
      {/* body part end */}

      <StatusBar
        backgroundColor={GStyles.primaryOrange}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
      <CustomModal
        modalVisible={modalVisible}
        backButton
        setModalVisible={setModalVisible}
        height={'30%'}
        width={'85%'}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: GStyles.PoppinsMedium,
              textAlign: 'center',
              color: GStyles.textColor['#3D3D3D'],
              marginTop: 10,
            }}>
            Done Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Good job your task is completed , waiting for teacher approval.
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: GStyles.primaryOrange,
                width: '30%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <YesNoModal
        backButton
        modalVisible={yesNoModal}
        setModalVisible={setYesNoModal}
      />

      <CustomModal
        modalVisible={claimModal}
        backButton
        setModalVisible={setClaimModal}
        height={289}
        width={"80%"}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            position : "relative"
          }}>
         <Animated.View style={animationStyle}>
         <Image style={{
              position : "absolute",
              width : 200,
              height : 200,
              zIndex : +1,
              
            }} source={require("../../assets/images/quakka/happyQuakka.png")}/>
         </Animated.View>
          {/* <LottieView
            source={require('../../assets/lottie/effect.json')}
            style={{width: 1000, height: "100%"}}
            autoPlay
            loop={false}
            resizeMode='cover'
          /> */}
          <LottieView
            source={require('../../assets/lottie/effect.json')}
            style={{width: 500, height: "100%"}}
            autoPlay
            loop={false}
            resizeMode='cover'
          />

          <View>
            <TouchableOpacity
              onPress={() => setClaimModal(false)}
              style={{
                backgroundColor: GStyles.primaryOrange,
                width: 100,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default NewStudentHomeScreen;

const styles = StyleSheet.create({});

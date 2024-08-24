import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useGetEarnRewardsQuery, useGetStudentAssignRewardsQuery, useGetStudentAssignTaskQuery, useStudentAchieveActionMutation, useStudentClaimActionMutation } from '../../redux/apiSlices/student/studentSlices';
import { FontSize, isTablet } from '../../utils/utils';

import LottieView from 'lottie-react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import RewardsCard from '../../components/common/Cards/RewordsCard';
import TaskCard from '../../components/common/Cards/TaskCard';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderOption from '../../components/common/header/HeaderOption';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import LoaderScreen from '../../components/Loader/LoaderScreen';
import { useContextApi } from '../../context/ContextApi';
import { HomeNavigProps } from '../../interfaces/NavigationPros';
import { imageUrl } from '../../redux/api/baseApi';
import { useGetUserStudentQuery } from '../../redux/apiSlices/authSlice';
import { useGetNotificationsQuery } from '../../redux/apiSlices/setings/notification';
import { GStyles } from '../../styles/GStyles';

const NewStudentHomeScreen = ({navigation,route}: HomeNavigProps<string>) => {
const RItem = route?.params?.data
   const {user,setUser} = useContextApi()
 
   const {data : assignTaskData, refetch : assignTaskRefetch, isLoading : taskLoading} = useGetStudentAssignTaskQuery(user.token);
   const {data : assignRewardsData , refetch : rewordRefetch , isLoading : rewordLoading} = useGetStudentAssignRewardsQuery(user.token);
   const {data : assignRewardsEarnedData , refetch : refetchEarnReword , isLoading : earnRewordLoading} = useGetEarnRewardsQuery(user.token);
   const {data : studentUser,isSuccess , isLoading : studentUserLoading , refetch : refetchStudentUser,error : studentUserError} = useGetUserStudentQuery(user?.token);
   const {data : notifications,refetch} = useGetNotificationsQuery(user.token)

  //  console.log(assignRewardsEarnedData[0]);
   const [achieveAction,achieveActionResults] = useStudentAchieveActionMutation()
   const [claimAction,claimActionResults] = useStudentClaimActionMutation()



  //  console.log(assignTaskData);

  const [isCompeted, setIsCompeted] = React.useState<string>('Tasks');
  const [search,setSearch] = React.useState<string>(null)

  const [modalVisible, setModalVisible] = React.useState(false);
  const [claimModal, setClaimModal] = React.useState(false);
  const [yesNoModal, setYesNoModal] = React.useState(false);
  const [data, setData] = useState([]);


// console.log(studentUserError);
  // if(studentUserError?.status === 401){
  //     removeStorageRole();
  //     removeStorageToken();
  //     setUser({
  //       token: null,
  //       role: null,
  //     });
  // }
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
   RItem && setIsCompeted(RItem)
  
  },[claimModal,route])






// useEffect(()=>{
//   const groupedData = assignRewardsEarnedData?.data.reduce((acc, item) => {
//     const date = item.createdAt.split("T")[0]; // Extract date portion only (e.g., "2024-08-16")
//     if (!acc[date]) {
//         acc[date] = [];
//     }
//     acc[date].push(item);
//     return acc;
// }, {});
//   const outputData = Object.keys(groupedData).map(date => ({
//     date: date,
//     filterData: groupedData[date]
//   }));
//   setData(outputData);
// },[])

// console.log(data);

// console.log(outputData,null,1);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* header part  start */}
      {
       taskLoading ||rewordLoading ||  earnRewordLoading || studentUserLoading   && <LoaderScreen />
      }
      <HomeTopHeader
        drawerNavigation={navigation}
        navigation={navigation}
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        isNotification={!!notifications?.data?.find(nt=>nt?.read === false)}
        notifyRoute="StudentNotification"
        profileStyle="student"
     profileNavigate='StudentProfile'
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
        op2="Rewards"
        op3="Earned"
        borderColor={GStyles.orange.lightActive}
        activeBorderColor={GStyles.primaryOrange}
        filButtonHight={48}
      />
      {/* body part start */}
   
        {isCompeted === 'Earned' ? (
          <>
          
            <FlatList    showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal : "4%",
                paddingBottom : "10%",
                gap : 20
               }} 
               
               refreshControl={<RefreshControl refreshing={earnRewordLoading} onRefresh={()=> refetchEarnReword()}  colors={[GStyles.primaryOrange]} />}
               data={assignRewardsEarnedData?.data.filter(s=>search ? s?.reward?.name?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()) :  s)} renderItem={(item)=>{
                const currentData = item?.item?.updatedAt
              return(
                <>
                
                <RewardsCard
                disabled
                key={item.index}
                removePress={() => {
                  setYesNoModal(!yesNoModal);
                }}
                // removeBtn
                iconOrTextColor={GStyles.primaryOrange}
                imgAssets={{uri : imageUrl + item?.item?.reward?.image}}
                marginHorizontal={10}
                earnDate={new Date(item?.item?.updatedAt)}
                points={item?.item?.reward?.requiredPoints}
                title={item?.item?.reward?.name}
              />
                </>
              )
            }} />
       

          
          </>
        ) : isCompeted === 'Rewards' ? (
              <FlatList 
              refreshControl={<RefreshControl  refreshing={rewordLoading}  onRefresh={()=> rewordRefetch()}  colors={[GStyles.primaryOrange]} />}
             

              showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal : "4%",
                paddingBottom : "10%",
                gap : 20
               }} data={assignRewardsData?.data.filter(s=>search ? s?.reward?.name?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()) :s)}  renderItem={(item)=>{
       
                return (
                  <RewardsCard
                  navigation={navigation}
                  claimPress={()=>{
                    claimAction({token : user.token,id : item?.item?._id}).then(res=>{
                      if(res.error){
                        console.log(res.error);
                      }
                      if(res?.data?.success){
                        setClaimModal(!claimModal);
                 
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
                  points={Number(item?.item?.reward.requiredPoints)}
                  title={item?.item?.reward?.name}
                  imgAssets={{uri : imageUrl + item?.item?.reward.image}}
                />
                )
              }}/>
        
        ) : (
          
             
               <FlatList
               
               refreshControl={<RefreshControl  refreshing={taskLoading}  onRefresh={()=> assignTaskRefetch()}  colors={[GStyles.primaryOrange]} />}
               showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal : "4%",
                paddingBottom : "10%"
               }} data={assignTaskData?.data.filter(s=>search ? s?.task?.name?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()) : s)} renderItem={(item)=>{
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
                    // console.log(item.item.task._id);
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
        // backButton
        setModalVisible={setModalVisible}
        height={'30%'}
        width={'85%'}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            // flex: 1,
          }}>
          <Text
            style={{
                fontSize: FontSize(18),
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
              fontSize: FontSize(16),
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
                  fontSize: FontSize(16),
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
  

      <CustomModal
        modalVisible={claimModal}
        // backButton
        setModalVisible={setClaimModal}
        width={ isTablet() ? "40%" : "80%"}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            height :289,
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
                  fontSize: FontSize(16),
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

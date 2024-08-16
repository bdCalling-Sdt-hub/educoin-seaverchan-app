import {
  ActivityIndicator,
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
import React, { useState } from 'react';
import {GStyles, HEIGHT} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderOption from '../../components/common/header/HeaderOption';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import {HomeNavigProps} from '../../interfaces/NavigationPros';
import StudentCard from '../../components/common/Cards/StudentCard';
import TaskCard from '../../components/common/Cards/TaskCard';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import LottieView from 'lottie-react-native';
import { IFetchStatus } from '../../redux/interface/interface';
import { useGetEarnRewardsQuery, useGetStudentAssignRewardsQuery, useGetStudentAssignTaskQuery } from '../../redux/apiSlices/student/studentSlices';
import { useGetUserStudentQuery } from '../../redux/apiSlices/authSlice';
import { imageUrl } from '../../redux/api/baseApi';
import LoaderScreen from '../../components/Loader/LoaderScreen';
import RewardsCard from '../../components/common/Cards/RewordsCard';


const StudentsProgressAndInfo = ({navigation,route}: HomeNavigProps<IFetchStatus>) => {

  const token = route?.params?.data

  // console.log(stUser);



  const {data : assignTaskData, refetch : assignTaskRefetch} = useGetStudentAssignTaskQuery(token);
  const {data : assignRewardsData} = useGetStudentAssignRewardsQuery(token);
  const {data : assignRewardsEarnedData} = useGetEarnRewardsQuery(token);
  const {data : studentUser,refetch : studentUserRefetch, isLoading} = useGetUserStudentQuery(token);


  // console.log(studentUser);




 //  console.log(assignTaskData);

 const [isCompeted, setIsCompeted] = React.useState('Tasks');
 const [search,setSearch] = React.useState<string>(null)
 const [modalVisible, setModalVisible] = React.useState(false);
 const [claimModal, setClaimModal] = React.useState(false);
 const [yesNoModal, setYesNoModal] = React.useState(false);
 const [selected, setSelected] = useState([]);

//  React.useEffect(()=>{
//   studentUserRefetch()
//  })


  
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* header part  start */}
      
      <HeaderBackground
        title="Student Activity"
        ringColor={GStyles.purple.lightActive}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

{
        isLoading ? <View style={{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center',
          height : '100%'
        }}>
          <ActivityIndicator size="large" color={GStyles?.primaryPurple} />
        </View> : <>
          <View
        style={{
          height: 80,
          backgroundColor: GStyles.primaryOrange,
          borderRadius: 8,
          position: 'relative',

          gap: 30,
          paddingVertical: 5,
          //  elevation : 2
          marginHorizontal: '5%',
          paddingHorizontal: 10,
          marginTop: 10,
          // alignItems : "center",
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems : "center",
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 15,
            }}>
            <Image
            resizeMode='cover'
              style={{
                height: 55,
                width: 55,
                borderRadius: 100,
                //   alignSelf: 'center',
              }}
              source={{uri : imageUrl + studentUser?.data?.profile}}
            />

            <View
              style={{
                gap: 6,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '800',
                  fontFamily: GStyles.Poppins,
                  lineHeight: 22,
                  letterSpacing: 1.4,
                }}>
                {studentUser?.data?.name}
              </Text>
              <View
                style={{
                  backgroundColor: GStyles.white,
                  height: 35,
                  borderRadius: 4,
                  flexDirection: 'row',
             
                  padding: 5,
                  gap: 10,
              
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems : "center",
                    justifyContent : "center",
                    
                  }}>
                  <AntDesign
                    name="star"
                    size={20}
                    color={GStyles.primaryOrange}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign : "center",
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: GStyles.primaryOrange,
                    }}>
                     {studentUser?.data?.points}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems : "center",
                    justifyContent : "center",
                  }}>
                  <AntDesign
                    name="staro"
                    size={20}
                    color={GStyles.primaryOrange}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: GStyles.primaryOrange,
                    }}>
                     {studentUser?.data?.pendingPoints}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems : "center",
                    justifyContent : "center",
                  }}>
                  <AntDesign
                    name="staro"
                    size={20}
                    color={GStyles.gray.lightActive}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: GStyles.gray.lightActive,
                    }}>
                     {studentUser?.data?.rewards}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                // drawerNavigation?.openDrawer()
                navigation?.navigate('StudentPassCodeWithTeacher',{data : studentUser?.data?.password});
              }}>
              <Feather name="lock" color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View>
      <View
        style={{
          backgroundColor: 'white',
          height: 48,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderRadius: 100,
        }}>
        <TextInput
          placeholder="Search here...."
          placeholderTextColor="#858585" style={{
            flex: 1,
            // paddingHorizontal: 10,
          }}
          onChangeText={setSearchValue}
          value={searchValue}
        />
        <Feather name="search" color="#858585" size={24} />
      </View>
    </View> */}
      </View>

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
            <View
              style={{
                marginBottom: 25,
              }}>
            <FlatList data={assignRewardsEarnedData?.data} renderItem={(item)=>{
              return(
                <RewardsCard
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
        ) : isCompeted === 'Rewards' ? (
        

              <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal : "4%",
                paddingBottom : "10%",
                gap : 10
               }} data={assignRewardsData?.data}  renderItem={(item)=>{
          console.log();
                return (
                  <RewardsCard
                  navigation={navigation}
                  // route="EditRewards"
                  // routeData={'demo'}
                  // editOption={true}
                
             
                
                
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
              
                />
                )
               }} />
          
        )}
     
        </>
       }

    

    </View>
  );
};

export default StudentsProgressAndInfo;

const styles = StyleSheet.create({});

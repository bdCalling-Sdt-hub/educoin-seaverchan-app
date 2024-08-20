import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';
interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}

import Feather from 'react-native-vector-icons/Feather';
import { useContextApi } from '../../context/ContextApi';
import { useGetNotificationsQuery, useReadNotificationMutation } from '../../redux/apiSlices/setings/notification';
import { RefreshControl } from 'react-native-gesture-handler';
import { FontSize } from '../../utils/utils';

const StudentNotification = ({navigation}: AdminRoutesProps) => {
  const {user} = useContextApi();
  const [page,setPage] = React.useState(1)
  // const {data : teacherUser} = useGetUserTeacherQuery(user.token) 
  const {data : notifications,isLoading : notificationLoading,refetch} = useGetNotificationsQuery({ token : user?.token,page})
  const [readNotifications,results] = useReadNotificationMutation()
  // console.log(notifications);
  const [totalNotifications, setTotalNotifications] = React.useState<notifications>([])
  //  console.log(totalNotifications?.length);
  React.useEffect(()=>{
    refetch()
  },[])

  const loadMoreData = async () => {
    //  console.log("ok");
    if(notifications?.data?.length !== 0){
       setPage(page + 1)
        setTotalNotifications(totalNotifications.concat(notifications?.data))
     }else{
       // console.log("no more data");
       return;
     }
  
  };

  if(notificationLoading){
    return;
  }
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Notification"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
      <FlatList
      showsVerticalScrollIndicator={false}
       refreshControl={<RefreshControl refreshing={notificationLoading} onRefresh={()=> refetch()} colors={[GStyles?.primaryPurple]} />}
      keyExtractor={(item)=>item._id + item?.updatedAt.toString()}
      onEndReachedThreshold={0.1}
      ListFooterComponentStyle={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      ListFooterComponent={notificationLoading ? <View style={{
       
      }}>
        <ActivityIndicator size="large" color={GStyles?.primaryOrange} />
      </View> : null}
      onEndReached={()=>{
        loadMoreData()
      }}
      
     
      contentContainerStyle={{
        gap : 20,
        paddingHorizontal: '5%',
        paddingVertical: 20,
  
      }} data={totalNotifications} renderItem={(item)=>{
        return(   <TouchableOpacity

          onPress={()=>{
            readNotifications({token : user.token, id : item?.item?._id}).then(res=>{
              if(res.data?.success){
    
              navigation?.navigate('TaskList',{data : "Tasks Pending"})
            
              }
            }).catch(err=>{
 
  
            })
       
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            //   alignItems: 'center',
            gap: 30,
            borderBottomColor: '#E2E2E2',
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          {/* <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 100,
              backgroundColor: '#F6EFFD',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/b776/9f81/822a74a3a053f6a1e89dbc63e4672938?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2gjKFS5s8HPirKcgq99P9ayKDLvpx08h8dOvw1wWB6lJAS3rVuiN5VniTK74RQyvRKEIOW4Rbb4LzJpX1m~322E7jw-b3XuC7lpN1QXLiRsbSNO-yrAlt~jUsTvDmc86a2Fdxg8k33aCHa9f2stZbfX5gQuz9bH-ccNDP4Z0HyG9l5FHAlblIWunLf5IApZlcgy0A0fuIO4~kv1qV0tgCQXpTTRNI4wwUWzvJBTiEXVEPACTSKh28ZVEpW5nJDYXqHyEqGNMJycaO9Wxq4QcFVkzHrTLpDpacgXDKe2LjiHvySHpCE6OnjHQa2iWshIkgYe9tTIbfOePValUNmCZw__',
              }}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View> */}
          <View
            style={{
              width: '80%',
            }}>
            <Text
              style={{
                fontSize: FontSize(12),
                fontFamily: GStyles.PoppinsMedium,
                color:  item?.item?.read ?GStyles?.textColor['#929394'] : GStyles?.textColor?.['#3D3D3D'],
              }}>
              {item?.item?.type?.toLocaleUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: FontSize(12),
                fontFamily: GStyles.Poppins,
                color:  item?.item?.read ?GStyles?.textColor['#929394'] : GStyles?.textColor?.['#3D3D3D'],
              }}>
              {item?.item?.message}
            </Text>
            {/* <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: FontSize(12),
                  fontFamily: GStyles.PoppinsMedium,
                  color: '#3D3D3D',
                }}>
                See Details...
              </Text>
              <Feather name="arrow-up-right" size={18} color="#3D3D3D" />
            </View> */}
          </View>
        </TouchableOpacity>)
      }} />
    </View>
  );
};

export default StudentNotification;

const styles = StyleSheet.create({});

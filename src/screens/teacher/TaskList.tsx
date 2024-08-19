import {
  Alert,
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

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';

import {NavigProps} from '../../interfaces/NavigationPros';
import StudentCard from '../../components/common/Cards/StudentCard';
import HeaderOption from '../../components/common/header/HeaderOption';
import TaskCard from '../../components/common/Cards/TaskCard';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {ShearTask, TaskIcons} from '../../utils/ShearData';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import {FontSize} from '../../utils/utils';
import {ActionSheet} from 'react-native-ui-lib';
import {
  useApproveTaskMutation,
  useGetPendingTaskQuery,
  useGetTaskQuery,
} from '../../redux/apiSlices/teacher/teaherTaskSlices';
import {imageUrl} from '../../redux/api/baseApi';
import {useContextApi} from '../../context/ContextApi';
import { ITask } from '../../redux/interface/interface';
import { RefreshControl } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { useGetCategoriesQuery } from '../../redux/apiSlices/teacher/techerCategorySlices';

const TaskList = ({navigation,route}: NavigProps<string>) => {
  console.log(route?.params?.data);
  const {user} = useContextApi();
  const {data: tasks, isLoading : taskLoading, refetch : taskRefetch} = useGetTaskQuery(user.token);
  const {data : categories} = useGetCategoriesQuery(user?.token);
  // console.log(tasks);
  const {data: pendingTasks, isLoading : pendingTaskIsLoading, refetch : pendingTskRefetch} = useGetPendingTaskQuery(user.token);
  const [approveTask,results] = useApproveTaskMutation()

  // console.log(tasks);
  const [op, setOp] = React.useState('Task List');
  const [optionIndex, setOptionIndex] = useState<number>();
  const [selectItem,setSelectItem] = React.useState<ITask | null>()
  const [reLoad, setReload] = React.useState(false);
  const [isActionOpen, setIsActions] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isYes, setIsYes] = React.useState(false);
  const [claimModal, setClaimModal] = React.useState(false);
  // console.log(selectItem);
  useEffect(() => {
    ShearTask;
    setReload(false);
    if(route?.params?.data ){
      setOp(route?.params?.data)
    }
  }, [reLoad,route?.params?.data]);


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
 
  
  },[claimModal,route])



  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Tasks"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      {/* card container  */}
      <HeaderOption
        op1="Task List"
        op2="Tasks Pending"
        marginHorizontal={'4%'}
        marginTop={'4%'}
        fillButton
        borderColor={GStyles.primaryPurple}
        activeBorderColor={GStyles.primaryPurple}
        isOp={op}
        setIsOp={setOp}
      />
      {op === 'Task List' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks?.data}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: '4%',
            paddingVertical: 20,
            paddingTop: 10,
            paddingBottom: 90,
          }}
          ListHeaderComponentStyle={{
            width: '100%',
          }}
          refreshControl={<RefreshControl   onRefresh={() => taskRefetch()}
          refreshing={taskLoading} colors={[GStyles?.primaryPurple]} />}

       
    
          keyExtractor={item => item._id}
          renderItem={item => (
            <>
            {/* {console.log(item.item.category.image)} */}
              <TaskCard
                imageUrl={imageUrl + item?.item?.category?.image}
                approveBTColor={GStyles.primaryPurple}
                title={item?.item?.name}
                category={item.item.category?.name}
                points={item?.item?.points}
                optionContainerHight={100}
                onPressOption={() => {
                  // console.log('ok');
                  setSelectItem(item.item)
                  setIsActions(true);
                }}
              
                button
               
                time={item?.item?.repeat}
              
                key={item.index}
              />
            </>
          )}
        />
      )}
      {op === 'Tasks Pending' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pendingTasks?.data}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: '4%',
            paddingVertical: 20,
            paddingTop: 10,
            paddingBottom: 90,
          }}
          ListHeaderComponentStyle={{
            width: '100%',
          }}
          refreshControl={<RefreshControl        onRefresh={() =>pendingTskRefetch()}
          refreshing={pendingTaskIsLoading}colors={[GStyles?.primaryPurple]} />}
          keyExtractor={item => item._id}
          renderItem={item => (
            <>
              <TaskCard
           
                approveBTColor={GStyles.primaryPurple}
                title={item.item.task.name}
                category={item.item.task.category.name}
                imageUrl={imageUrl + item.item.task.category.image}
                points={item.item.task.points}
                time={item.item.task.repeat}
                indexNumber={item.index}
                selectIndex={optionIndex}
                optionContainerHight={100}
                button
                isButton
                buttonText="Approved"
                OnButtonPress={() => {
                  console.log("ok");
                  // navigation?.navigate('TeacherTaskAssign');
                  approveTask({token : user.token, id : item?.item?._id}).then(res=>{
                    if(res.data?.success){
                      setClaimModal(true)
                      // setModalVisible(true)
                    }
                  })
             
                }}
                key={item.index}
              />
            </>
          )}
        />
      )}

      {/* create new Task button  */}
      <View
        style={{
          paddingHorizontal: '4%',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 20,
          right: 0,
          width: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            if(categories?.data?.length !== 0){
              
              navigation?.navigate('TeacherCreateTask')
            }
            else{
              Alert.alert('Warning', 'Please add categories to create new task',[
                {
                  text: 'Add Category',
                  onPress: () => navigation?.navigate('TeacherAddCategory'),
                  style: 'default',
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                }
              ])
            }
          }}
          style={{
            backgroundColor: GStyles.primaryPurple,
            padding: 10,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '50%',
            gap: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            <AntDesign name="plus" size={20} color="white" />
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Add new task
          </Text>
        </TouchableOpacity>
      </View>
      {/* <CustomModal
        modalVisible={modalVisible}
        // backButton
        setModalVisible={setModalVisible}
        height={'20%'}
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
            Task Approved Successfully
          </Text>
      

          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: GStyles.primaryPurple,
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
                Exit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal> */}
         <CustomModal
        modalVisible={claimModal}
        // backButton
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
                backgroundColor: GStyles.primaryPurple,
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

      <ActionSheet
        visible={isActionOpen}
        onDismiss={() => {
          setIsActions(false);
        }}
        // title={'Task options'}
        // message={'Message goes here'}
        // cancelButtonIndex={3}
        destructiveButtonIndex={0}
        optionsStyle={{}}
        showCancelButton
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

              navigation?.navigate('EditTeacherTask',{data : selectItem})
            },
          },
          {
            label: 'Re-assign',
            onPress: () => {
              navigation?.navigate('TeacherTaskAssign',{data : selectItem})
            },
          },
        ]}
        renderAction={(option, index: number, onOptionPress) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => onOptionPress(index)}
                style={{
                  paddingHorizontal: '4%',
                  paddingVertical: 10,

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
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});

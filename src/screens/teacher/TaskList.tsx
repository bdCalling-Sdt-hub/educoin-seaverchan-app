import {
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
import { ShearTask, TaskIcons } from '../../utils/ShearData';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';

const TaskList = ({navigation}: NavigProps<null>) => {
  const [op, setOp] = React.useState('Task List');
  const [optionIndex,setOptionIndex] = useState<number>()
  const [reLoad,setReload] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isYes, setIsYes] = React.useState(false);
   useEffect(()=>{
    ShearTask
    setReload(false)
   },[reLoad])
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ShearTask}
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
        onRefresh={()=>setReload(true)}

        refreshing={reLoad}
        keyExtractor={(item)=>item.id + item.taskName}
      
        renderItem={item => (
          <>
      
              <TaskCard
              // imageUrl='https://s3-alpha-sig.figma.com/img/3655/c251/53c01811a584d55f7d5e1984c81a983b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ozsInqYzyeuOvHLdANZdHfcFbTIGXFbUTleaOF3JlQiNYkY~PCDec1-w0eXvlor-~VVpwiAIUUFl8~TXFk-8gKDJ3lDcqSlzAcjm02S6TlU5eEsforuhkhDfrMXZJKzFwc9j18HTvP3UM~BKZQOMB1IVXHfLdVGy-ad5EUkKxiTtuqIWkj16a4vJHT6xoMJkELxcqPBHnpB2aWekC5ntJjA~HOn8a9-rjSGKAJxMDfOcTgOu1KVbOY4XaSPI0gZK~OfMVOr7rTi6-K4Xn5LMp8Wy~4YJSOSu~V3iroaEvTbUIHZRZDZ-f81~WOSZe~KE19ZY6PU3Ck9dzCzWlLxLaA__'
              imgAssets={  require("../../assets/icons/icon18.png") }
              approveBTColor={GStyles.primaryPurple}
              title={"Tasks name"}
              category='category name'
              points={`${item.item.points}`}
              time={item.item.hours}
               indexNumber={item.index}
               selectIndex={optionIndex}
               optionContainerHight={100}
               onPressOption={setOptionIndex}
                optionList={[
                  {
                    title: 'Edit',
                    onPress: () => {
                      navigation?.navigate('EditTeacherTask');
                    },
                  },
                  {
                    title: 'Reassign',
                    onPress: () => {
                      console.log('Cleared');
                      navigation?.navigate("TeacherTaskAssign")
                    },
                  },
                  {
                    title: 'Deleted',
                    onPress: () => {
                      setIsYes(true)
                      
                    },
                  },
             
                ]}
                button
                
                // isButton
                // buttonText="Assign"
                approveOnPress={() => navigation?.navigate('TeacherTaskAssign')}
                key={item.index}
              />
           
          </>
        )}
      />

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
          onPress={() => navigation?.navigate('TeacherCreateTask')}
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
            Task Approved Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            simply dummy text of the printing and typesetting industry
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
      </CustomModal>
      <YesNoModal modalVisible={isYes} setModalVisible={setIsYes} yesPress={()=>{
        setIsYes(false)
      }} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';

import {NavigProps} from '../../interfaces/NavigationPros';
import StudentCard from '../../components/common/Cards/StudentCard';
import HeaderOption from '../../components/common/header/HeaderOption';
import TaskCard from '../../components/common/Cards/TaskCard';
import CustomModal from '../../components/common/CustomModal/CustomModal';

const TaskList = ({navigation}: NavigProps) => {
  const [op, setOp] = React.useState('Task List');

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
      }}>
      <HeaderBackground
        title="Task List"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      {/* card container  */}
      <FlatList
        data={[...Array(20)]}
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
        ListHeaderComponent={item => (
          <HeaderOption
            op1="Task List"
            op2="Task Request"
            initialOp="Task List"
            setIsOp={setOp}
            isOp={op}
            borderColor="white"
            borderWidth={0}
            activeBorderColor={GStyles.primaryPurple}
          />
        )}
        renderItem={item => (
          <>
            {op === 'Task List' ? (
              <TaskCard
                optionList={[
                  {
                    title: 'Details',
                    onPress: () => {
                      navigation.navigate('TaskDetails');
                    },
                  },
                  {
                    title: 'clear',
                    onPress: () => {
                      console.log('Cleared');
                    },
                  },
                ]}
                key={item.index}
              />
            ) : (
              <TaskCard
                isButton
                buttonText="Approve"
                approveOnPress={() => {
                  setModalVisible(true);
                }}
                key={item.index}
              />
            )}
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
          onPress={() => navigation.navigate('TeacherCreateTask')}
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
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});

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

const TaskList = ({navigation}: NavigProps) => {
  const [op, setOp] = React.useState('Task List');

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
          paddingBottom: 50,
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
              <TaskCard key={item.index} />
            ) : (
              <TaskCard isButton buttonText="Approve" key={item.index} />
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
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});

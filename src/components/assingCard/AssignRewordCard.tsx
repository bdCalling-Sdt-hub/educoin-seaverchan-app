import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {SetStateAction} from 'react';
import {GStyles} from '../../styles/GStyles';
import {IReword, IStudent, ITask} from '../../redux/interface/interface';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {imageUrl} from '../../redux/api/baseApi';
import {useCreateAssignTaskMutation} from '../../redux/apiSlices/teacher/teaherTaskSlices';
import {useContextApi} from '../../context/ContextApi';
import { useCreateAssignRewardsMutation } from '../../redux/apiSlices/teacher/teacherRewords';
import { FontSize } from '../../utils/utils';

interface AssignCardProps {
  item: IStudent;
  reword: IReword;
  loading: boolean;
  onPress: () => void;
  Assigned?: boolean;
}

const AssignRewordCard = ({
  item,
  Assigned,
  onPress,
  loading,
  reword,
}: AssignCardProps) => {
  const {user} = useContextApi();

  const [createAssignReword, results] = useCreateAssignRewardsMutation();
  // console.log(Assigned);
  return (
    <View
      style={{
        height: 80,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          width: 56,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: GStyles.primaryPurple,
          borderRadius: 100,
        }}>
        <Image
          source={{uri: imageUrl + item.profile}}
          style={{
            width: 46,
            height: 46,
            borderRadius: 100,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          paddingHorizontal: 10,
          // gap : 2,
        }}>
        <Text
          style={{
            fontSize: FontSize(16),
            fontFamily: GStyles.PoppinsMedium,
            color: '#3D3D3D',
            // marginTop: 10,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Text>Points:</Text>
          <Text>{item?.points}</Text>
          <AntDesign name="star" color={GStyles.primaryYellow} />
        </View>
      </View>

      <TouchableOpacity
      disabled={Assigned || results.isLoading }
        onPress={() => {
            createAssignReword({
            token: user.token,
            data: {
              reward: reword?._id,
              student: item?._id,
            },
          }).then(res => {
            // console.log(res);
            if (res?.data?.success) {
              // setModalVisible(true);
            } else {
              // console.log(res?.error);
            }
          });
        }}
        style={{
          borderColor: GStyles.primaryPurple,
          backgroundColor: Assigned ? GStyles.primaryPurple : 'white',
          paddingHorizontal: 15,
          borderRadius: 100,
          width: 130,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text
          style={{
            color: Assigned ? 'white' : GStyles.primaryPurple,
            fontSize: FontSize(16),
            fontFamily: GStyles.Poppins,
          }}>
          {results.isLoading ? (
            <ActivityIndicator />
          ) : Assigned ? (
            'Assigned'
          ) : (
            'Assign'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AssignRewordCard;

const styles = StyleSheet.create({});

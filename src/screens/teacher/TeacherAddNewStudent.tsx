import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import { NavigProps } from '../../interfaces/NavigationPros';
import { GStyles } from '../../styles/GStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Require from '../../components/common/require/Require';
import { useCreateStudentMutation } from '../../redux/apiSlices/teacher/teacherStudentSlices';
import { Dropdown } from 'react-native-element-dropdown';
import { useContextApi } from '../../context/ContextApi';
import { useGetClassesQuery } from '../../redux/apiSlices/teacher/tacherClassSlices';
import DateTimePicker from 'react-native-ui-datepicker';
import Toast from 'react-native-toast-message';
import { useGetAvatarPresetQuery } from '../../redux/apiSlices/teacher/presetSlices';
import { imageUrl } from '../../redux/api/baseApi';
import PopUpModal, { PopUpModalRef } from '../../components/modals/PopUpModal';
import NormalButtons from '../../components/common/Buttons/NormalButtons';
import LoaderScreen from '../../components/Loader/LoaderScreen';

const TeacherAddNewStudent = ({ navigation }: NavigProps<null>) => {
  const [createStudent, results] = useCreateStudentMutation();
  const popRef = useRef<PopUpModalRef>();
  const { user } = useContextApi();
  const { data: avatarData, refetch: refetchAvatar, isLoading : avatarLoading } = useGetAvatarPresetQuery(user?.token);
  const { data: classes , isLoading : classLoading } = useGetClassesQuery({token : user?.token});
  const [selectAvatar, setSelectAvatar] = useState<string | null>(null);
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    password: '',
    dateOfBirth: "",
    class: '',
    profile: null,
  });
  const [dateModal, setDateModal] = useState(false);

  const handleClassInfoSubmit = useCallback(
    (UData) => {
      if (!UData?.name) {
        return popRef.current?.open({
          title: 'Name is required',
          buttonText: 'Ok',
        });
      }
      if (!UData?.class) {
        return popRef.current?.open({
          title: 'Please select a class',
          buttonText: 'Ok',
        });
      }
      // if (!UData?.dateOfBirth) {
      //   return popRef.current?.open({
      //     title: 'Please select your birth date',
      //     buttonText: 'Ok',
      //   });
      // }
      if (!UData?.password) {
        return popRef.current?.open({
          title: 'Passcode is required',
          buttonText: 'Ok',
        });
      }
      if (!UData?.profile) {
        return popRef.current?.open({
          title: 'Please select an avatar',
          buttonText: 'Ok',
        });
      }

      createStudent({ token: user?.token, data: UData }).then((res) => {
        if (res?.data?.success) {
          popRef.current?.open({
            content: 'Student Created Successfully',
          });
          navigation?.goBack();
        } else if (res?.error?.data) {
          popRef.current?.open({
            content: res?.error?.data?.message,
            buttonText: 'Ok',
          });
        } else if (res?.error?.error) {
          popRef.current?.open({
            title: 'Something went wrong',
          });
        }
      });
    },
    [studentInfo]
  );

  useEffect(() => {
    refetchAvatar();
  }, []);

 

  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <HeaderBackground
        title="Add New Student"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      {
classLoading || avatarLoading ?<View style={{
  flex : 1,
  justifyContent : 'center',
  alignItems : 'center',
  height : '100%'
}}>
  <ActivityIndicator size="large" color={GStyles?.primaryPurple} />
</View> :  <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ paddingHorizontal: '4%', paddingVertical: 20, gap: 30 }}>
<View style={{ marginTop: 10 }}>
  <Require title="Student name" />
  <TextInput
    style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderRadius: 2,
      paddingHorizontal: 10,
      fontFamily: GStyles.Poppins,
      paddingVertical: 10,
    }}
    placeholder="Student Name"
    onChangeText={(text) => setStudentInfo({ ...studentInfo, name: text })}
    placeholderTextColor={GStyles.gray.lightHover}
  />
</View>

<View>
  <Require title="Class" />
  {
    classes?.data?.length !== 0 && <Dropdown
    placeholderStyle={{ color: GStyles.gray.lightHover }}
    placeholder="Select a class"
    valueField="className"
    labelField="className"
    style={{
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      borderRadius: 2,
      paddingHorizontal: 10,
      paddingVertical: 10,
    }}
    onChange={(item) => setStudentInfo({ ...studentInfo, class: item.className })}
    data={classes?.data}
  />
  }
</View>

<View>
  <Require title="Date of birth" />
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => setDateModal(true)}
    style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderRadius: 2,
      paddingHorizontal: 10,
      paddingVertical: 10,
    }}>
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <AntDesign name="calendar" color={GStyles?.gray.normal} size={16} />
      <Text style={{ fontSize: 14, fontFamily: GStyles.Poppins, color: GStyles.gray.normal }}>
        {studentInfo?.dateOfBirth
          ? new Date(studentInfo?.dateOfBirth)?.toLocaleDateString()
          : 'Select a date'}
      </Text>
    </View>
  </TouchableOpacity>
</View>

<View>
  <Require title="Passcode" />
  <TextInput
    style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderRadius: 2,
      paddingHorizontal: 10,
      fontFamily: GStyles.Poppins,
      paddingVertical: 10,
    }}
    maxLength={6}
    onChangeText={(text) => setStudentInfo({ ...studentInfo, password: text })}
    placeholder="123456"
    placeholderTextColor={GStyles.gray.lightHover}
  />
</View>

<View>
  <Require title="Choose Avatar" />
  <FlatList
    keyboardShouldPersistTaps="always"
    horizontal
    showsHorizontalScrollIndicator={false}
    data={avatarData?.data}
    contentContainerStyle={{ flexDirection: 'row', gap: 10 }}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => {
          setSelectAvatar(item.image);
          setStudentInfo({ ...studentInfo, profile: item.image });
        }}
        style={{
          width: 82,
          height: 82,
          borderRadius: 100,
          backgroundColor: '#F1F1F1',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderColor: selectAvatar === item.image ? GStyles.primaryPurple : GStyles.borderColor['#ECECEC'],
            borderWidth: 4,
          }}
          source={{ uri: imageUrl + item?.image }}
        />
      </TouchableOpacity>
    )}
  />
</View>
</ScrollView> 

      }
     
      <View style={{ paddingVertical: 10 }}>
        <NormalButtons
          loading={results?.isLoading}
          title="Save"
          onPress={() => handleClassInfoSubmit(studentInfo)}
        />
      </View>

      <CustomModal
        height="47%"
        Radius={20}
        paddingHorizontal="4%"
        modalVisible={dateModal}
        backButton
        setModalVisible={setDateModal}>
       <DateTimePicker
          headerContainerStyle={{
            marginTop: '8%',
          }}
          mode="single"
          date={studentInfo?.dateOfBirth || new Date()}
          onChange={(params: any) => {
            // console.log(params);
            setStudentInfo({
             ...studentInfo,
              dateOfBirth: params.date,
            });
            setDateModal(false);
          }}
        />
      </CustomModal>

      <PopUpModal ref={popRef} />
    </View>
  );
};

export default TeacherAddNewStudent;

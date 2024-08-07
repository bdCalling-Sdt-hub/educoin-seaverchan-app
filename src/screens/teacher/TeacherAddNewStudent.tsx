import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SherAvatar} from '../../utils/ShearData';
import NormalButtons from '../../components/common/Buttons/NormalButtons';
import Require from '../../components/common/require/Require';
import {useCreateStudentMutation} from '../../redux/apiSlices/teacher/teacherStudentSlices';
import {Dropdown} from 'react-native-element-dropdown';
import {useContextApi} from '../../context/ContextApi';
import {useGetClassesQuery} from '../../redux/apiSlices/teacher/tacherClassSlices';
import DateTimePicker from 'react-native-ui-datepicker';
import Toast from 'react-native-toast-message';

const data = [
  {
    id: 1,
    avatar: require('../../assets/images/studentAvatar/1.png'),
  },
  {
    id: 2,
    avatar: require('../../assets/images/studentAvatar/2.png'),
  },
  {
    id: 3,
    avatar: require('../../assets/images/studentAvatar/3.png'),
  },
  {
    id: 4,
    avatar: require('../../assets/images/studentAvatar/4.png'),
  },
  {
    id: 5,
    avatar: require('../../assets/images/studentAvatar/5.png'),
  },
  {
    id: 6,
    avatar: require('../../assets/images/studentAvatar/6.png'),
  },
  {
    id: 7,
    avatar: require('../../assets/images/studentAvatar/7.png'),
  },
  {
    id: 8,
    avatar: require('../../assets/images/studentAvatar/8.png'),
  },
  {
    id: 9,
    avatar: require('../../assets/images/studentAvatar/9.png'),
  },
];

const TeacherAddNewStudent = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi();
  const {data: classes} = useGetClassesQuery(user?.token);
  const [createStudent, results] = useCreateStudentMutation();
  const [selectAvatar, setSelectAvatar] = React.useState<number>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [studentInfo, setStudentInfo] = React.useState({
    name: "",
    password: "",
    dateOfBirth: new Date(),
    class: "",
    image: null
  });

  const [startDate, setStartDate] = React.useState(false);
  const [dateModal, setDateModal] = React.useState(false);

  const handleImagePick = async (option: 'camera' | 'library') => {
    try {
      if (option === 'camera') {
        const result = await launchCamera({
          mediaType: 'photo',
          maxWidth: 500,
          maxHeight: 500,
          quality: 0.5,
          includeBase64: true,
        });

        if (!result.didCancel) {
          setStudentInfo({
            ...studentInfo,
            image: {
              uri: result?.assets![0].uri,
              type: result?.assets![0].type,
              name: result?.assets![0].fileName,
              size: result?.assets![0].fileSize,
              lastModified: new Date().getTime(), // Assuming current time as last modified
              lastModifiedDate: new Date(),
              webkitRelativePath: '',
            },
          });
        }
      }
      if (option === 'library') {
        const result = await launchImageLibrary({
          mediaType: 'photo',
          maxWidth: 500,
          maxHeight: 500,
          quality: 0.5,
          includeBase64: true,
        });

        if (!result.didCancel) {
          setStudentInfo({
            ...studentInfo,
            image: {
              uri: result?.assets![0].uri,
              type: result?.assets![0].type,
              name: result?.assets![0].fileName,
              size: result?.assets![0].fileSize,
              lastModified: new Date().getTime(), // Assuming current time as last modified
              lastModifiedDate: new Date(),
              webkitRelativePath: '',
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(selectAvatar);

  const handleClassInfoSubmit = useCallback(
    UData => {
      console.log(UData);
      !UData?.name && Toast.show({type: 'info', text1: 'name is empty'});
      !UData?.class && Toast.show({type: 'info', text1: 'Please select class'});
      !UData?.dateOfBirth &&
        Toast.show({type: 'info', text1: 'Date of birth is empty'});
      !UData?.password &&
        Toast.show({type: 'info', text1: 'password is empty'});
      !UData?.image && Toast.show({type: 'info', text1: 'image is empty'});
      // !UData?.name && Toast.show({type: 'info', text1: 'name is empty'});
      if (
        !UData?.image ||
        !UData?.dateOfBirth ||
        !UData?.class ||
        !UData?.name ||
        !UData?.password
      ) {
        return;
      }
      const formData = new FormData();
      if (UData?.image?.uri) {
        formData.append('image', UData?.image);
      }
      UData?.dateOfBirth &&
        formData.append('dateOfBirth', `${UData?.dateOfBirth}`);
      UData?.class && formData.append('class', UData?.class);
      UData?.name && formData.append('name', UData?.name);
      UData?.password && formData.append('password', UData?.password);

      console.log(formData);
      createStudent({token: user?.token, data: formData}).then(res => {
        console.log(res);
        if (res?.data?.success) {
          navigation?.goBack();
        }
        if (res?.error?.data) {
          Toast.show({
            type: 'error',
            text1: res?.error?.data?.message,
          });
        }
        if(res.error?.error){
          Toast.show({
            type: 'info',
            text1: 'Something went wrong',
          });
        }
      });
    },
    [studentInfo],
  );
  // console.log(classes);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Add New Student"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
          gap: 30,
        }}>
        <View
          style={{
            marginTop: 10,
          }}>
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
            placeholder="Task Name"
            onChangeText={text => setStudentInfo({...studentInfo, name: text})}
            placeholderTextColor={GStyles.gray.lightHover}
          />
        </View>

        <View>
          <Require title="Class" />
          <Dropdown
            placeholderStyle={{
              color: GStyles.gray.lightHover,
            }}
            keyboardAvoiding
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
            onChange={item => {
              // console.log(item);
              setStudentInfo({...studentInfo, class: item.className});
            }}
            data={classes?.data}
          />
        </View>
        <View>
          <Require title="Date of birth" />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setStartDate(false);
              setDateModal(true);
            }}
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,

              paddingVertical: 10,
            }}>
            {studentInfo?.dateOfBirth ? (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <AntDesign
                  name="calendar"
                  color={GStyles?.gray.normal}
                  size={16}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.gray.normal,
                  }}>
                  {studentInfo?.dateOfBirth
                    ? new Date(studentInfo?.dateOfBirth)?.toLocaleDateString()
                    : new Date().toLocaleDateString()}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <AntDesign
                  name="calendar"
                  color={GStyles.gray.lightHover}
                  size={16}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.gray.lightHover,
                  }}>
                  {new Date().toLocaleDateString()}
                </Text>
              </View>
            )}
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
            onChangeText={text =>
              setStudentInfo({...studentInfo, password: text})
            }
            placeholder="123456"
            placeholderTextColor={GStyles.gray.lightHover}
          />
        </View>
        {/* <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Create a passcode for Student
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="16435"
          />
        </View> */}
        {/* <View
          style={{
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Graduation year
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="2024"
          />
        </View> */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              // paddingHorizontal: 10,
            }}>
            <Require title="Choose Avatar" />
            <TouchableOpacity
              style={{}}
              onPress={() => {
                navigation?.navigate('StudentAllAvatar');
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.primaryPurple,
                }}>
                View all avatar
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={SherAvatar}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
            }}
            ListHeaderComponent={item => (
              <>
                {studentInfo?.image ? (
                  <TouchableOpacity
                    onPress={() => {
                      handleImagePick('camera');
                      if (selectAvatar) {
                        setSelectAvatar(undefined);
                      }
                    }}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 100,
                      backgroundColor: '#F1F1F1',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor:
                        selectAvatar !== 0 && !selectAvatar
                          ? GStyles.primaryPurple
                          : 'white',
                      borderWidth: 2,
                    }}>
                    <Image
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                      }}
                      source={{
                        uri: studentInfo?.image
                          ? studentInfo?.image?.uri
                          : 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?t=st=1719114915~exp=1719118515~hmac=b0042447940766e77ea1a9af3f624920c9fa8c13da6a64b23180f75605c7ef17&w=740',
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleImagePick('camera')}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 100,
                      backgroundColor: '#F1F1F1',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: GStyles.borderColor['#ECECEC'],
                      borderWidth: 1,
                    }}>
                    <AntDesign
                      name="plus"
                      size={24}
                      color={GStyles.textColor['#3D3D3D']}
                    />
                  </TouchableOpacity>
                )}
              </>
            )}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => setSelectAvatar(item.item.id)}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 100,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    selectAvatar === item.item.id
                      ? GStyles.primaryPurple
                      : GStyles.borderColor['#ECECEC'],
                  borderWidth: 2,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                  }}
                  source={
                    item.item.img
                      ? item.item.img
                      : {
                          uri: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?t=st=1719114915~exp=1719118515~hmac=b0042447940766e77ea1a9af3f624920c9fa8c13da6a64b23180f75605c7ef17&w=740',
                        }
                  }
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          paddingVertical: 10,
        }}>
        <NormalButtons
          loading={results?.isLoading}
          title="Save"
          onPress={() => {
            handleClassInfoSubmit(studentInfo);
          }}
        />
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
            Student Added Successfully
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
      <CustomModal
        height={'47%'}
        Radius={20}
        paddingHorizontal="4%"
        modalVisible={dateModal}
        backButton
        setModalVisible={setDateModal}>
        <DateTimePicker
          headerContainerStyle={{
            marginTop: '8%',
          }}
          // headerButtonColor={colors.redis}
          // headerTextStyle={{
          //   color: colors.redis,
          //   fontFamily: font.Poppins,
          //   fontSize: 14,
          // }}
          // headerButtonSize={14}
          // headerButtonStyle={{
          //   backgroundColor: colors.bg,
          //   elevation: 1,
          //   borderRadius: 4,
          // }}
          // calendarTextStyle={{
          //   color: colors.textColor.light,
          // }}
          // selectedItemColor={colors.blue}
          // weekDaysTextStyle={{
          //   color: colors.primaryColor,
          //   fontFamily: font.Poppins,
          //   fontSize: 12,
          // }}
          // headerTextContainerStyle={{
          //   backgroundColor: colors.bg,
          //   elevation: 1,
          //   marginHorizontal: 5,
          //   // paddingVertical: 2,
          //   paddingHorizontal: 10,
          //   borderRadius: 4,
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }}
          mode="single"
          date={studentInfo?.dateOfBirth ? studentInfo.dateOfBirth : new Date()}
          onChange={(params: any) => {
            // console.log(params);
            setStudentInfo({...studentInfo, dateOfBirth: params?.date});

            setDateModal(false);
          }}
        />
      </CustomModal>
    </View>
  );
};

export default TeacherAddNewStudent;

const styles = StyleSheet.create({});

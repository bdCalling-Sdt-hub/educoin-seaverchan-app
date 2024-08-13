import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useCallback } from 'react';
  import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
  import {NavigProps} from '../../interfaces/NavigationPros';
  import {GStyles} from '../../styles/GStyles';
  
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {FlatList} from 'react-native';
  import CustomModal from '../../components/common/CustomModal/CustomModal';
  import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SherAvatar } from '../../utils/ShearData';
import { IStudent, IStudentUser } from '../../redux/interface/interface';
import { useGetUserStudentQuery, useUpdateStudentMutation } from '../../redux/apiSlices/authSlice';
import { useContextApi } from '../../context/ContextApi';
import { useGetClassesQuery } from '../../redux/apiSlices/teacher/tacherClassSlices';
import NormalButtons from '../../components/common/Buttons/NormalButtons';
import DateTimePicker from 'react-native-ui-datepicker';
import Require from '../../components/common/require/Require';
import { Dropdown } from 'react-native-element-dropdown';
import { useGetAvatarPresetQuery } from '../../redux/apiSlices/teacher/presetSlices';
import { imageUrl } from '../../redux/api/baseApi';
import PopUpModal, { PopUpModalRef } from '../../components/modals/PopUpModal';
  
  
  const StudentProfileEdit = ({navigation,route}: NavigProps<any>) => {

    const popRef = React.useRef<PopUpModalRef>()
  const {user} = useContextApi();
  // const {data : student} = useGetUserStudentQuery(user.token)
  const StudentData = route?.params
  // console.log(StudentData);
  const {data : avatarData , refetch : avatarRefetch} = useGetAvatarPresetQuery(user?.token);
  const [selectAvatar, setSelectAvatar] = React.useState<string>();
    const [image, setImage] = React.useState<string | null>();
  const [selectClass, setSelectClass] = React.useState<string>();
  const [updateStudent] = useUpdateStudentMutation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [studentInfo, setStudentInfo] = React.useState(StudentData);

  const [dateModal, setDateModal] = React.useState(false);


  const handleUpdateStudent = useCallback((UData)=>{
    updateStudent({
     token : user.token, data : UData
    }).then((res)=>{
      // console.log(res);
      if(res.data?.success){
    
       navigation?.goBack()
       
      }
      if(res.error){
        console.log(res.error);
        popRef.current?.open({
          title: res.error?.data?.message,
          buttonColor: GStyles.primaryOrange
        })
      }
    })
   
  },[studentInfo])


    // const handleImagePick = async (option: 'camera' | 'library') => {
    //   try {
    //     if (option === 'camera') {
    //       const result = await launchCamera({
    //         mediaType: 'photo',
    //         maxWidth: 500,
    //         maxHeight: 500,
    //         quality: 0.5,
    //         includeBase64: true,
    //       });
  
    //       if (!result.didCancel) {
    //         setImage(result?.assets![0].uri);
    //         console.log(result);
    //       }
    //     }
    //     if (option === 'library') {
    //       const result = await launchImageLibrary({
    //         mediaType: 'photo',
    //         maxWidth: 500,
    //         maxHeight: 500,
    //         quality: 0.5,
    //         includeBase64: true,
    //       });
  
    //       if (!result.didCancel) {
    //         setImage(result?.assets![0].uri);
    //         console.log(result);
    //       }
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    // console.log(avatarData);
    React.useEffect(()=>{
      avatarRefetch()
    },[])
    return (
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
        }}>
          <HeaderBackground
        title="Edit Your Profile"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
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
            value={studentInfo?.name}
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
            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={avatarData?.data}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
            }}
            // ListHeaderComponent={item => (
            //   <>
            //     {studentInfo?.image ? (
            //       <TouchableOpacity
            //         onPress={() => {
            //           handleImagePick('camera');
            //           if (selectAvatar) {
            //             setSelectAvatar(undefined);
            //           }
            //         }}
            //         style={{
            //           width: 90,
            //           height: 90,
            //           borderRadius: 100,
            //           backgroundColor: '#F1F1F1',
            //           justifyContent: 'center',
            //           alignItems: 'center',
            //           borderColor:
            //             selectAvatar !== 0 && !selectAvatar
            //               ? GStyles.primaryPurple
            //               : 'white',
            //           borderWidth: 2,
            //         }}>
            //         <Image
            //           style={{
            //             width: 80,
            //             height: 80,
            //             borderRadius: 100,
            //           }}
            //           source={{
            //             uri: studentInfo?.profile
            //           }}
            //         />
            //       </TouchableOpacity>
            //     ) : (
            //       <TouchableOpacity
            //         onPress={() => handleImagePick('camera')}
            //         style={{
            //           width: 90,
            //           height: 90,
            //           borderRadius: 100,
            //           backgroundColor: '#F1F1F1',
            //           justifyContent: 'center',
            //           alignItems: 'center',
            //           borderColor: GStyles.borderColor['#ECECEC'],
            //           borderWidth: 1,
            //         }}>
            //         <AntDesign
            //           name="plus"
            //           size={24}
            //           color={GStyles.textColor['#3D3D3D']}
            //         />
            //       </TouchableOpacity>
            //     )}
            //   </>
            // )}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => setStudentInfo({...studentInfo, profile : item.item.image})}
                style={{
                
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
                    borderColor:
                    studentInfo?.profile === item?.item?.image
                      ? GStyles.primaryPurple
                      : GStyles.borderColor['#ECECEC'],
                  borderWidth: 3,
                  }}
                  source={
                   {
                     uri: imageUrl + item?.item?.image
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
          // loading={results?.isLoading}
          title="Save"
          BtnColor={GStyles.primaryOrange}
          onPress={() => {
            handleUpdateStudent(studentInfo);
          }}
        />
      </View>
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
            Profile Updated Successfully
          </Text>
          {/* <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            simply dummy text of the printing and typesetting industry
          </Text> */}

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
      <PopUpModal ref={popRef} />
      </View>
    );
  };
  
  export default StudentProfileEdit;
  
  const styles = StyleSheet.create({});
  
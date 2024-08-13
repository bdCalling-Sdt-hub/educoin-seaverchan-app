import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {SetStateAction, useCallback} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';
import DateTimePicker from 'react-native-ui-datepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {useUpdateClassMutation} from '../../redux/apiSlices/teacher/tacherClassSlices';
import {useContextApi} from '../../context/ContextApi';
import Toast from 'react-native-toast-message';
import {IClass} from '../../redux/interface/interface';
import Require from '../../components/common/require/Require';
import NormalButtons from '../../components/common/Buttons/NormalButtons';

const TeacherEditClass = ({navigation, route}: NavigProps<IClass>) => {
  const {user} = useContextApi();
  const [updateClass, results] = useUpdateClassMutation();
  const [classInfo, setClassInfo] = React.useState<{
    className: string | undefined;
    startDate: Date | null | undefined;
    endDate: Date | null | undefined;
  } | null>(route?.params?.data);
  //   console.log(classInfo);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [startDate, setStartDate] = React.useState(false);
  const [selectDate, setSelectDate] = React.useState({
    startDate: null,
    endDate: null,
  });
  const [dateModal, setDateModal] = React.useState(false);
  const handleClassInfoSubmit = useCallback(
    data => {
      // console.log(route?.params?.data?._id);
      delete data._id;
      updateClass({
        token: user?.token,
        id: route?.params?.data?._id,
        data,
      }).then(res => {
        // console.log(res);
        if (res?.error) {
          // console.log(res.error?.data?.message);
          Toast.show({
            text1: res?.error?.data?.message,
            type: 'info',
            // swipeable : true,
          });
        }
        if (res.data?.success) {
          navigation?.goBack();
        }
      });
    },
    [classInfo],
  );

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Edit Class"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
          gap: 30,
        }}>
        <View>
          <Require title="Class Name" />
          <TextInput
            onChangeText={text => setClassInfo({...classInfo, className: text})}
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="name"
            value={classInfo?.className}
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
              Instructor Name
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
              placeholder="Instructor Name"
            />
          </View> */}
        <View>
          <Require title="Start date" />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setStartDate(true);
              setDateModal(true);
            }}
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,

              paddingVertical: 10,
            }}>
            {classInfo?.startDate ? (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.gray.normal,
                }}>
                {classInfo?.startDate
                  ? new Date(classInfo?.startDate)?.toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.gray.lightActive,
                }}>
                {new Date().toLocaleDateString()}
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Require title="End date" />
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
            {classInfo?.endDate ? (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.gray.normal,
                }}>
                {classInfo?.endDate
                  ? new Date(classInfo?.endDate)?.toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.gray.lightActive,
                }}>
                {new Date().toLocaleDateString()}
              </Text>
            )}
          </TouchableOpacity>
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
            handleClassInfoSubmit(classInfo);
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
            Class Added Successfully
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
          date={startDate ? classInfo?.startDate : classInfo?.endDate}
          onChange={(params: any) => {
            // console.log(params);
            startDate && setClassInfo({...classInfo, startDate: params?.date});
            !startDate && setClassInfo({...classInfo, endDate: params?.date});
            setDateModal(false);
          }}
        />
      </CustomModal>
    </View>
  );
};

export default TeacherEditClass;

const styles = StyleSheet.create({});

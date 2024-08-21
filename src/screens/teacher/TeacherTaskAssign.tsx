import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GStyles} from '../../styles/GStyles';
import HeaderOption from '../../components/common/header/HeaderOption';
import {NavigProps} from '../../interfaces/NavigationPros';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {Dropdown} from 'react-native-element-dropdown';
import {
  useGetStudentsQuery,
  useGetStudentThrowClassQuery,
} from '../../redux/apiSlices/teacher/teacherStudentSlices';
import {imageUrl} from '../../redux/api/baseApi';
import {useGetClassesQuery} from '../../redux/apiSlices/teacher/tacherClassSlices';
import {useContextApi} from '../../context/ContextApi';
import {ITask} from '../../redux/interface/interface';
import AssignCard from '../../components/assingCard/AssignCard';
import {
  useCreateAssignTaskMutation,
  useGetAssignTaskQuery,
} from '../../redux/apiSlices/teacher/teaherTaskSlices';
import Toast from 'react-native-toast-message';
import LoaderScreen from '../../components/Loader/LoaderScreen';
import { FontSize } from '../../utils/utils';

const TeacherTaskAssign = ({navigation, route}: NavigProps<ITask>) => {
  const Item = route?.params?.data;
  // console.log(Item);
  const {user} = useContextApi();
  const [createAssignTask, results] = useCreateAssignTaskMutation();
  const {data: classes, isFetching: categoryLoading} = useGetClassesQuery(
    {token : user.token,}
  );
  const {data: assignTask, isFetching : assignLoading} = useGetAssignTaskQuery(user.token);
  const alreadyAssigned = assignTask?.data?.filter(
    assiTask => assiTask?.task?._id === Item?._id,
  );

  // console.log();
  const [selectClass, setSelectClass] = React.useState<string>(
    classes?.data![0]?.className as string,
  );
  const {data: students , isFetching : studentLoading,refetch : studentRefetch} = useGetStudentsQuery({token : user.token});
  const {data: classFilterStudents, refetch, isFetching : SCLoading} = useGetStudentThrowClassQuery({
    token: user.token,
    className: selectClass,
  });
  // console.log(students);
  // console.log(classFilterStudents);
  const [search,setSearch] = React.useState(null)
  const [op, setOp] = React.useState<string>('All Students');
  const [selection, setSelection] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    refetch();
    studentRefetch()
  }, [selectClass, op]);





  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Assign to"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <View
        style={{
          backgroundColor: 'white',
          height: 48,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 20,
          marginHorizontal: '4%',
          borderRadius: 100,
          borderColor: GStyles.borderColor['#ECECEC'],
          borderWidth: 1,
        }}>
        <TextInput
          placeholder="Search here...."
          placeholderTextColor="#858585"
          onChangeText={(text)=>setSearch(text)}
          style={{
            flex: 1,
            paddingHorizontal: 10,
          }}
        />
        <Feather name="search" color="#858585" size={24} />
      </View>
      <HeaderOption
        isOp={op}
        setIsOp={setOp}
        activeBorderColor={GStyles.primaryPurple}
        borderColor={GStyles.primaryPurple}
        op1="All Students"
        op2="Class"
        marginHorizontal={10}
        fillButton
        // marginTop={10}
      />
      {op === 'All Students' && (
        <>
          {/* <TouchableOpacity
            onPress={() => {
            
            }}
            style={{
              paddingHorizontal: '4%',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: FontSize(16),
                fontFamily: GStyles.PoppinsMedium,
              }}>
          
              Select All
            </Text>
          </TouchableOpacity> */}
          {
            categoryLoading || assignLoading || studentLoading || SCLoading ? <View style={{
              flex : 1,
              justifyContent : 'center',
              alignItems : 'center',
              height : '100%'
            }}>
              <ActivityIndicator size="large" color={GStyles?.primaryPurple} />
            </View> : <FlatList
            data={students?.data?.filter(student=>search ? student.name.includes(search) : student)}
            keyExtractor={item => item._id + item.password}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: '4%',
              paddingBottom: 10,
            }}
            renderItem={({item, index}) => {
              return (
                <>
                  <AssignCard
                  //  loading={results.isLoading}
                
                      task={Item}
                    item={item}
                    Assigned={!!alreadyAssigned?.find(assigned=>assigned.student === item?._id)?._id}
                  />
                </>
              );
            }}
          />
          }
         
        </>
      )}

      {op === 'Class' && (
        <>
        {
          categoryLoading || assignLoading || studentLoading || SCLoading ? <View style={{
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
            height : '100%'
          }}>
            <ActivityIndicator size="large" color={GStyles?.primaryPurple} />
          </View> : <>
          <View style={{marginHorizontal: '4%', marginVertical: 5}}>
            <Dropdown
              // maxHeight={150}
              style={{
                // flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
                borderWidth: 1,
                borderColor: '#E2E2E2',
                borderRadius: 10,
                width: '100%',
                gap: 20,
              }}
              iconStyle={{
                marginHorizontal: 10,
              }}
              labelField="className"
              valueField="className"
              value={selectClass}
              onChange={item => {
                setSelectClass(item?.className);
              }}
              placeholder="class 1"
              data={classes?.data}
            />
          </View>
          {/* <View
            style={{
              paddingHorizontal: '4%',
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
               
                }}>
                <Text
                  style={{
                    fontSize: FontSize(16),
                    fontFamily: GStyles.PoppinsMedium,
                  }}>
              
                  Select All
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <FlatList
            data={classFilterStudents?.data?.filter(student=>search ? student.name.includes(search) : student)}
            keyExtractor={item => item._id + item.password}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: '4%',
              paddingBottom: 10,
            }}
            renderItem={({item, index}) => {
              return (
               
                <>
                  <AssignCard
      
                    item={item}
                    
                    Assigned={!!alreadyAssigned?.find(assigned=>assigned.student === item?._id)?._id}
                  />
                </>
              );
            }}
          />
          </>
        }
         
        </>
      )}

      {selection && (
        <View
          style={{
            paddingHorizontal: '4%',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: GStyles.white,
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              backgroundColor: GStyles.primaryPurple,
              padding: 10,
              borderRadius: 100,

              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                letterSpacing: 0.8,
                marginTop: 5,
              }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <CustomModal
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
            // flex: 1,
          }}>
          <Text
            style={{
                fontSize: FontSize(18),
              fontFamily: GStyles.PoppinsMedium,
              textAlign: 'center',
              color: GStyles.textColor['#3D3D3D'],
              marginTop: 10,
            }}>
            Assign Successfully
          </Text>
          {/* <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              textAlign: 'center',
            }}>
            simply dummy text of the printing and typesetting industry
          </Text> */}

          <View>
            <TouchableOpacity
              onPress={() => {
          
                setModalVisible(false);
              }}
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
                  fontSize: FontSize(16),
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

export default TeacherTaskAssign;

const styles = StyleSheet.create({});

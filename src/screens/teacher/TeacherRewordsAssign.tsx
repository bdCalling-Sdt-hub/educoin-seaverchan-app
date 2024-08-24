import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  useGetStudentThrowClassQuery,
  useLazyGetStudentsQuery
} from '../../redux/apiSlices/teacher/teacherStudentSlices';
import { IReword, IStudent } from '../../redux/interface/interface';

import React from 'react';
import { TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import AssignRewordCard from '../../components/assingCard/AssignRewordCard';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderOption from '../../components/common/header/HeaderOption';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import { useContextApi } from '../../context/ContextApi';
import { NavigProps } from '../../interfaces/NavigationPros';
import { useGetClassesQuery } from '../../redux/apiSlices/teacher/tacherClassSlices';
import { useGetAssignRewardsQuery } from '../../redux/apiSlices/teacher/teacherRewords';
import { GStyles } from '../../styles/GStyles';
import PaginationHook from '../../utils/hooks/PaginationHook';
import { FontSize } from '../../utils/utils';

const TeacherRewardsAssign = ({navigation, route}: NavigProps<IReword>) => {
    const Item = route?.params?.data;
    // console.log(Item);
    const [pageStudent, setPageStudent] = React.useState(2);
    const {user} = useContextApi();
  
    const {data: classes, isLoading: categoryLoading} = useGetClassesQuery(
      { token : user.token}
    );
    const {data: assignRewards} = useGetAssignRewardsQuery(user.token);
    const alreadyAssigned = assignRewards?.data?.filter(
      assiReword => assiReword?.reward?._id === Item?._id,
    );

    // console.log(alreadyAssigned);
  
    // console.log();
    const [selectClass, setSelectClass] = React.useState<string>(
      classes?.data![0]?.className as string,
    );
 
    const {data: classFilterStudents, refetch} = useGetStudentThrowClassQuery({
      token: user.token,
      className: selectClass,
    });
    // console.log(classFilterStudents);
    const [search,setSearch] = React.useState(null)
    const [op, setOp] = React.useState<string>('All Students');
  
    const [modalVisible, setModalVisible] = React.useState(false);
  
    // get student fetch 
    const [AllStudents, setAllStudents] = React.useState<Array<IStudent>>([]);

    const [fetchStudent , { isFetching : studentFetching  ,currentData : studentData ,isLoading : studentLoading }]= useLazyGetStudentsQuery()
 
    const [handleLoadMoreStudent] = PaginationHook(fetchStudent,setAllStudents,AllStudents,setPageStudent,pageStudent,studentData,studentFetching)

      // refetch handle manual
  const handleRefetchStudent = () =>{
    fetchStudent({token : user.token}).then(res=>{
    setAllStudents(res.data?.data)
    })
  }


  React.useEffect(() => {
    refetch();
    handleRefetchStudent()
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
            <FlatList
              data={AllStudents?.filter(student=>search ? student.name.includes(search) : student)}
              keyExtractor={item => item._id + item.password}
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={studentLoading}  onRefresh={handleRefetchStudent} colors={[GStyles.primaryPurple]} />}
              onEndReachedThreshold={0.5}
              onEndReached={handleLoadMoreStudent}
              ListFooterComponent={()=>{
                return studentFetching? <ActivityIndicator color={GStyles?.primaryPurple} size="large" /> : null;
              }}
              contentContainerStyle={{
                paddingHorizontal: '4%',
                paddingBottom: 10,
              }}
              renderItem={({item}) => {
                return (
                  <>
                    <AssignRewordCard
                    //  loading={results.isLoading}
                      reword={Item}
                      item={item}
                      Assigned={!!alreadyAssigned?.find(assigned=>assigned.student._id === item?._id)?._id}
                    />
                  </>
                );
              }}
            />
          </>
        )}
  
        {op === 'Class' && (
          <>
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
              renderItem={({item}) => {
                return (
                  //   <View
  
                  //   key={index}
                  //   style={{
                  //     height: 80,
                  //     borderWidth: 1,
                  //     borderColor: '#ECECEC',
                  //     borderRadius: 8,
                  //     marginVertical: 10,
                  //     flexDirection: 'row',
                  //     alignItems: 'center',
                  //     justifyContent: 'space-between',
                  //     paddingHorizontal: 10,
                  //   }}>
                  //   <View
                  //     style={{
                  //       width: 56,
                  //       height: 56,
                  //       justifyContent: 'center',
                  //       alignItems: 'center',
                  //       borderWidth: 1,
                  //       borderColor: GStyles.primaryPurple,
                  //       borderRadius: 100,
                  //     }}>
                  //     <Image
                  //       source={{uri : imageUrl + item.profile}}
                  //       style={{
                  //         width: 46,
                  //         height: 46,
                  //         borderRadius: 100,
                  //       }}
                  //     />
                  //   </View>
                  //   <View style={{
                  //     flex: 1,
                  //     // justifyContent: 'center',
                  //     paddingHorizontal: 10,
                  //     // gap : 2,
                  //   }}>
                  //     <Text
                  //       style={{
                  //         fontSize: FontSize(16),
                  //         fontFamily: GStyles.PoppinsMedium,
                  //         color: '#3D3D3D',
                  //         // marginTop: 10,
                  //       }}>
                  //      {
                  //       item.name
                  //      }
                  //     </Text>
                  //     <View
                  //       style={{
                  //         flexDirection: 'row',
                  //         gap : 10,
                  //         alignItems: 'center',
                  //       }}>
                  //       <Text>Points:</Text>
                  //       <Text>{item?.points}</Text>
                  //       <AntDesign name="star" color={GStyles.primaryYellow} />
                  //     </View>
                  //   </View>
                  //   {assign.includes(index) ? (
                  //     <TouchableOpacity
                  //       // onPress={() => navigation.navigate('EditCustomTask')}
                  //       style={{
                  //         backgroundColor: GStyles.primaryPurple,
                  //         // paddingVertical: 10,
                  //         paddingHorizontal: 15,
                  //         borderRadius: 100,
                  //         width: 130,
                  //         height: 40,
                  //         alignItems: 'center',
                  //         justifyContent: 'center',
                  //       }}>
                  //       <Text
                  //         style={{
                  //           color: 'white',
                  //           fontSize: FontSize(16),
                  //           fontFamily: GStyles.Poppins,
                  //         }}>
                  //         {selection ? 'Assign' : 'Assigned'}
                  //       </Text>
                  //     </TouchableOpacity>
                  //   ) : (
                  //     <TouchableOpacity
                  //       onPress={() => {
                  //         setAssign([...assign, index]);
                  //       }}
                  //       style={{
                  //         borderColor: GStyles.primaryPurple,
  
                  //         paddingHorizontal: 15,
                  //         borderRadius: 100,
                  //         width: 130,
                  //         height: 40,
                  //         alignItems: 'center',
                  //         justifyContent: 'center',
                  //         borderWidth: 1,
                  //       }}>
                  //       <Text
                  //         style={{
                  //           color: GStyles.primaryPurple,
                  //           fontSize: FontSize(16),
                  //           fontFamily: GStyles.Poppins,
                  //         }}>
                  //         Assign
                  //       </Text>
                  //     </TouchableOpacity>
                  //   )}
                  // </View>
                  <>
                   <AssignRewordCard
                    //  loading={results.isLoading}
                      reword={Item}
                      item={item}
                      Assigned={!!alreadyAssigned?.find(assigned=>assigned.student._id === item?._id)?._id}
                    />
                  </>
                );
              }}
            />
          </>
        )}
  
        {/* {selection && (
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
        )} */}
  
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
                  fontSize: FontSize(18),
                fontFamily: GStyles.PoppinsMedium,
                textAlign: 'center',
                color: GStyles.textColor['#3D3D3D'],
                marginTop: 10,
              }}>
              Assign Successfully
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                textAlign: 'center',
              }}>
              simply dummy text of the printing and typesetting industry
            </Text>
  
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
  
  export default TeacherRewardsAssign;
  
  const styles = StyleSheet.create({});
  
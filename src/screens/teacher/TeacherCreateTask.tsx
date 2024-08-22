import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {Fragment, useCallback, useEffect} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FlatList} from 'react-native';



import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {Dropdown} from 'react-native-element-dropdown';
import {
  ShearIcons,
  ShearTask,
  SherAvatar,
  TaskIcons,
} from '../../utils/ShearData';
import {useSharedValue, withSpring, withTiming} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
import { useGetClassesQuery } from '../../redux/apiSlices/teacher/tacherClassSlices';
import { useGetCategoriesQuery } from '../../redux/apiSlices/teacher/techerCategorySlices';
import { imageUrl } from '../../redux/api/baseApi';
import { useCreateTaskMutation } from '../../redux/apiSlices/teacher/teaherTaskSlices';
import { useContextApi } from '../../context/ContextApi';
import Toast from 'react-native-toast-message';
import { NavigProps } from '../../interfaces/NavigationPros';
import PopUpModal, { PopModalRef, PopUpModalRef } from '../../components/modals/PopUpModal';
import LoaderScreen from '../../components/Loader/LoaderScreen';
import { FontSize } from '../../utils/utils';

interface taskData {
  name: string;
  points: string;
  category: string;
  type: 'good' | 'bad'
  repeat: 'everyday' | 'weekly' | 'monthly';
}

const TeacherCreateTask = ({navigation}: NavigProps<null>) => {
  const popRef = React.useRef<PopUpModalRef>()

  const {user} = useContextApi();
  const {data : categories,isLoading, refetch :iconsRefetch}  = useGetCategoriesQuery( user.token)
  const [createTask,results] = useCreateTaskMutation()
  const [value, setValue] = React.useState<string>(50);

  const [customCategory, setCustomCategory] = React.useState<string>();

  const [taskData, setTaskData] = React.useState<taskData>({
    category : categories?.data![0]?._id || "",
    name: "",
    points: 0,
    type: 'good',
    repeat: 'everyday',
  });


  // console.log("p", results.data);

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [isGood, setIsGood] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(false);
  const [customImage, setCustomImage] = React.useState<number>(50);
  const [customPoints, setCustomPoints] = React.useState<any>(100);




  const progress = useSharedValue(customPoints);
  const min = useSharedValue(-500);
  const max = useSharedValue(500);

  React.useEffect(() => {
    progress.value = withTiming(customPoints, {duration: 10});
  }, [customPoints]);



  // console.log("o", results.data);
  

  const handleCreateTask = useCallback((UData : taskData) => {

     if(!UData?.points){
      UData.points = parseInt(customPoints)
     }
     if(!UData?.repeat){
      UData.repeat = "everyday"
     }
     if(!UData?.type){
      UData.type = "good"
     }
     if(!UData?.category){
      popRef.current?.open({
        title:"Please select a category",
          buttonText : "Ok"
      })  
     
     }
     if(!UData?.name){
      popRef.current?.open({
        title:"Please write task name",
          buttonText : "Ok"
      }) 
      
     }
    //  console.log(UData);
  if(UData.category && UData.name && UData.points && UData.repeat && UData.type){
    createTask({token : user.token , data : UData}).then(res=>{
      // console.log(res);
      if(res?.data?.success){
        setSuccessModal(true)
      }
      if(res?.error){
        console.log(res?.error);
      }
      if(res?.data?.success){
        setSuccessModal(true);
        
      }
    })
  }

  }, [taskData]);

  React.useEffect(()=>{
    iconsRefetch()
  },[])

 

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: GStyles.white,
      }}>
       
      <HeaderBackground
        title="New Task"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      {
        isLoading ? <View style={{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center',
          height : '100%'
        }}>
          <ActivityIndicator size="large" color={GStyles?.primaryPurple} />
        </View> :  <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />

            <Text
              style={{
                fontSize: FontSize(16),
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',

                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Task Name
            </Text>
          </View>
          <TextInput
            style={{
              borderBottomColor: '#E2E2E2',
              borderBottomWidth: 1,
              width: '100%',
              paddingLeft: 10,
              paddingRight: 10,
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              color: '#3D3D3D',

              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            onChangeText={text => setTaskData({...taskData, name: text})}
            value={taskData?.name}
            placeholderTextColor="gray"
            multiline
            placeholder="Task Name"
          />
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
           <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />
            <Text
              style={{
                fontSize: FontSize(16),
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',

                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
         Points 
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <AntDesign name="star" size={15} color={GStyles.primaryOrange} />
              {/* <Text>{parseInt(rewordPoints)}</Text> */}
            </View>
            
          </View>
          <Slider
        style={{
          width: '100%',
          height: 40,
        }}
        vertical
        minimumValue={-500} // Set the min value (for negative)
        maximumValue={500}  // Set the max value (for positive)
        step={10}            // Set the increment/decrement steps
        value={ typeof taskData?.points === 'number' ? taskData?.points : 0}
                   // Start at the middle (0)

        onValueChange={(value)=>{
          setTaskData({...taskData,points : value});
        }}
        minimumTrackTintColor={ GStyles?.primaryPurple } // Red color for negative
        maximumTrackTintColor={ GStyles?.primaryOrange } // Green color for positive
        thumbTintColor={ GStyles?.primaryYellow } // Change thumb color
      />
      {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                taskData?.points > -495 ? setTaskData({...taskData,points : taskData?.points - 10}) :  setTaskData({...taskData,points : -500});
              }}
              style={{
                height: 35,
                justifyContent: 'center',
                //  alignItems : "center"
              }}>
              <Text
                style={{
                  fontFamily: GStyles.PoppinsMedium,
                  backgroundColor: GStyles.gray.lightActive,
                  fontSize: 12,
                  padding: 5,
                  borderRadius: 4,
                  textAlign: 'center',
                  width: 45,
                }}>
                -10
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                taskData?.points < 495 ? setTaskData({...taskData,points : Number(taskData?.points) + 10}) :  setTaskData({...taskData,points : 500});
              }}
              style={{
                height: 35,
                justifyContent: 'center',
                //  alignItems : "center"
              }}>
              <Text
                style={{
                  fontFamily: GStyles.PoppinsMedium,
                  backgroundColor: GStyles.primaryPurple,
                  fontSize: 12,
                  padding: 5,
                  borderRadius: 4,
                  color: 'white',
                  width: 45,
                  textAlign: 'center',
                }}>
                +10
              </Text>
            </TouchableOpacity>
          </View> */}
       
          <TextInput
            style={{
              borderBottomColor: '#E2E2E2',
              borderBottomWidth: 1,
              width: '100%',
              paddingLeft: 10,
              paddingRight: 10,
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              color: '#3D3D3D',

              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            onChangeText={text => {
              setTaskData({...taskData,points : text});
            }}
            placeholderTextColor="gray"
            // multiline
            placeholder="0"
            keyboardType='decimal-pad'
            value={`${taskData?.points}`}
          />
        </View>
        {/* have reword = true  */}
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}>
            <View
              style={{
                marginVertical: 20,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: GStyles.primaryOrange,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: GStyles.primaryOrange,
                }}
              />
              <Text
                style={{
                  fontSize: FontSize(16),
                  fontFamily: GStyles.PoppinsSemiBold,
                  color: '#3D3D3D',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
          Choose Category
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
            
                  setTaskData({...taskData, type: "good"})
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  backgroundColor: taskData?.type === "good" ? GStyles.primaryPurple : 'white',
                  borderColor:  GStyles.primaryPurple,
                  borderWidth: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: FontSize(14),
                    color:  taskData?.type === "good"  ? 'white' : GStyles.primaryPurple,
                    fontWeight: 'bold',
                  }}>
                  Good
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
             
                  setTaskData({...taskData, type: "bad"})
                }}
                style={{
                  backgroundColor: taskData?.type === "bad" ?   GStyles.primaryPurple : 'white',
                  borderColor:  GStyles.primaryPurple ,
                  borderWidth: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: FontSize(14),
                    color: taskData?.type === "bad" ?  'white' : GStyles.primaryPurple ,
                    fontWeight: 'bold',
                  }}>
                  Bad
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
             keyboardShouldPersistTaps="always"
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 24,
            }}
            data={categories?.data}
            keyExtractor={item => item._id + item.name}
          
            renderItem={item => (
              <TouchableOpacity
              activeOpacity={.8}
                key={item.index}
                onPress={() => {
               
                  setTaskData({...taskData, category: item.item._id});
                }}>
                <View
                  style={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 15,
                      backgroundColor:
                        taskData.category === item.item._id
                          ? GStyles.primaryPurple
                          : GStyles.gray.light,
                      // borderWidth: 2,
                
                      justifyContent: 'center',
                      alignItems: 'center',
                      // elevation: 2,
                    }}>
                    <Image
                    resizeMode='cover'
                      source={{
                        uri : imageUrl + item.item.image
                      }}
                      style={{
                        width: 65,
                        height: 65,
                        borderRadius: 15,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: FontSize(14),
                      fontFamily: GStyles.Poppins,
                      color:
                      taskData.category === item.item._id
                          ? GStyles.primaryPurple
                          : '#3D3D3D',
                      paddingVertical: 5,
                    }}>
                    {item.item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
          <View
            style={{
              marginVertical: 21,
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />

            <Text
              style={{
                fontSize: FontSize(16),
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',

                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Days
            </Text>
          </View>
          <Dropdown
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
            labelField="label"
            valueField="value"
            value={value}
            onChange={item => {
              setValue(item?.value);

              setTaskData({...taskData, repeat: item?.value});
            }}
            placeholder="Repeat everyday"
            data={[
              {label: 'Repeat every day', value: 'everyday'},
              {label: 'Repeat every weak', value: 'weekly'},
              {label: 'Repeat every month', value: 'monthly'},
            ]}
            renderLeftIcon={() => (
              <Feather
                name="calendar"
                size={24}
                style={{
                  fontWeight: '900',
                  marginRight: 10,
                }}
              />
            )}
          />
        </View>
        {/* <View
          style={{
            paddingHorizontal: '4%',
          }}>
          <View
            style={{
              marginVertical: 21,
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />

            <Text
              style={{
                fontSize: FontSize(16),
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',

                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Hours
            </Text>
          </View>
          <Dropdown
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
            labelField="label"
            valueField="value"
            value={value}
            onChange={item => {
              setValue(item?.value);

              setTaskData({...taskData, hours: item?.value});
            }}
            placeholder="Any Time"
            data={[{label: 'Any Time', value: '1'}]}
            renderLeftIcon={() => (
              <Ionicons
                name="time-outline"
                size={24}
                style={{
                  fontWeight: '900',
                  marginRight: 10,
                }}
              />
            )}
          />
        </View> */}
        {/* <View
          style={{
            paddingHorizontal: '4%',
            marginTop : 5
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}>
            <Text
              style={{
                fontSize: FontSize(16),
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',
                fontWeight: '500',
                letterSpacing: 0.5,
                marginVertical: 20,
              }}>
              Pre-Assign
            </Text>

            <View style={{
              flexDirection : "row",
              gap : 10,
          
            }}>

            <View
              style={{
                // paddingHorizontal: 10,
              }}>
              <TouchableOpacity
              onPress={()=>{
                setClassModal(true)
              setAssignState("allStudents")
              }}
                style={{
                  backgroundColor: GStyles.primaryPurple,
                  paddingHorizontal: 12,
                  paddingVertical : 8,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 5,
                  elevation : 2
                }}>
                <Text
                  style={{
                    fontSize: FontSize(14),
                    color: 'white',
                    fontWeight: '500',
                    fontFamily : GStyles.Poppins
                  }}>
                 All Student 
                </Text>
                <AntDesign
                  name="down"
                  style={{
                    fontSize: FontSize(14),
                    color: 'white',
                    fontWeight: '500',
                    fontFamily : GStyles.Poppins
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // paddingHorizontal: 10,
              }}>
              <TouchableOpacity
              onPress={()=>{
                setClassModal(true)
                setAssignState("allClasses")  
              }}
                style={{
                  backgroundColor: GStyles.primaryPurple,
                  paddingHorizontal: 12,
                  paddingVertical : 8,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 3,
                  elevation : 2
                }}>
                <Text
                  style={{
                    fontSize: FontSize(14),
                    color: 'white',
                    fontWeight: '500',
                    fontFamily : GStyles.Poppins
                  }}>
                 All Class 
                </Text>
                <AntDesign
                  name="down"
                  style={{
                    fontSize: FontSize(14),
                    color: 'white',
                    fontWeight: '500',
                    fontFamily : GStyles.Poppins
                  }}
                />
              </TouchableOpacity>
            </View>
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
              paddingVertical: 5,
            }}
            data={SherAvatar}
            keyExtractor={item => item.id + item.img}
            renderItem={item => (
              <TouchableOpacity
                key={item.index}
                onPress={() => {
                  // setCustomCategory(item.item.id)

                  if (assignUser.includes(item.item.id)) {
                  } else {
                    setAssignUser([...assignUser, item.item.id]);
                  }
                }}>
                <View
                  style={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 85,
                      height: 85,
                      borderRadius: 100,
                      borderColor: assignUser.includes(item.item.id)
                        ? GStyles.primaryPurple
                        : GStyles.gray.light,
                      borderWidth: 2,
                      padding: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      elevation: 2,
                    }}>
                    <Image
                      source={item.item.img}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: FontSize(14),
                      fontFamily: GStyles.Poppins,
                      color: assignUser.includes(item.item.id)
                        ? GStyles.primaryPurple
                        : '#3D3D3D',
                      paddingVertical: 5,
                    }}>
               
                    Student Name
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View> */}
      </ScrollView>
      }
    
      <View
        style={{
          paddingHorizontal: '4%',
          paddingVertical: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('TeacherTaskAssign')
            // handleOnDataFlow();
            handleCreateTask(taskData)
            // navigation.navigate('TeacherTaskAssign', {
            //   taskData: taskData,
            // });
          }}
          style={{
            backgroundColor: GStyles.primaryPurple,
            padding: 10,
            borderRadius: 100,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '90%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            {/* <AntDesign name="plus" size={20} color="white" /> */}
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <CustomModal
        modalVisible={modalVisible}
        // backButton
        setModalVisible={setModalVisible}
        height={250}
        width={'85%'}
        Radius={10}
        
        >
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
            }}>
            Please Enter The Custom Points
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: FontSize(16),
            }}
            placeholder="number"
            keyboardType="decimal-pad"
          />

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
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: FontSize(16),
                  fontWeight: '400',
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>

      <CustomModal
        modalVisible={successModal}
        backButton
        setModalVisible={setSuccessModal}
  
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
            Task Added Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              textAlign: 'center',
            }}>
            New task is added successfully ,You can assign the task your students
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
              // navigation?.navigate('TeacherTaskAssign', results.data)
              // console.log(results.data);
              navigation?.goBack()
                setSuccessModal(false);
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
            <TouchableOpacity
              onPress={() => {
              
           navigation?.navigate('TeacherTaskAssign', {data : results?.data?.data})
                setSuccessModal(false);
              }}
              style={{
                backgroundColor: GStyles.primaryPurple,
                width: '50%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: FontSize(16),
                  fontWeight: '400',
                }}>
                Assign to
              </Text>
              <AntDesign name="arrowright" size={15} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <PopUpModal ref={popRef} />
    </View>
  );
};

export default TeacherCreateTask;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Fragment, useCallback} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigProps} from '../../interfaces/NavigationPros';
import {FlatList} from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {categoryIcons, ShearIcons, SherAvatar} from '../../utils/ShearData';
import {Slider} from 'react-native-awesome-slider';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import { useContextApi } from '../../context/ContextApi';
import Toast from 'react-native-toast-message';
import { useGetIconsPresetQuery } from '../../redux/apiSlices/teacher/presetSlices';
import { imageUrl } from '../../redux/api/baseApi';
import PopUpModal, { PopUpModalRef } from '../../components/modals/PopUpModal';
import { useCreateRewardsMutation } from '../../redux/apiSlices/teacher/teacherRewords';

interface IRewardsUProps {
  name: string;
  image: string;
  requiredPoints: number;
}

const TeacherCreateRewards = ({navigation}: NavigProps<null>) => {
  const popRef = React.useRef<PopUpModalRef>()
  const {user} = useContextApi();
  const [RewardsData, setRewardsData] = React.useState<IRewardsUProps>({
    name: "",
    image: "",
    requiredPoints: 0
  });
  const {data: Icons} = useGetIconsPresetQuery(user.token);
  const [createRewards,results] = useCreateRewardsMutation()

  const [rewordPoints, setRewordPoints] = React.useState<number>(50);

  const [customImage, setCustomImage] = React.useState<string>(Icons?.data![0].image as string);

  const [successModal, setSuccessModal] = React.useState(false);

  const progress = useSharedValue(rewordPoints);
  const min = useSharedValue(0);
  const max = useSharedValue(200);

  const handleCreateReword = useCallback(
    (UData :IRewardsUProps) => {

      // console.log(UData);
      if(!UData?.requiredPoints){
      UData.requiredPoints = rewordPoints
      }
    
      if(!UData?.image){
        UData.image = customImage
      }
      
      if(!UData.name){
        return popRef.current?.open({
          title:"Please write Rewards name",
            buttonText : "Ok"
        }) 
      }
      if(!UData.requiredPoints){
       return  popRef.current?.open({
          title:"select required points",
            buttonText : "Ok"
        }) 
      }
      
    

     if(UData?.name&& UData?.requiredPoints && UData?.image){
      createRewards({token : user.token, data : UData}).then(res=>{
        // console.log(res);
        if(res?.data?.success){
          // setModalVisible(false);
          setSuccessModal(true);
        }
        if(res?.error){
          console.log(res.error);
          Toast.show({
            type: 'error',
            text1: "something is missing try again",
          })
        }
      })
     }
    
      // setSuccessModal(true);

    },
    [RewardsData],
  );


  React.useEffect(() => {
    progress.value = withTiming(rewordPoints, {duration: 10});
  }, [rewordPoints]);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Create Reward"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
          <View
            style={{
              marginTop: 25,
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
                fontSize: 16,
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',

                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Reword Name
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
              fontSize: 16,
              color: '#3D3D3D',

              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            onChangeText={text => setRewardsData({...RewardsData, name: text})}
            placeholderTextColor="gray"
            multiline
            placeholder=" Name"
            value={RewardsData?.name}
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
                fontSize: 16,
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',

                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
         Points Required
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
       
          <TextInput
            style={{
              borderBottomColor: '#E2E2E2',
              borderBottomWidth: 1,
              width: '100%',
              paddingLeft: 10,
              paddingRight: 10,
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              color: '#3D3D3D',

              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            onChangeText={text => setRewardsData({...RewardsData, requiredPoints: Number(text)})}
            placeholderTextColor="gray"
            // multiline
            placeholder="0"
            keyboardType='decimal-pad'
            // value={`${RewardsData?.requiredPoints}`}
          />
        </View>
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
              }}>
              <View
                style={{
                  marginVertical: 20,
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
                    fontSize: 16,
                    fontFamily: GStyles.PoppinsSemiBold,
                    color: '#3D3D3D',

                    fontWeight: '500',
                    letterSpacing: 0.5,
                  }}>
                  Choose icon
                </Text>
              </View>
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
               keyboardShouldPersistTaps="always"
            contentContainerStyle={{
              gap: 24,
            }}
            data={Icons?.data}
            keyExtractor={item => item._id + item.createdAt}
            renderItem={item => (
              <TouchableOpacity
              activeOpacity={.8}
                key={item.index}
                onPress={() => {
                  setCustomImage(item.item.image) 
                  setRewardsData({...RewardsData,image : item.item.image})
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
                  
                      // padding: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // elevation: 1,
                    }}>
                    <Image
                      source={{
                        uri : imageUrl + item.item.image
                      }}
                      style={{
                        borderColor:
                        customImage  === item.item.image
                          ? GStyles.primaryPurple
                          : GStyles.gray.light,
                      borderWidth: 3,
                        width: 65,
                        height: 65,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                  {/* <Text
                    style={{
                      fontSize: 14,
                      fontFamily: GStyles.Poppins,
                      // color:
                      //   item.item.id === customCategory
                      //     ? GStyles.primaryPurple
                      //     : '#3D3D3D',
                      paddingVertical: 5,
                    }}>
                    {item.item.title}
                  </Text> */}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
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
            // navigation?.goBack()
          handleCreateReword(RewardsData)
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
              fontSize: 16,
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    
      <CustomModal
        modalVisible={successModal}
        backButton
        setModalVisible={setSuccessModal}
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
            Reword Added Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            New Reword is added successfully ,You can assign the reword your students
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
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Exit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
              
           navigation?.navigate('TeacherRewardsAssign', {data : results?.data?.data})
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
                  fontSize: 16,
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

export default TeacherCreateRewards;

const styles = StyleSheet.create({});

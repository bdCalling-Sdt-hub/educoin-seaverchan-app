import React, { useCallback } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Toast from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import { useContextApi } from '../../context/ContextApi';
import { NavigProps } from '../../interfaces/NavigationPros';
import { imageUrl } from '../../redux/api/baseApi';
import { useGetIconsPresetQuery } from '../../redux/apiSlices/teacher/presetSlices';
import { useUpdateRewardsMutation } from '../../redux/apiSlices/teacher/teacherRewords';
import { IReword } from '../../redux/interface/interface';
import { GStyles } from '../../styles/GStyles';
import { FontSize } from '../../utils/utils';

interface IRewardsUProps {
  name: string;
  image: any;
  requiredPoints: number;
}

const TeacherEditRewards = ({navigation, route}: NavigProps<IReword>) => {
  const [RewardsData, setRewardsData] = React.useState<IRewardsUProps>(route?.params.data);
//  console.log(RewardsData);
  const {user} = useContextApi();
  const {data: IconsData} = useGetIconsPresetQuery(user.token);
  const [updateReword,results] = useUpdateRewardsMutation()

  const [rewordPoints, setRewordPoints] = React.useState<number>(50);

  const [customImage, setCustomImage] = React.useState<string>(route?.params?.data?.image || IconsData?.data![0].image as string);


  const [successModal, setSuccessModal] = React.useState(false);



  const handleCreateReword = useCallback(
    (UData :IRewardsUProps) => {

    
      // console.log(UData);
   
    
      if(!UData?.image){
        UData.image = customImage
      }
      
      if(!UData.name){
        Toast.show({
          type : "info",
          text1 : "Please write a reword name"
        })
      }
      if(!UData.requiredPoints){
        Toast.show({
          type : "info",
          text1 : "Select required points"
        })
      }
   
     if(UData?.name&& UData?.requiredPoints && UData?.image){
      updateReword({token : user.token, id : route?.params?.data._id, data : UData}).then(res=>{
        // console.log(res);
        if(res?.data?.success){
          // setModalVisible(false);
          setSuccessModal(true);
        }
        if(res?.error){
          console.log(res.error);
          Toast.show({
            type: 'error',
            text1: res?.error?.data?.message,
          })
        }
      })
     }
    
      // setSuccessModal(true);

    },
    [RewardsData],
  );



  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Edit Reward"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
                fontSize: FontSize(16),
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
              fontSize: FontSize(16),
              color: '#3D3D3D',

              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            onChangeText={text => setRewardsData({...RewardsData, name: text})}
            placeholderTextColor="gray"
            multiline
            placeholder="Name"
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
                fontSize: FontSize(16),
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
              fontSize: FontSize(16),
              color: '#3D3D3D',

              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            onChangeText={text => setRewardsData({...RewardsData, requiredPoints: Number(text)})}
            value={`${RewardsData?.requiredPoints}`}
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
                    fontSize: FontSize(16),
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
            contentContainerStyle={{
              gap: 24,
            }}
            data={IconsData?.data}
            keyExtractor={item => item._id + item.createdAt}
            renderItem={item => (
              <TouchableOpacity
              activeOpacity={.8}
                key={item.index}
                onPress={() => {
               
                  setRewardsData({...RewardsData,image:item.item.image})
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
                  
                      padding: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
        
                    }}>
                    <Image
                      source={{
                        uri : imageUrl + item.item.image
                      }}
                      style={{
                        borderColor:
                        RewardsData?.image  == item.item.image
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
                      fontSize: FontSize(14),
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
      </ScrollView>
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
              fontSize: FontSize(16),
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
            Reword Updated Successfully
          </Text>
          {/* <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              textAlign: 'center',
            }}>
            New Reword is added successfully ,You can assign the reword your students
          </Text> */}

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
            {/* <TouchableOpacity
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
                  fontSize: FontSize(16),
                  fontWeight: '400',
                }}>
                Assign to
              </Text>
              <AntDesign name="arrowright" size={15} color={'white'} />
            </TouchableOpacity> */}
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default TeacherEditRewards;

const styles = StyleSheet.create({});

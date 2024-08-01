import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SherAvatar } from '../../utils/ShearData';


const data = [
  {
    id: 1,
    avatar: require("../../assets/images/studentAvatar/1.png"),
  },
  {
    id: 2,
    avatar: require("../../assets/images/studentAvatar/2.png"),
  },
  {
    id: 3,
    avatar: require("../../assets/images/studentAvatar/3.png"),
  },
  {
    id: 4,
    avatar: require("../../assets/images/studentAvatar/4.png"),
  },
  {
    id: 5,
    avatar: require("../../assets/images/studentAvatar/5.png"),
  },
  {
    id: 6,
    avatar: require("../../assets/images/studentAvatar/6.png"),
  },
  {
    id: 7,
    avatar: require("../../assets/images/studentAvatar/7.png"),
  },
  {
    id: 8,
    avatar: require("../../assets/images/studentAvatar/8.png"),
  },
  {
    id: 9,
    avatar: require("../../assets/images/studentAvatar/9.png"),
  },
]

const TeacherAddNewStudent = ({navigation}: NavigProps<null>) => {
  const [selectAvatar,setSelectAvatar] = React.useState<number>()
  const [modalVisible, setModalVisible] = React.useState(false);
  const [image,setImage] = React.useState<string>()

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
          setImage(result?.assets![0].uri);
          console.log(result);
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
          setImage(result?.assets![0].uri);
          console.log(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(selectAvatar);
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
          gap: 24,
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Student name
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
            placeholder="Task Name"
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Date of birth
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
            placeholder="dd/mm/yy"
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
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                fontFamily: GStyles.Poppins,
                color: GStyles.textColor['#3D3D3D'],
              }}>
              Choose Avatar
            </Text>
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
               
               {
                image ?<TouchableOpacity
                onPress={()=>{
                  handleImagePick("camera")
                  if(selectAvatar){
                    setSelectAvatar(undefined)
                  }
                }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 100,
                    backgroundColor: '#F1F1F1',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: selectAvatar !== 0 && !selectAvatar ?  GStyles.primaryPurple :"white"  ,
                    borderWidth:  2,
                  
                  }}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: image ? image : 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?t=st=1719114915~exp=1719118515~hmac=b0042447940766e77ea1a9af3f624920c9fa8c13da6a64b23180f75605c7ef17&w=740',
                    }}
                  />
                </TouchableOpacity> :  <TouchableOpacity
         onPress={()=>handleImagePick("camera")}
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
               }
              
              </>
             
            )}
            renderItem={item => (
              <TouchableOpacity
              onPress={()=>setSelectAvatar(item.item.id)}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 100,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: selectAvatar === item.item.id ? GStyles.primaryPurple : GStyles.borderColor['#ECECEC'],
                  borderWidth:  2,
                
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                  }}
                  source={item.item.img ? item.item.img :{
                    uri:  'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?t=st=1719114915~exp=1719118515~hmac=b0042447940766e77ea1a9af3f624920c9fa8c13da6a64b23180f75605c7ef17&w=740',
                  }}
                />
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
            setModalVisible(true);
            // navigation.goBack()
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
    </View>
  );
};

export default TeacherAddNewStudent;

const styles = StyleSheet.create({});

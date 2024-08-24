import React, { useCallback, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GStyles, WIDTH } from '../../styles/GStyles';

import { ScrollView } from 'react-native';
import { Dialog } from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
import NormalButtons from '../../components/common/Buttons/NormalButtons';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import { useContextApi } from '../../context/ContextApi';
import { NavigProps } from '../../interfaces/NavigationPros';
import { imageUrl } from '../../redux/api/baseApi';
import { useGetUserTeacherQuery } from '../../redux/apiSlices/authSlice';
import { useUpdateTeacherMutation } from '../../redux/apiSlices/teacher/teacherSlices';
import { FontSize } from '../../utils/utils';

const EditTeacherProfile = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi();
  const {data, error} = useGetUserTeacherQuery(user.token);
  const [imgModal, setImageModal] = useState(false);
  const [updateUser, results] = useUpdateTeacherMutation();
  const [userInfo, setUserInfo] = React.useState({
    name: data?.data?.name,
    contact: data?.data?.contact,
    location: data?.data?.location,
    image: {},
  });
  const [categoryImage, setCategoryImage] = React.useState<string | undefined>(
    '',
  );
  // console.log(categoryImage);

  const imgUrl = data?.data.profile.startsWith("https") ? data?.data.profile : `${imageUrl}/${data?.data?.profile}`

  const handleImagePick = async (option: 'camera' | 'library') => {
    try {
      if (option === 'camera') {
        const result = await launchCamera({
          mediaType: 'photo',
          // includeBase64: true,
        });

        if (!result.didCancel) {
          setCategoryImage(result?.assets![0].uri);
          // console.log(result?.assets![0]);
          setUserInfo({
            ...userInfo,
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
          setImageModal(false);
        }
      }
      if (option === 'library') {
        const result = await launchImageLibrary({
          mediaType: 'photo',
        });

        if (!result.didCancel) {
          setCategoryImage(result?.assets![0].uri);
          // console.log(result);

          setUserInfo({
            ...userInfo,
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
          setImageModal(false);
        }
      }
    } catch (error) {
      console.log(error);
      setImageModal(false);
    }
  };

  const handleSubmit = useCallback(
    (UData: {
      name: string;
      // contact: string;
      location: string;
      image?: {
        uri: string;
        type: string;
        name: string;
        size: number;
        lastModified: Date; // Assuming current time as last modified
        lastModifiedDate: Date;
        webkitRelativePath: string;
      };
    }) => {
      // console.log(UData);
      const formData = new FormData();
      if (UData?.image?.uri) {
        formData.append('image', UData?.image);
      }
      UData?.name && formData.append('name', UData?.name);
      // UData?.contact && formData.append('contact', UData?.contact);
      UData?.location && formData.append('location', UData?.location);
      // console.log(UData);
      updateUser({token: user?.token, data: formData}).then(res => {
        // console.log(res);
        navigation?.goBack();
      });
    },
    [userInfo],
  );

  // console.log(results?.isLoading);
  

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Profile"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView
        style={{
          paddingHorizontal: '4%',
          marginTop: 24,
        }}>
        <View
          style={{
            height: 195,
            width: '100%',
            borderWidth: 1,
            borderColor: '#ECECEC',
            borderRadius: 8,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 8,
          }}>
          <View
            style={{
              height: 86,
              width: 86,
            }}>
           {/* {console.log(data?.data?.profile)} */}
            <Image
              source={{
                uri: categoryImage ?categoryImage : imgUrl
              }}
              style={{
                height: 86,
                width: 86,
                resizeMode: 'cover',
                borderRadius: 100,
              }}
            />
            <TouchableOpacity
              onPress={() => setImageModal(true)}
              style={{
                width: 32,
                height: 32,
                backgroundColor: '#3AAFFF',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 2,
                right: 2,
              }}>
              <Feather
                name="camera"
                size={18}
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.PoppinsSemiBold,
                fontSize: FontSize(16),
                textAlign: 'center',
                color: '#3D3D3D',
              }}>
              {data?.data?.name}
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                textAlign: 'center',
                color: '#3D3D3D',
              }}>
              {data?.data?.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: '#ECECEC',
            borderRadius: 8,
            padding: 24,
            gap: 20,
          }}>
          <View
            style={{
              gap: 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: GStyles.PoppinsSemiBold,
                fontSize: FontSize(16),
                color: '#3D3D3D',
                marginVertical: 3,
              }}>
              Personal Information:
            </Text>
            {/* <TouchableOpacity>
              <AntDesign
                name="edit"
                style={{
                     fontSize: FontSize(20),
                  color: '#3D3D3D',
                  fontWeight: 'bold',
                }}
              />
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: '#3D3D3D',
              }}>
              Name :{' '}
            </Text>
            <TextInput
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(14),
                color: GStyles.textColor['#3D3D3D'],
              }}
              placeholderTextColor={GStyles.textColor['#929394']}
              placeholder="type name"
              value={userInfo?.name}
              onChangeText={text =>
                setUserInfo({
                  ...userInfo,
                  name: text,
                })
              }
            />
          </View>

          {/* <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: '#3D3D3D',
              }}>
              Phone number :
            </Text>
            <TextInput
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(14),
                color: GStyles.textColor['#3D3D3D'],
              }}
              placeholderTextColor={GStyles.textColor['#929394']}
              placeholder="type contact"
              value={userInfo?.contact}
              onChangeText={text =>
                setUserInfo({
                  ...userInfo,
                  contact: text,
                })
              }
            />
          </View> */}
          <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: '#3D3D3D',
              }}>
              Address :
            </Text>
            <TextInput
              placeholderTextColor={GStyles.textColor['#929394']}
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(14),
                color: GStyles.textColor['#3D3D3D'],
              }}
              placeholder="type location"
              value={userInfo?.location}
              onChangeText={text =>
                setUserInfo({
                  ...userInfo,
                  location: text,
                })
              }
            />
          </View>
        </View>
      </ScrollView>

      <NormalButtons
        loading={results?.isLoading}
        onPress={() => {
          handleSubmit(userInfo);
        }}
        title="Save"
      />

      <Dialog
        width={WIDTH}
        visible={imgModal}
        bottom
        onDismiss={() => setImageModal(false)}
        panDirection={Dialog.directions.DOWN}>
        <View
          style={{
            backgroundColor: 'white',

            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center',
            // alignItems: 'center',
            paddingHorizontal: '4%',
            paddingVertical: '5%',
            gap: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              handleImagePick('camera');
            }}
            style={{
              paddingVertical: '2%',
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),

                color: '#3D3D3D',
              }}>
              Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleImagePick('library');
            }}
            style={{
              paddingVertical: '2%',
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),

                color: '#3D3D3D',
              }}>
              Library
            </Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    </View>
  );
};

export default EditTeacherProfile;

const styles = StyleSheet.create({});

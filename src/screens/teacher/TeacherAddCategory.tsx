import {
  FlatList,
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
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ModalOfBottom from '../../components/common/CustomModal/ModalOfButtom';

import {categoryIcons, ShearIcons} from '../../utils/ShearData';
import Require from '../../components/common/require/Require';
import {useCreateCategoryMutation} from '../../redux/apiSlices/teacher/techerCategorySlices';
import {useContextApi} from '../../context/ContextApi';
import { useGetAvatarPresetQuery, useGetIconsPresetQuery } from '../../redux/apiSlices/teacher/presetSlices';
import { imageUrl } from '../../redux/api/baseApi';
import PopUpModal, { PopUpModalRef } from '../../components/modals/PopUpModal';

const TeacherAddCategory = ({navigation}: NavigProps<null>) => {
  const popRef = React.useRef<PopUpModalRef>()
  const {user} = useContextApi();
  const {data : icons,refetch : iconsRefetch} = useGetIconsPresetQuery(user.token) 
  // console.log(icons);
  const [createCategory, results] = useCreateCategoryMutation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [launchCameraModal, setLaunchCameraModal] = React.useState(false);
  const [isGood, setIsGood] = React.useState(true);
  const [categoryData, setCategoryData] = React.useState({
    name: '',
    image: "",
  });


  const [categoryImage, setCategoryImage] = React.useState<string>(
    icons?.data![0]?.image || "",
  );
  // console.log(categoryData.image);


  const handleCreateCategory = useCallback(
    (UData: {name: string; image: string}) => {
      // console.log(UData);

      if(!UData?.name){
        return popRef?.current?.open({
          title : "Category name is required"
        })
      }

      if(!UData?.image){
        return popRef?.current?.open({
          title : "Please choose category icon"
        })
      }
      if(UData?.image){
        UData.image =  categoryImage
      }
      createCategory({token: user?.token, data: UData}).then(res => {
        if(res.error){
          console.log(res.error);
        }
        // console.log(res);
        if (res?.data?.success) {
          setModalVisible(true);
        }
      });
    },
    [categoryData],
  );


 

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Add New Category"
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
          gap: 24,
        }}>
        <View>
          <Require title="Category Name" />
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
              color: GStyles.textColor['#3D3D3D'],
            }}
            placeholderTextColor={GStyles?.gray?.lightHover}
            onChangeText={text =>
              setCategoryData({...categoryData, name: text})
            }
            placeholder="type name"
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
            Add Image
          </Text>
          <View
            style={{
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: GStyles.gray.light,
              borderRadius: 8,
              marginVertical: 20,
            }}>
            {rewordImage ? (
              <View
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                }}>
                <Image
                  source={{uri: rewordImage}}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#E2E2E2',
                  }}
                />
                <TouchableOpacity
                  onPress={() => setRewordImage(undefined)}
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    padding: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="close" size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <View
                  style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    onPress={() => handleImagePick('camera')}
                    style={{
                      padding: 20,
                    }}>
                    <Feather
                      name="camera"
                      size={80}
                      color={GStyles.primaryPurple}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleImagePick('library')}
                    style={{
                      padding: 20,
                    }}>
                    <Feather
                      name="folder"
                      size={80}
                      color={GStyles.primaryPurple}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View> */}
        <View
          style={{
            marginBottom: 20,
          }}>
          <Require title="Choose Icon" />
          <FlatList
          keyboardShouldPersistTaps="always"
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 24,
            }}
            data={icons?.data}
            // ListHeaderComponent={() => (
            //   <View>
            //     <TouchableOpacity onPress={() => handleImagePick('library')}>
            //       <View
            //         style={{
            //           gap: 12,
            //           justifyContent: 'center',
            //           alignItems: 'center',
            //           marginVertical: 15,
            //           borderColor: GStyles.gray.light,
            //           // padding: 5,
            //           borderWidth: 2,
            //           borderRadius: 8,
            //           // elevation: 2,
            //         }}>
            //         <View
            //           style={{
            //             width: 65,
            //             height: 65,
            //             // backgroundColor: GStyles.purple.light,
            //             borderRadius: 8,
            //             padding: 3,
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //           }}>
            //           {categoryData?.image?.uri ? (
            //             <Image
            //               source={{
            //                 uri: categoryData?.image?.uri,
            //               }}
            //               style={{
            //                 width: 60,
            //                 height: 60,
            //                 borderRadius: 8,
            //               }}
            //               resizeMode="cover"
            //             />
            //           ) : (
            //             <Feather
            //               name="plus"
            //               color={GStyles.gray.lightHover}
            //               size={25}
            //             />
            //           )}
            //         </View>
            //       </View>
            //     </TouchableOpacity>
            //   </View>
            // )}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => {
                  setCategoryImage(item.item.image);
                  setCategoryData({...categoryData,image : item.item.image})
                }}
                key={item.index}>
                <View
                  style={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 15,
                   
                    // borderRadius: 15,
                    // elevation : 1
                  }}>
                  <Image
                    source={{
                      uri: imageUrl + item.item.image,
                    }}
                    style={{
                      borderColor:
                      categoryImage === item.item.image
                        ? GStyles.primaryPurple
                        : GStyles.gray.light,
                    // padding: 1,
                    borderWidth: 3,
                      width: 70,
                      height: 70,
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
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
            // setModalVisible(true);
            handleCreateCategory(categoryData);
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
            Category Added Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
              color: GStyles.gray.normal,
            }}>
            category created done now you can use this category to create task
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation?.goBack();
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
          </View>
        </View>
      </CustomModal>
      <PopUpModal ref={popRef} />
    </View>
  );
};

export default TeacherAddCategory;

const styles = StyleSheet.create({});

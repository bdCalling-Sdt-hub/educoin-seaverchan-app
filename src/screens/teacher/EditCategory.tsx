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
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from '../../redux/apiSlices/teacher/techerCategorySlices';
import {useContextApi} from '../../context/ContextApi';
import {ICategory} from '../../redux/interface/interface';
import {imageUrl} from '../../redux/api/baseApi';
import { useGetIconsPresetQuery } from '../../redux/apiSlices/teacher/presetSlices';

const EditCategory = ({navigation, route}: NavigProps<ICategory>) => {
  const {user} = useContextApi();
  // console.log(route?.params.data);
  const {data : icons} = useGetIconsPresetQuery(user.token)
  const [updateCategory, results] = useUpdateCategoryMutation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [launchCameraModal, setLaunchCameraModal] = React.useState(false);
  const [isGood, setIsGood] = React.useState(true);
  const [categoryData, setCategoryData] = React.useState(route?.params?.data);
  const [categoryImage, setCategoryImage] = React.useState<string>(
    route?.params?.data?.image as string,
  );


  
  // console.log(categoryImage);



  const handleCreateCategory = useCallback(
    (UData: {name: string; image: string}) => {
      // console.log(UData);
      
      if(!UData?.image){
        UData.image =  categoryImage
      }
      
      updateCategory({
        token: user?.token,
        id: route?.params?.data?._id,
        data: UData,
      }).then(res => {
        // console.log(res);
        if (res?.data?.success) {
          setModalVisible(true);
        }
      });
    },
    [],
  );

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Edit Category"
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
            value={categoryData?.name}
            onChangeText={text =>
              setCategoryData({...categoryData, name: text})
            }
            placeholder="type name"
          />
        </View>

        <View
          style={{
            marginBottom: 20,
          }}>
          <Require title="Choose Icon" />
          <FlatList
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
                   
                 
                    // elevation : 2
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
        height={'20%'}
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
            Updated Successfully
          </Text>
          {/* <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
              color: GStyles.gray.normal,
            }}>
            simply dummy text of the printing and typesetting industry
          </Text> */}

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
    </View>
  );
};

export default EditCategory;

const styles = StyleSheet.create({});

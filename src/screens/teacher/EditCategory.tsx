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
  import React from 'react';
  import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
  import {GStyles} from '../../styles/GStyles';
  import {NavigProps} from '../../interfaces/NavigationPros';
  import CustomModal from '../../components/common/CustomModal/CustomModal';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
  import ModalOfBottom from '../../components/common/CustomModal/ModalOfButtom';
  
  export const categories = [
    {
      id: 1,
      title: 'Gift',
      img: require("../../assets/images/categoryIcons/11.png"),
    },
    {
      id: 2,
      title: 'Conversation',
      img: require("../../assets/images/categoryIcons/12.png"),
    },
    {
      id: 3,
      title: 'Video',
      img: require("../../assets/images/categoryIcons/13.png"),
    },
    {
      id: 4,
      title: 'Earn',
      img: require("../../assets/images/categoryIcons/14.png"),
    },
    {
      id: 5,
      title: 'Writing',
      img: require("../../assets/images/categoryIcons/18.png"),
    },
    {
      id: 7,
      title: 'Tag',
      img: require("../../assets/images/categoryIcons/17.png"),
    },
    {
      id: 8,
      title: 'Take picture',
      img: require("../../assets/images/categoryIcons/19.png"),
    },
    {
      id: 9,
      title: 'Browse',
      img: require("../../assets/images/categoryIcons/2.png"),
    },
    {
      id: 10,
      title: 'Donation',
      img: require("../../assets/images/categoryIcons/20.png"),
    },
    {
      id: 11,
      title: 'Music',
      img: require("../../assets/images/categoryIcons/21.png"),
    },
    {
      id: 12,
      title: 'Caring',
      img: require("../../assets/images/categoryIcons/23.png"),
    },
    {
      id: 13,
      title: 'Time Mange',
      img: require("../../assets/images/categoryIcons/25.png"),
    },
    {
      id: 15,
      title: 'Behaviour',
      img: require("../../assets/images/categoryIcons/26.png"),
    },
    {
      id: 16,
      title: 'Wake up',
      img: require("../../assets/images/categoryIcons/5.png"),
    },
    
  
  ];
  
  const EditCategory = ({navigation}: NavigProps<null>) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [launchCameraModal, setLaunchCameraModal] = React.useState(false);
    const [isGood, setIsGood] = React.useState(true);
    const [categoryImage, setCategoryImage] = React.useState<string | undefined>('');
    const [categoryName, setCategoryName] = React.useState<string | undefined>('rest');
  
    const [customCategory, setCustomCategory] = React.useState<number>(2);
  
    console.log(categoryImage);
  
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
            setCategoryImage(result?.assets![0].uri);
            // console.log(result);
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
            setCategoryImage(result?.assets![0].uri);
            // console.log(result);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
        }}>
        <HeaderBackground
          title="Add Category"
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
              Category Name
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
              placeholder="Class name"
              value={categoryName}
              onChangeText={(text) => setCategoryName(text)}
            />
          </View>
  
        

          <View
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
              Choose Image
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 24,
              }}
              data={categories}
  
              ListHeaderComponent={()=><View>
                 <TouchableOpacity
               onPress={()=>handleImagePick("library")}
            >
                  <View
                    style={{
                      gap: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 15,
                      borderColor: GStyles.gray.light,
                      // padding: 5,
                      borderWidth: 2,
                      borderRadius: 100,
                      elevation : 2
                    }}>
                    <View
                      style={{
                        width: 65,
                        height: 65,
                        // backgroundColor: GStyles.purple.light,
                        borderRadius: 50,
                        padding: 3,
                        justifyContent : "center",
                        alignItems : 'center'
                      }}>
                        {
                          categoryImage  ? <Image
                          source={{
                            uri : categoryImage
                          } }
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 50,
                          }}
                          resizeMode='cover'
                        />
                        : <Feather name='plus' color={GStyles.gray.lightHover} size={25}/>
                        }
                      
                    </View>
                  </View>
                </TouchableOpacity>
              </View>}
  
              renderItem={item => (
                <TouchableOpacity
                  onPress={() => {
                    setCustomCategory(item.item.id);
                  }}
                  key={item.index}>
                  <View
                    style={{
                      gap: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 15,
                      borderColor:
                        customCategory === item.item.id
                          ? GStyles.primaryPurple
                          : GStyles.gray.light,
                      // padding: 5,
                      borderWidth: 2,
                      borderRadius: 100,
                      elevation : 2
                    }}>
                    <View
                      style={{
                        width: 65,
                        height: 65,
                        // backgroundColor: GStyles.purple.light,
                        borderRadius: 50,
                        padding: 3,
                      }}>
                      <Image
                        source={item.item.img}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 50,
                        }}
                        resizeMode='cover'
                      />
                    </View>
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
              Updated
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
              Category Updated Successfully
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
  
  export default EditCategory;
  
  const styles = StyleSheet.create({});
  
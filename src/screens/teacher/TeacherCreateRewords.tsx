import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigProps} from '../../interfaces/NavigationPros';
import {FlatList} from 'react-native';

const TeacherCreateRewords = ({navigation, route}: NavigProps<null>) => {
  const [rewordName, setRewordName] = React.useState('');
  const [rewordDescription, setRewordDescription] = React.useState('');
  const [rewordPoints, setRewordPoints] = React.useState<number>();
  const [rewordCategory, setRewordCategory] = React.useState('');
  const [rewordImage, setRewordImage] = React.useState<string | undefined>();

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
          setRewordImage(result?.assets![0].uri);
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
          setRewordImage(result?.assets![0].uri);
          console.log(result);
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
        title="Create Rewards"
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
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.PoppinsSemiBold,
              color: '#3D3D3D',
              lineHeight: 24,
              fontWeight: '500',
              letterSpacing: 0.5,
              marginTop: 25,
            }}>
            Rewords Name
          </Text>
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
            onChangeText={text => setRewordName(text)}
            placeholderTextColor="gray"
            multiline
            placeholder="Rewords Name"
            value={rewordName}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
            paddingVertical: '5%',
            marginTop: -10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.PoppinsSemiBold,
              color: '#3D3D3D',
              lineHeight: 24,
              fontWeight: '500',
              letterSpacing: 0.5,
              marginVertical: 15,
            }}>
            Points
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
            }}
            data={[...Array(8)]}
            // ListHeaderComponent={() => (
            //   <TouchableOpacity
            //     onPress={() => {
            //       // setModalVisible(true);
            //     }}
            //     style={{
            //       width: 45,
            //       height: 45,
            //       borderRadius: 10,
            //       borderWidth: 1,
            //       borderColor: '#C3C3C3',
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       backgroundColor: 'white',
            //     }}>
            //     <AntDesign name="plus" size={20} color={'gray'} />
            //   </TouchableOpacity>
            // )}
            renderItem={item => (
              <Fragment key={item.index}>
                <TouchableOpacity
                  onPress={() => setRewordPoints(item.index)}
                  key={item.index}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:
                      rewordPoints === item.index
                        ? GStyles.primaryOrange
                        : '#C3C3C3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:
                      rewordPoints === item.index
                        ? GStyles.primaryOrange
                        : 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: rewordPoints === item.index ? 'white' : '#3D3D3D',
                      fontWeight: '500',
                      letterSpacing: 0.5,
                      // padding: 1,
                    }}>
                    {item.index === 0 ? 1 : item.index * 5}
                  </Text>
                </TouchableOpacity>
              </Fragment>
            )}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
            paddingVertical: '5%',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.PoppinsSemiBold,
              color: '#3D3D3D',
              lineHeight: 24,
              fontWeight: '500',
              letterSpacing: 0.5,
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
          onPress={() => navigation?.goBack()}
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
    </View>
  );
};

export default TeacherCreateRewords;

const styles = StyleSheet.create({});

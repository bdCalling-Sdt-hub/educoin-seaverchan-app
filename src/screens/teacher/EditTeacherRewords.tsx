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
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigProps} from '../../interfaces/NavigationPros';
import {FlatList} from 'react-native';

const TeacherEditRewords = ({navigation}: NavigProps) => {
  const [rewordName, setRewordName] = React.useState(
    'Playing outside with dad',
  );
  const [rewordDescription, setRewordDescription] = React.useState('');
  const [rewordPoints, setRewordPoints] = React.useState<number>(5);
  const [rewordCategory, setRewordCategory] = React.useState('');
  const [rewordImage, setRewordImage] = React.useState<string | undefined>(
    'data:image/jpeg;base64,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',
  );
  const [customPoints, setCustomPoints] = React.useState<number>(3);

  const handleImagePick = async () => {
    try {
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
        title="Edit Rewards"
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
            placeholderTextColor="#3D3D3D"
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
                  onPress={() => setCustomPoints(item.index)}
                  key={item.index}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:
                      customPoints === item.index
                        ? GStyles.primaryOrange
                        : '#C3C3C3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:
                      customPoints === item.index
                        ? GStyles.primaryOrange
                        : 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: customPoints === item.index ? 'white' : '#3D3D3D',
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
          <TouchableOpacity
            onPress={() => handleImagePick()}
            style={{
              height: 250,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {rewordImage ? (
              <Image
                source={{uri: rewordImage}}
                style={{
                  width: '90%',
                  height: '90%',
                  resizeMode: 'cover',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#E2E2E2',
                  marginBottom: 10,
                }}
              />
            ) : (
              <>
                <Ionicons name="images-outline" size={100} color="#C3C3C3" />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.primaryPurple,
                    lineHeight: 24,
                    fontWeight: '500',
                  }}>
                  Browse image{' '}
                </Text>
              </>
            )}
          </TouchableOpacity>
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
            // navigation.navigate('TeacherCreateRewords')
            navigation.goBack();
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
    </View>
  );
};

export default TeacherEditRewords;

const styles = StyleSheet.create({});

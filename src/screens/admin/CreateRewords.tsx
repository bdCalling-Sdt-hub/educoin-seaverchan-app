import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface HeaderBackgroundProps {
  navigation: NavigationProp<ParamListBase>;
}

const CreateRewords = ({navigation}: HeaderBackgroundProps) => {
  const [rewordName, setRewordName] = React.useState('');
  const [rewordDescription, setRewordDescription] = React.useState('');
  const [rewordPoints, setRewordPoints] = React.useState<number>();
  const [rewordCategory, setRewordCategory] = React.useState('');
  const [rewordImage, setRewordImage] = React.useState<string | undefined>();

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
        // console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <HeaderBackground title="Create Rewords" navigation={navigation} />
      <View>
        <View
          style={{
            paddingHorizontal: '4%',
          }}>
          <TextInput
            style={{
              borderBottomColor: '#E2E2E2',
              borderBottomWidth: 1,
              width: '100%',
              height: 75,
              paddingLeft: 10,
              paddingRight: 10,
              fontFamily: GStyles.PoppinsSemiBold,
              fontSize: 16,
              color: '#3D3D3D',
             
              fontWeight: '500',
              letterSpacing: 0.5,
            }}
            placeholderTextColor="#3D3D3D"
            multiline
            placeholder="Rewords Name"
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
             
              fontWeight: '500',
              letterSpacing: 0.5,
              marginVertical: 15,
            }}>
            Add Points
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              //   justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            {[...Array(14)].map((e, i) => (
              <TouchableOpacity
                onPress={() => setRewordPoints(i)}
                key={i}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor:
                    rewordPoints === i ? GStyles.primaryOrange : '#C3C3C3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    rewordPoints === i ? GStyles.primaryOrange : 'white',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: GStyles.PoppinsSemiBold,
                    color: rewordPoints === i ? 'white' : '#3D3D3D',
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    // padding: 1,
                  }}>
                  {i + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
                    color: '#236999',
                   
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
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: GStyles.primaryBlue,
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

export default CreateRewords;

const styles = StyleSheet.create({});

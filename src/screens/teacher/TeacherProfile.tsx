import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';


import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';




import {imageUrl} from '../../redux/api/baseApi';
import { useContextApi } from '../../context/ContextApi';
import { useGetUserTeacherQuery } from '../../redux/apiSlices/authSlice';
import { FontSize } from '../../utils/utils';

const TeacherProfile = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi()
  const {data, error} = useGetUserTeacherQuery(user.token);

  // console.log(data);
 const imgUrl = data?.data.profile.startsWith("https") ? data?.data.profile : `${imageUrl}/${data?.data?.profile}`
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
      <View
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
            <Image
              source={{uri : imgUrl}}
              style={{
                height: 86,
                width: 86,

                borderRadius: 100,
              }}
              resizeMode="cover"
            />
            
            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
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
            <TouchableOpacity
              onPress={() => navigation?.navigate('EditTeacherProfile')}>
              <AntDesign
                name="edit"
                style={{
                     fontSize: FontSize(20),
                  color: '#3D3D3D',
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
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                color: '#3D3D3D',
              }}>
              Name :
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(14),
                color: GStyles.textColor['#929394'],
              }}>
              {data?.data?.name}
            </Text>
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
              Email :
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(14),
                color: GStyles.textColor['#929394'],
              }}>
              {data?.data?.email}
            </Text>
          </View>
          {
            data?.data?.contact && <View
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
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(14),
                color: GStyles.textColor['#929394'],
              }}>
              {data?.data?.contact}
            </Text>
          </View>
          }
         {
          data?.data?.location && <View
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
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(14),
              color: GStyles.textColor['#929394'],
            }}>
            {data?.data?.location}
          </Text>
        </View>
         }
          
        </View>
      </View>
    </View>
  );
};

export default TeacherProfile;

const styles = StyleSheet.create({});

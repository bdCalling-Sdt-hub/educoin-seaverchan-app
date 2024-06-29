import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import { ScrollView } from 'react-native';

const EditTeacherProfile = ({navigation}: NavigProps<null>) => {
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
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/e749/33af/2767d328dbea347076cc7dd98f4ed84b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMTubCUtivnjBMxJT2UqNVjarXUq4lrApvnRgjSp4vsJOlaOplm7uX5BWv5UJhJTXRP3iGB0e3hpOeEFd~Puw5RPCVUmtE8~yLiVrJBDf8N72C2eegKhCtt0y9H5en8o5U3TLgMjSJGQBWcGOGwK8rcJDSBmb6lYJTAg5ROjNREhUsFiiKYBTnwAq36t-lc3cN11pQ8NeGG5-RnzEWOnyNsvt1q3LKNQK5A80RP4yS6ODjiAiKYEexMkXgqbyiyBckasxGQJokP~C4RQaEBujaJ-RODc~VQ8WJCdn3lPxrB2iNwBE2Iw1ITl1KVO0Pxkyqrh~gBWgXQAkn3tbwH3bg__',
              }}
              style={{
                height: 86,
                width: 86,
                resizeMode: 'cover',
                borderRadius: 100,
              }}
            />
            <TouchableOpacity
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
                fontSize: 16,
                textAlign: 'center',
                color: '#3D3D3D',
              }}>
              Alan Marcus
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 16,
                textAlign: 'center',
                color: '#3D3D3D',
              }}>
              tranthuy.nute@gmail.com
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
                fontSize: 16,
                color: '#3D3D3D',
                marginVertical: 3,
              }}>
              Personal Information:
            </Text>
            {/* <TouchableOpacity>
              <AntDesign
                name="edit"
                style={{
                  fontSize: 20,
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
                fontSize: 16,
                color: '#3D3D3D',
              }}>
              Name :{' '}
            </Text>
            <TextInput
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }} placeholder='Alan Marcus' />
       
           
          </View>
          <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 16,
                color: '#3D3D3D',
              }}>
              Email :
            </Text>
            <TextInput
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }} placeholder='deanna.curtis@example.com' />
           
           
          </View>
          <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 16,
                color: '#3D3D3D',
              }}>
              Phone number :
            </Text>
            <TextInput
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }} placeholder='+1 145528 455265' />
           
          </View>
          <View
            style={{
              gap: 4,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 16,
                color: '#3D3D3D',
              }}>
              Address :
            </Text>
            <TextInput
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }} placeholder='Bushwack Brooklyn, NY, USA' />
             
          
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={{
            backgroundColor: GStyles.primaryPurple,
            padding: 10,
            borderRadius: 100,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf : "center",
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
  );
};

export default EditTeacherProfile;

const styles = StyleSheet.create({});

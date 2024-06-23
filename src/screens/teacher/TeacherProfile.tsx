import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

const TeacherProfile = ({navigation}: NavigProps) => {
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
            <View
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
            </View>
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
            <TouchableOpacity>
              <AntDesign
                name="edit"
                style={{
                  fontSize: 20,
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
                fontSize: 16,
                color: '#3D3D3D',
              }}>
              Name :{' '}
            </Text>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }}>
              Alan Marcus
            </Text>
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
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }}>
              deanna.curtis@example.com
            </Text>
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
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }}>
              +1 145528 455265
            </Text>
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
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
              }}>
              Bushwick Brooklyn, NY, USA
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeacherProfile;

const styles = StyleSheet.create({});

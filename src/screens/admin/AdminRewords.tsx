import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}

const AdminRewords = ({navigation}: AdminRoutesProps) => {
  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
      }}>
      <HeaderBackground navigation={navigation} title="Rewords" />

      {/* card container  */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 15,
        }}
        showsVerticalScrollIndicator={false}>
        {[...Array(10)].map((item, index) => (
          <Fragment key={index}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                marginVertical: 5,
                //   borderColor: 'gray',
                //   borderWidth: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                  padding: 14,
                }}>
                <Image
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEyxuNlq2BjRWUoh1ura~rwrvOx7IMDzwmvqHTfINpJsU5Bp5yFs9oxhzqsd164PqMovGyQre4Lmb5K-rpFHzgPt1d3SOydMj7tkxOhUm5~gWIT7nG1aFZaVMn3-UNl6AiUtnG8opY40XSgigPgWr6QDD3i3acdOrgpjjL7JgjgIaI1cwu3XKI3GoczUnMlKfjXS2ID0a0q1yCrkaNNwtmtMJtYGBKNCXrGbNTM9Dke6lPyVwYhAKeAJhhHuGy5cPr9pv5GAqpYwQmL9xXp85o7VR-~2m0K1F2MVQ-jF6A6TsB7TZTuD3qvbvnHUpLbI0YtMMwl~7DHFX6mGzaAt-w__',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }}
                />
                <View style={{gap: 5}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#3D3D3D',
                      fontFamily: GStyles.PoppinsSemiBold,
                      letterSpacing: 0.8,
                    }}>
                    Playing outside with dad
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 3,
                    }}>
                    <AntDesign name="staro" size={20} color="#C3C3C3" />
                    <Text
                      style={{
                        color: '#C3C3C3',
                        fontFamily: GStyles.Poppins,
                        fontSize: 18,
                        letterSpacing: 0.8,
                      }}>
                      100
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditRewords')}
                style={{
                  padding: 5,
                }}>
                <Feather name="edit" size={20} color="#3D3D3D" />
              </TouchableOpacity>
            </View>
          </Fragment>
        ))}
      </ScrollView>

      {/* create new rewards button  */}
      <View
        style={{
          paddingHorizontal: '4%',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 20,
          right: 0,
          width: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateRewords')}
          style={{
            backgroundColor: GStyles.primaryBlue,
            padding: 10,
            borderRadius: 100,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '50%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            <AntDesign name="plus" size={20} color="white" />
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Create rewords
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminRewords;

const styles = StyleSheet.create({});

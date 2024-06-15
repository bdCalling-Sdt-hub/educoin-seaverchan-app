import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderBackgroundProps {
  navigation: NavigationProp<ParamListBase>;
}

const CreateRewords = ({navigation}: HeaderBackgroundProps) => {
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
              lineHeight: 24,
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
              lineHeight: 24,
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
              <View
                key={i}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#C3C3C3',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: GStyles.PoppinsSemiBold,
                    color: '#3D3D3D',
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    // padding: 1,
                  }}>
                  {i + 1}
                </Text>
              </View>
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
              lineHeight: 24,
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Add Image
          </Text>
          <View
            style={{
              height: 250,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="images-outline" size={100} color="#C3C3C3" />
            <Text
              style={{
                fontSize: 12,
                fontFamily: GStyles.Poppins,
                color: '#236999',
                lineHeight: 24,
                fontWeight: '500',
              }}>
              Browse image{' '}
            </Text>
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
          onPress={() => navigation.navigate('CreateRewords')}
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

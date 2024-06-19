import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';
interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}
const FeedBackScreen = ({navigation}: AdminRoutesProps) => {
  return (
    <View>
      <HeaderBackground title="Feedback" navigation={navigation} />
      <View
        style={{
          paddingHorizontal: '4%',
          paddingVertical: '8%',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 14,
              color: '#555656',
              marginBottom: 10,
              lineHeight: 20,
            }}>
            Teacher Name
          </Text>
          <TextInput
            placeholder="type.."
            style={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              padding: 13,
              marginBottom: 10,
              borderRadius: 10,
              width: '100%',
              color: '#6E6E6F',
            }}
            value="khushi"
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 14,
              color: '#555656',
              marginBottom: 10,
              lineHeight: 20,
            }}>
            Child Name
          </Text>
          <TextInput
            placeholder="Child name"
            style={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              padding: 13,
              marginBottom: 10,
              borderRadius: 10,
              width: '100%',
              color: '#6E6E6F',
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 14,
              color: '#555656',
              marginBottom: 10,
              lineHeight: 20,
            }}>
            Description
          </Text>
          <TextInput
            placeholder="Ex. what is the feedback about us. "
            style={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              padding: 13,
              marginBottom: 10,
              borderRadius: 10,
              width: '100%',
              color: '#6E6E6F',
              height: 170,
            }}
            multiline={true}
            textAlign="left"
            textAlignVertical="top"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 18,
          justifyContent: 'flex-end',
          paddingHorizontal: '4%',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#349EE6',
            borderWidth: 1,
            padding: 15,
            borderRadius: 100,
            width: '30%',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: GStyles.primaryBlue,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#349EE6',
            padding: 15,
            borderRadius: 100,
            width: '30%',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedBackScreen;

const styles = StyleSheet.create({});

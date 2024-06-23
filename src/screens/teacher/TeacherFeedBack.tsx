import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import {GStyles} from '../../styles/GStyles';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {NavigProps} from '../../interfaces/NavigationPros';

const TeacherFeedback = ({navigation}: NavigProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Feedback"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
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
            Name
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
            borderColor: GStyles.primaryPurple,
            borderWidth: 2,
            padding: 15,
            borderRadius: 100,
            width: '30%',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: GStyles.primaryPurple,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: GStyles.primaryPurple,
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
      <CustomModal
        modalVisible={modalVisible}
        backButton
        setModalVisible={setModalVisible}
        height={'33%'}
        width={'85%'}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 10,
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
            Your Feedback Send Successfully
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

export default TeacherFeedback;

const styles = StyleSheet.create({});

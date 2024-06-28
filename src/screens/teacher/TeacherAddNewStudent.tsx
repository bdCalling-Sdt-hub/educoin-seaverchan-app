import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';

const TeacherAddNewStudent = ({navigation}: NavigProps<null>) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Add New Student"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
          gap: 24,
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Student name
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="Task Name"
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Date of birth
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="dd/mm/yy"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Create a passcode for Student
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="16435"
          />
        </View>
        <View
          style={{
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Graduation year
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
            }}
            placeholder="2024"
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                fontFamily: GStyles.Poppins,
                color: GStyles.textColor['#3D3D3D'],
              }}>
              Choose Avatar
            </Text>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                navigation?.navigate('StudentAllAvatar');
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.primaryPurple,
                }}>
                View all avatar
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...Array(10)]}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
            }}
            ListHeaderComponent={item => (
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 100,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: GStyles.borderColor['#ECECEC'],
                  borderWidth: 1,
                }}>
                <AntDesign
                  name="plus"
                  size={24}
                  color={GStyles.textColor['#3D3D3D']}
                />
              </TouchableOpacity>
            )}
            renderItem={item => (
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 100,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: GStyles.primaryPurple,
                  borderWidth: 1,
                }}>
                <Image
                  style={{
                    width: 87,
                    height: 87,
                    borderRadius: 100,
                  }}
                  source={{
                    uri: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?t=st=1719114915~exp=1719118515~hmac=b0042447940766e77ea1a9af3f624920c9fa8c13da6a64b23180f75605c7ef17&w=740',
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
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
            setModalVisible(true);
            // navigation.goBack()
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
      <CustomModal
        modalVisible={modalVisible}
        backButton
        setModalVisible={setModalVisible}
        height={'30%'}
        width={'85%'}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
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
            Student Added Successfully
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

export default TeacherAddNewStudent;

const styles = StyleSheet.create({});

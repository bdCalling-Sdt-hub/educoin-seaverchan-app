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
import {GStyles} from '../../styles/GStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigProps} from '../../interfaces/NavigationPros';
import {FlatList} from 'react-native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import { categoryIcons } from '../../utils/ShearData';

const TeacherCreateRewords = ({navigation, route}: NavigProps<null>) => {
  const [rewordName, setRewordName] = React.useState('');
  const [rewordDescription, setRewordDescription] = React.useState('');
  const [rewordPoints, setRewordPoints] = React.useState<number>();
  const [rewordCategory, setRewordCategory] = React.useState('');
  const [isGood, setIsGood] = React.useState<boolean>();
  const [customCategory, setCustomCategory] = React.useState<number>();

  const [modalVisible, setModalVisible] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(false);

    
  
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Create Rewards"
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
            placeholderTextColor="gray"
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
           <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
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
              Points
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryOrange} />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
            }}
            data={[...Array(8)]}
            ListHeaderComponent={() => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#C3C3C3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}>
                <AntDesign name="plus" size={20} color={'gray'} />
              </TouchableOpacity>
            )}
            renderItem={item => (
              <Fragment key={item.index}>
                <TouchableOpacity
                  onPress={() => setRewordPoints(item.index)}
                  key={item.index}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:
                      rewordPoints === item.index
                        ? GStyles.primaryOrange
                        : '#C3C3C3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:
                      rewordPoints === item.index
                        ? GStyles.primaryOrange
                        : 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: rewordPoints === item.index ? 'white' : '#3D3D3D',
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
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',
                fontWeight: '500',
                letterSpacing: 0.5,
                marginVertical: 20,
              }}>
              Choose category
            </Text>
            {/* <View
              style={{
                flexDirection: 'row',
                gap: 20,
                marginRight: 10,
              }}>
              <TouchableOpacity
                onPress={() => setIsGood(true)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 100,
                    borderColor: GStyles.primaryBlue,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {isGood && (
                    <View
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: 100,
                        backgroundColor: GStyles.primaryBlue,
                      }}></View>
                  )}
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#C3C3C3',
                  }}>
                  Good
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsGood(false)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 100,
                    borderColor: GStyles.primaryBlue,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {isGood || (
                    <View
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: 100,
                        backgroundColor: GStyles.primaryBlue,
                      }}></View>
                  )}
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#C3C3C3',
                  }}>
                  Bad
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 24,
            }}
            data={categoryIcons}
            keyExtractor={(item)=>item.id + item.title}
            renderItem={item => (
              <TouchableOpacity
                key={item.index}
                onPress={() => setCustomCategory(item.item.id)}
                >
                <View
                  style={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 100,
                      borderColor:
                      customCategory === item.item.id
                        ? GStyles.primaryPurple
                        : GStyles.gray.light,
                      borderWidth: 2,
                      padding: 2,
                      justifyContent : "center",
                      alignItems : 'center',
                      elevation : 2

                    }}>
                    <Image
                      source={ item.item.img}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: GStyles.Poppins,
                      color:
                        item.item.id === customCategory
                          ? GStyles.primaryPurple
                          : '#3D3D3D',
                      paddingVertical: 5,
                    }}>
                    {item.item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
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
            // navigation?.goBack()
            setSuccessModal(true)
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
        height={250}
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
            }}>
            Please Enter The Custom Points
          </Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 16,
            }}
            placeholder="number"
            keyboardType="decimal-pad"
          />

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
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <CustomModal
        modalVisible={successModal}
        backButton
        setModalVisible={setSuccessModal}
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
            Reword Added Successfully
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
              onPress={() => setSuccessModal(false)}
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

export default TeacherCreateRewords;

const styles = StyleSheet.create({});

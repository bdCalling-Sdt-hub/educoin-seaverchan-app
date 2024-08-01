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
import { categoryIcons, ShearIcons, SherAvatar } from '../../utils/ShearData';
import { Slider } from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';

const TeacherCreateRewords = ({navigation, route}: NavigProps<null>) => {
  const [rewordName, setRewordName] = React.useState('');
  const [rewordDescription, setRewordDescription] = React.useState('');
  const [rewordPoints, setRewordPoints] = React.useState<number>(50);
  const [rewordCategory, setRewordCategory] = React.useState('');
  const [isGood, setIsGood] = React.useState<boolean>();
  const [customCategory, setCustomCategory] = React.useState<number>();

  const [modalVisible, setModalVisible] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(false);

  const [assignUser, setAssignUser] = React.useState([]);
  const progress = useSharedValue(rewordPoints);
  const min = useSharedValue(0);
  const max = useSharedValue(200);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Create Reward"
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
           <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',
               
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
              Reword Name
            </Text>
          </View>
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
            placeholder=" Name"
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
              justifyContent: 'space-between',
            }}>
           <View style={{
            flexDirection : "row",
            alignItems : "center",
            gap : 5,
            justifyContent : "center"
           }}>
            <View
            style={{
            
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',
               
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
             Points
            </Text>
          </View>
            <AntDesign name="star" size={15} color={GStyles.primaryOrange} />
           </View>
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                //  alignItems : "center"
              }}>
              <Text
                style={{
                  fontFamily: GStyles.PoppinsMedium,
                  backgroundColor: GStyles.primaryPurple,
                  fontSize: 12,
                  padding: 5,
                  borderRadius: 4,
                  color: 'white',
                  width: 45,
                  textAlign: 'center',
                }}>
                +{parseInt(rewordPoints)}
              </Text>
            </View>
          </View>
          <Slider
      theme={{
        disableMinTrackTintColor:  GStyles.primaryOrange,
        // maximumTrackTintColor:  GStyles.primaryOrange,
        minimumTrackTintColor: GStyles.primaryOrange,
        cacheTrackTintColor:  GStyles.primaryOrange,
        bubbleBackgroundColor:  GStyles.primaryOrange,
        heartbeatColor:  GStyles.primaryOrange,
      }}
      progress={progress}
      minimumValue={min}
      maximumValue={max}

      onSlidingComplete={(value: number) =>{
        setRewordPoints(value);
      }}
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
           <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}>
            <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: GStyles.primaryOrange,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: GStyles.primaryOrange,
              }}
            />

            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsSemiBold,
                color: '#3D3D3D',
            
                fontWeight: '500',
                letterSpacing: 0.5,
              }}>
             Choose ategory
            </Text>
          </View>
          
          </View>
          
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 24,
            }}
            data={ShearIcons}
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
                      borderRadius: 15,
                      borderColor:
                        customCategory === item.item.id
                          ? GStyles.primaryPurple
                          : GStyles.gray.light,
                      borderWidth: 2,
                      padding: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      elevation: 2,
                    }}>
                    <Image
                      source={item.item.img}
                      style={{
                        width: 65,
                        height: 65,
                        borderRadius: 8,
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

          <View style={{
            flexDirection : "row",
            alignItems : "center",
            justifyContent: "center",
            gap : 20
          }}>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("TeacherTaskAssign")
                setSuccessModal(false)
              }}
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
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate("TeacherTaskAssign")
                setSuccessModal(false)
              }}
              style={{
                backgroundColor: GStyles.primaryPurple,
                width: '50%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
                flexDirection : "row",
                justifyContent: "center",
                alignItems : "center",
                gap : 10
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Assign to
              </Text>
              <AntDesign name='arrowright' size={15} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default TeacherCreateRewords;

const styles = StyleSheet.create({});

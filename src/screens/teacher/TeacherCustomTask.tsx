import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FlatList} from 'react-native';

interface HeaderBackgroundProps {
  navigation: NavigationProp<ParamListBase>;
}

const categories = [
  {
    title: 'Education',
    img: 'https://s3-alpha-sig.figma.com/img/4777/e823/f2073e01b6413fb39cbb25157f8234bb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKpyveKfIOK1nBuKnCAZqVvdhB7h0k-QjCj~u1xHAmwmroqyzZdyXWAFc935ohZN1LXuDjIbmgRMtHn5EYYAr~W4tmWpGE-MRIULrIlE-neTBkH8tEmRtHWSR~RD2u-PQ68izM3pYJ2zGVD~05EcuGJvNv8HYuFBtj1ncDjjcZL6ZRXNYNF8LK4AraXipm8rPsjUd5WE52e5fo4Hx2OmJRwuaEJzqtrpZnw0hiqVUdk6e1sheYYPumUkG5umsvGOztOJjvQatYYjZP1xEDuTnZYwEDh5sZUOJs~clRmIz~c0huYCLajvR3-A3c9LkRLRto01LtnCuCUic7xb12Zsog__',
  },
  {
    title: 'Home Errands',
    img: 'https://s3-alpha-sig.figma.com/img/a65f/9958/64bddfadea534455e97f5abcaa27e6f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aXbeeFYQgRdEtjZlTWWaqQfh2BZcrEWj7KLb5-ko9MDhA2m1iLwIBFWtbrOpS6mVn2zBu07yEX9civ3jfWuMlZHgFkjRmdnq5tmhVsx-eXhX2RijYWJjnxE1xEYpLJBvhUY3I-Eqm1NkyB30KfMgjm1A61WOYPiPzoYHIgqJ16gFdSQ1onYpeYJtD2I0bfb7JGpabLj2nFB0xSEmRIF776KopQ2yiawn0IWf52DRy8oIs79jSh47D-J46UfZ8Rq-wm6UywV7UjB7t2DzWGyz5AhR2dEfHdWEqlMHaWU3oj~clleNF3Xyfurvf-e1rd3z8EMuEjMV-E~3El0nhoO-Eg__',
  },
  {
    title: 'Hygiene',
    img: 'https://s3-alpha-sig.figma.com/img/7ea3/7b0a/140c497d8570975110f2963ecc61b456?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lVfzCOTa-T4fdXGRAG6KbLm3bDpaFxQd~DZMEPehOHcOrFD0QobUcDheetOQ~6HuCzQXrAfGuAQjyHG9eEBBMwwuCTsYMN7Gv2UchStdRBfDKogJlpCNC~wxA6Ti75QkqMCdp816bfsHvVSH1JHW5P9~UJTwL7SO1fTGJzYLDMPtPb7fhUKr08ED73mz~u4iJeCsbB2LPKKn14DQeWBfgUQ-UhGzV9xFP1vxYA3f0CuD9Xnc3DeXXXzLlT3AnWZhWNiuJ6xKkMUUh1BCMfYvIyM1lZkGSKYsSogn7W8dG55Z7QSEoGy-Tpjib8KtzB5i1f5yL5bRGroegdE1bJbNeQ__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/2287/705c/bb5aead5ce8bec646bb53978c888e082?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMSMynlhD6qlTPSXPolY-ansNNseL11HmsEzAMqizPi3mSPMOVVTqTPG~QNmeqiWKSCdjBWTUKu5IOa6Xi4IJEAuJ51p2ouSakPWgRZT751gungb-LqmfQoIgfSDhfvEzcYjVYSfBwFE9GCfFxAgcuItef5ZVzNc-ziVu6OuoGX3cCDuJgnHpDhJAsB0lI-Qicjnwabw-esD-N~q4QIIw4bTi8pWEmZ5BhFJavpVrPKfXQDobNPPnS80JsZibu0W~v32HTvsk32BWIMpLOfay1hxh~kteALag5gp5LOhnLRRRqN9pIL837fp1ZO~L1FsdE7o2xRUho0TC1Zuev-E3w__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/2287/705c/bb5aead5ce8bec646bb53978c888e082?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMSMynlhD6qlTPSXPolY-ansNNseL11HmsEzAMqizPi3mSPMOVVTqTPG~QNmeqiWKSCdjBWTUKu5IOa6Xi4IJEAuJ51p2ouSakPWgRZT751gungb-LqmfQoIgfSDhfvEzcYjVYSfBwFE9GCfFxAgcuItef5ZVzNc-ziVu6OuoGX3cCDuJgnHpDhJAsB0lI-Qicjnwabw-esD-N~q4QIIw4bTi8pWEmZ5BhFJavpVrPKfXQDobNPPnS80JsZibu0W~v32HTvsk32BWIMpLOfay1hxh~kteALag5gp5LOhnLRRRqN9pIL837fp1ZO~L1FsdE7o2xRUho0TC1Zuev-E3w__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/2287/705c/bb5aead5ce8bec646bb53978c888e082?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMSMynlhD6qlTPSXPolY-ansNNseL11HmsEzAMqizPi3mSPMOVVTqTPG~QNmeqiWKSCdjBWTUKu5IOa6Xi4IJEAuJ51p2ouSakPWgRZT751gungb-LqmfQoIgfSDhfvEzcYjVYSfBwFE9GCfFxAgcuItef5ZVzNc-ziVu6OuoGX3cCDuJgnHpDhJAsB0lI-Qicjnwabw-esD-N~q4QIIw4bTi8pWEmZ5BhFJavpVrPKfXQDobNPPnS80JsZibu0W~v32HTvsk32BWIMpLOfay1hxh~kteALag5gp5LOhnLRRRqN9pIL837fp1ZO~L1FsdE7o2xRUho0TC1Zuev-E3w__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/2287/705c/bb5aead5ce8bec646bb53978c888e082?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMSMynlhD6qlTPSXPolY-ansNNseL11HmsEzAMqizPi3mSPMOVVTqTPG~QNmeqiWKSCdjBWTUKu5IOa6Xi4IJEAuJ51p2ouSakPWgRZT751gungb-LqmfQoIgfSDhfvEzcYjVYSfBwFE9GCfFxAgcuItef5ZVzNc-ziVu6OuoGX3cCDuJgnHpDhJAsB0lI-Qicjnwabw-esD-N~q4QIIw4bTi8pWEmZ5BhFJavpVrPKfXQDobNPPnS80JsZibu0W~v32HTvsk32BWIMpLOfay1hxh~kteALag5gp5LOhnLRRRqN9pIL837fp1ZO~L1FsdE7o2xRUho0TC1Zuev-E3w__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/2287/705c/bb5aead5ce8bec646bb53978c888e082?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMSMynlhD6qlTPSXPolY-ansNNseL11HmsEzAMqizPi3mSPMOVVTqTPG~QNmeqiWKSCdjBWTUKu5IOa6Xi4IJEAuJ51p2ouSakPWgRZT751gungb-LqmfQoIgfSDhfvEzcYjVYSfBwFE9GCfFxAgcuItef5ZVzNc-ziVu6OuoGX3cCDuJgnHpDhJAsB0lI-Qicjnwabw-esD-N~q4QIIw4bTi8pWEmZ5BhFJavpVrPKfXQDobNPPnS80JsZibu0W~v32HTvsk32BWIMpLOfay1hxh~kteALag5gp5LOhnLRRRqN9pIL837fp1ZO~L1FsdE7o2xRUho0TC1Zuev-E3w__',
  },
];

import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomModal from '../../components/common/CustomModal/CustomModal';

const TeacherCustomTask = ({navigation}: HeaderBackgroundProps) => {
  const [customName, setCustomName] = React.useState('');
  const [customDescription, setCustomDescription] = React.useState('');
  const [customPoints, setCustomPoints] = React.useState<number>();
  const [customCategory, setCustomCategory] = React.useState('');
  const [customImage, setCustomImage] = React.useState<string | undefined>();

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [isGood, setIsGood] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: GStyles.white,
      }}>
      <HeaderBackground
        title="New Task"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Task Name
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
            onChangeText={text => setCustomName(text)}
            placeholderTextColor="gray"
            multiline
            placeholder="Rewords Name"
            value={customName}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
            paddingVertical: '5%',
            marginTop: -10,
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
            Points
          </Text>
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
                  onPress={() => setCustomPoints(item.index)}
                  key={item.index}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor:
                      customPoints === item.index
                        ? GStyles.primaryOrange
                        : '#C3C3C3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:
                      customPoints === item.index
                        ? GStyles.primaryOrange
                        : 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: customPoints === item.index ? 'white' : '#3D3D3D',
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
              Choose Category
            </Text>
            <View
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
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 24,
            }}
            data={categories}
            renderItem={item => (
              <TouchableOpacity
                key={item.index}
                onPress={() => setCustomCategory(item.item.title)}>
                <View
                  style={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      borderRadius: 100,
                      backgroundColor: GStyles.blue.light,
                      padding: 2,
                    }}>
                    <Image
                      source={{
                        uri: item.item.img,
                      }}
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
                        item.item.title === customCategory
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
        <View
          style={{
            paddingHorizontal: '4%',
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
            Date
          </Text>
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              width: '100%',
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
                color: '#3D3D3D',
              }}>
              Repeat everyday
            </Text>
            <Feather
              name="calendar"
              size={24}
              style={{
                fontWeight: '900',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: '4%',
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
            Hours
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              width: '100%',
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 14,
                color: '#3D3D3D',
              }}>
              Anytime
            </Text>
          </View>
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
          onPress={() => navigation.navigate('TeacherTaskAssign')}
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
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

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
    </View>
  );
};

export default TeacherCustomTask;

const styles = StyleSheet.create({});

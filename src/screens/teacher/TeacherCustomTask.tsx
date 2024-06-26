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
    title: 'Home Work',
    img: 'https://s3-alpha-sig.figma.com/img/b4b7/69da/3f48ccb089f02a63c21231f6c0aea8ab?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oXO6kM4EWeIxKwPgh2Dh7WJLaIE6BRnvK-fMUddz9x-xHBqaHYjERe0V4rwcQscl1Z8aOmeam~v0eJCStEUD~0cHT6sMOOdLFjzcrgfofE5vMx-6TaSlbVw6d-QSHWd~W8lSTWOO3t8Qz6bHtVXf3ZfZN8GgfCVAU8dAqRQ3Vs6Svv8LEzwrOovmGaoUlo5TyFyvPGk90SzSclrs8CmjQ56kISB8uHiaBnMsPV~Pw8yx00lX-7o10Bfgi-XNv8xsoFP6AYbnopsJ0NgQ1waMy-1ejFPurEE95wXGHonGPTqI~mhGrlhzUno9bs3nM-iw5fWhn6KA5xkawWVR~zENvQ__',
  },
  {
    title: 'Participant',
    img: 'https://s3-alpha-sig.figma.com/img/4ffd/f831/b77dbe53f7212ceaffb5cd3f04bcaba9?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbG-K-AjUjRNQo8Ud84xsIVhEKB08oeLB8h00nFu0t94XKFz7tkL2sfiXWMQyeQqivpisqY2uT~aO060oOlezMyaHcGjEe2HA8cV2VZz3ssmxMGRHY64ptw2tF-nmbDvaauThWSRe9~0gZNXlEgeMNTF88YtNq2gAoFnInDPpe7CEjNeUfIZEy~RGMK30iGUw05NXy8NbNixeBq5hx72vOsW3bIR-VQ14H-o4VQu0k1nG5sxBFov~X11~Yo0yXzYEAva26DP3XxyG8LNRCwzJV7Nvbps3NEf75fNZL5hkGAjz9sJNM2GOFMyU688dN7XxGSyJWygD3VQu4MOBeTrrg__',
  },
  {
    title: 'Test',
    img: 'https://s3-alpha-sig.figma.com/img/2fae/085f/d303147e3c3431163db769f78d221f8a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBuBJO~nvEwAaMzOkmXAN1LSr6ZOrQy~oqf4yqxYbZT53hPbZVuhUo8ZhCqBIdPsgX24tgotPztAPZdHH4t4bqtRZIILqw-wCwjMMBBdFn4O2pqZFtEESccWdKBXAZDRoUCGbnKlDAOtuxsPNeBM0RcIQ0CEsk0mmhpF2X-d8kqiUv~OCBCrbu4YAUt5tNN9dfK1RxbOHtjt0YslsFv2IQNzZXGa8MB2Q6qNd1SIplTSGyKeYizZDZdJOd~9oScS7fSjWULBolLRLd6bNaUKZdlWrW5SkdGG4kZ5xFXgm88GgLYyjzYZMN5AXGdujkn1UtLnQ1BHWy1yG3IU~JAkpw__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/66a7/f47c/39de512a12b14f3b6836acbb9bfcd244?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMBUa3XXhDnv551AFnmfkws76dggk7T5RtGYFVXveSO7SVhIDjGFAxDllfvL25gf0wOqFU2OlS2E~Pkuk2rjxzoe4HfDu5fhs2QoIopXzUw2SWBaV3X-jkJkA3EUnDPWMC0-MmdHisnASdxqUiWt2dmX0Um1j1x~mM96D5RbDV8eqiuumxxcViwF79hKXmnp2y9oJWkXKa6uv4X5~MInqnu6ctbUrg3WtOfut9FxppajQHtrUiVSSbu~iuIXGkjcii1SD6eT-MOXhfGBNYdQfZTFIg0We6ldzP2ALpaA1sM8t83~31M0vpOqh9kISFCJENig2KJI9LXe9OaDgigsyQ__',
  },
  {
    title: 'Behaviour',
    img: 'https://s3-alpha-sig.figma.com/img/2287/705c/bb5aead5ce8bec646bb53978c888e082?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMSMynlhD6qlTPSXPolY-ansNNseL11HmsEzAMqizPi3mSPMOVVTqTPG~QNmeqiWKSCdjBWTUKu5IOa6Xi4IJEAuJ51p2ouSakPWgRZT751gungb-LqmfQoIgfSDhfvEzcYjVYSfBwFE9GCfFxAgcuItef5ZVzNc-ziVu6OuoGX3cCDuJgnHpDhJAsB0lI-Qicjnwabw-esD-N~q4QIIw4bTi8pWEmZ5BhFJavpVrPKfXQDobNPPnS80JsZibu0W~v32HTvsk32BWIMpLOfay1hxh~kteALag5gp5LOhnLRRRqN9pIL837fp1ZO~L1FsdE7o2xRUho0TC1Zuev-E3w__',
  },
];

import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import {Dropdown} from 'react-native-element-dropdown';

const TeacherCustomTask = ({navigation}: HeaderBackgroundProps) => {
  const [value, setValue] = React.useState<string>();
  const [isFocus, setIsFocus] = React.useState(false);
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
          <Dropdown
            style={{
              // flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              width: '100%',
              gap: 20,
            }}
            iconStyle={{
              marginHorizontal: 10,
            }}
            labelField="label"
            valueField="value"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item?.value);
              setIsFocus(false);
            }}
            placeholder="Repeat everyday"
            data={[
              {label: 'Repeat every day', value: '1'},
              {label: 'Repeat every weak', value: '2'},
              {label: 'Repeat every month', value: '2'},
            ]}
            renderLeftIcon={() => (
              <Feather
                name="calendar"
                size={24}
                style={{
                  fontWeight: '900',
                  marginRight: 10,
                }}
              />
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
            Hours
          </Text>
          <Dropdown
            style={{
              // flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              width: '100%',
              gap: 20,
            }}
            iconStyle={{
              marginHorizontal: 10,
            }}
            labelField="label"
            valueField="value"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item?.value);
              setIsFocus(false);
            }}
            placeholder="Any Time"
            data={[{label: 'Any Time', value: '1'}]}
            renderLeftIcon={() => (
              <Ionicons
                name="time-outline"
                size={24}
                style={{
                  fontWeight: '900',
                  marginRight: 10,
                }}
              />
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

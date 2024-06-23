import {
  FlatList,
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
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

const TeacherAddCategory = ({navigation}: NavigProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isGood, setIsGood] = React.useState(true);
  const [rewordImage, setRewordImage] = React.useState<string | undefined>('');

  const [customCategory, setCustomCategory] = React.useState('Hygiene');

  const handleImagePick = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.5,
        includeBase64: true,
      });

      if (!result.didCancel) {
        setRewordImage(result?.assets![0].uri);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Add New Category"
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
            Category Name
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
            placeholder="Class name"
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
            Category Types
          </Text>

          <TouchableOpacity
            onPress={() => setIsGood(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginVertical: 18,
            }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 100,
                borderColor: GStyles.primaryBlue,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {isGood && (
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 100,
                    backgroundColor: GStyles.primaryBlue,
                  }}></View>
              )}
            </View>
            <Text
              style={{
                fontSize: 18,
                color: '#C3C3C3',
              }}>
              Good
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsGood(false)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 100,
                borderColor: GStyles.primaryBlue,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {isGood || (
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 100,
                    backgroundColor: GStyles.primaryBlue,
                  }}></View>
              )}
            </View>
            <Text
              style={{
                fontSize: 18,
                color: '#C3C3C3',
              }}>
              Bad
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: GStyles.Poppins,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            Add Image
          </Text>
          <TouchableOpacity
            onPress={() => handleImagePick()}
            style={{
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: GStyles.gray.light,
              borderRadius: 8,
              marginVertical: 20,
            }}>
            {rewordImage ? (
              <Image
                source={{uri: rewordImage}}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#E2E2E2',
                }}
              />
            ) : (
              <>
                <Ionicons name="image-outline" size={90} color="#C3C3C3" />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.primaryPurple,
                    lineHeight: 24,
                    fontWeight: '500',
                  }}>
                  Browse your image{' '}
                </Text>
              </>
            )}
          </TouchableOpacity>
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
            Choose Image
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 24,
            }}
            data={categories}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => {
                  // setCustomCategory(item.item.title);
                }}
                key={item.index}>
                <View
                  style={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 15,
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
                </View>
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
            Category Added Successfully
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

export default TeacherAddCategory;

const styles = StyleSheet.create({});

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';

const AllStudentsScreen = ({navigation}: NavigProps<null>) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Progress"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />

      <FlatList
        data={[...Array(20)]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          paddingBottom: 20,
        }}
        ListHeaderComponentStyle={{
          alignSelf: 'flex-start',
        }}
        ListHeaderComponent={() => (
          <View
            style={{
              paddingHorizontal: '4%',
              // borderWidth: 1,
              // borderColor: '#ECECEC',
              borderRadius: 8,
              marginTop: 24,
              marginBottom: 18,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsMedium,
                color: GStyles.textColor['#3D3D3D'],

                fontWeight: '500',
              }}>
              Class Member
            </Text>
          </View>
        )}
        renderItem={item => (
          <Fragment key={item.index}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation?.navigate('StudentPublicProfile')}
                style={{
                  width: 156,
                  height: 168,
                  borderRadius: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  padding: 24,
                  position: 'relative',
                  //   backgroundColor: GStyles.primaryBlue,
                  borderWidth: 1,
                  borderColor: '#ECECEC',
                }}>
                <View
                  style={{
                    width: 61,
                    height: 61,
                    borderWidth: 1,
                    borderColor: GStyles.primaryBlue,
                    padding: 3,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#3D3D3D',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: GStyles.PoppinsSemiBold,
                    lineHeight: 24,
                    letterSpacing: 0.8,
                  }}>
                  Aadi T
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#797979',
                      fontFamily: GStyles.Poppins,
                      lineHeight: 18,
                      fontWeight: '400',
                      letterSpacing: 0.8,
                    }}>
                    Reword:
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#797979',
                      fontFamily: GStyles.Poppins,
                      lineHeight: 18,
                      fontWeight: '400',
                      letterSpacing: 0.8,
                    }}>
                    4.5
                  </Text>
                  <AntDesign name="star" color={GStyles.primaryYellow} />
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: 10,
                  }}>
                  {/* <FontAwesome name="tasks" color="#686868" size={18} />
                   */}
                  <Image
                    source={require('../../assets/icons/taskIcon.png')}
                    style={{
                      width: 18,
                      height: 18,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      />
    </View>
  );
};

export default AllStudentsScreen;

const styles = StyleSheet.create({});

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderOption from '../../components/common/header/HeaderOption';
import StudentMiniCard from '../../components/common/Cards/StudentMiniCard';

const TeacherForStProgress = ({navigation}: NavigProps) => {
  const [isOp, setIsOp] = React.useState('Profile');

  const [select, setSelect] = React.useState<number | null>(null);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Progress"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <View
        style={{
          borderColor: GStyles.borderColor['#ECECEC'],
          borderWidth: 3,
          padding: 15,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginHorizontal: '4%',
          marginTop: 15,
          gap: 10,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            borderColor: GStyles.primaryOrange,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
            }}
          />
        </View>
        <View
          style={{
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              color: GStyles.textColor['#3D3D3D'],
              fontWeight: '600',
              letterSpacing: 0.5,
            }}>
            Aadi T
          </Text>

          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontWeight: '400',
              letterSpacing: 0.5,
            }}>
            Class : 01
          </Text>
          <Text
            style={{
              fontFamily: GStyles.PoppinsSemiBold,
              fontSize: 20,
              color: GStyles.primaryOrange,
              fontWeight: '500',
              letterSpacing: 0.5,
            }}>
            Level 1
          </Text>

          <View
            style={{
              flexDirection: 'row',

              gap: 5,
            }}>
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: 12,
                color: '#797979',
                fontWeight: '400',
                letterSpacing: 0.5,
              }}>
              45{' '}
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: '8%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFF3E7',
            height: 65,
            borderRadius: 8,
          }}>
          <View
            style={{
              backgroundColor: GStyles.primaryOrange,
              height: 65,
              width: '40%',
              borderRadius: 8,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 17,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level 1
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: GStyles.Poppins,
                fontWeight: '400',
                letterSpacing: 0.8,
              }}>
              45\200
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level 2
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: '20%',
          marginBottom: 20,
          paddingHorizontal: '4%',

          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: GStyles.textColor['#3D3D3D'],
            fontFamily: GStyles.PoppinsMedium,
            fontWeight: '500',
            letterSpacing: 0.5,
            textAlign: 'center',
          }}>
          Class : 1
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
            gap: 15,
            paddingVertical: 10,
          }}
          data={[...Array(10)]}
          renderItem={item => (
            <StudentMiniCard
              borderColor={
                select === item.index
                  ? GStyles.primaryOrange
                  : GStyles.borderColor['#ECECEC']
              }
              onPress={() => {
                setSelect(item.index);
              }}
              key={item.index}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TeacherForStProgress;

const styles = StyleSheet.create({});

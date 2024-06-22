import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GStyles} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import SmallSubHeaderCard from '../../components/common/Cards/SmallSubHeaderCard';
import StudentCard from '../../components/common/Cards/StudentCard';
import HeaderOption from '../../components/common/header/HeaderOption';

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const TeacherHomeScreen = ({navigation}: AdminHOmeProps) => {
  const [op, setOp] = React.useState<string>('All Students');
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: GStyles.white,
        position: 'relative',
      }}>
      {/* header part  start */}
      <View
        style={{
          height: 170,
          backgroundColor: GStyles.primaryPurple,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          position: 'relative',
          paddingHorizontal: '4%',
          gap: 26,
          paddingVertical: 17,
        }}>
        <View
          style={{
            position: 'absolute',
            top: -50,
            left: -20,
            width: 153,
            height: 153,
            borderColor: GStyles.purple.normalActive,
            borderWidth: 15,
            borderRadius: 100,
            opacity: 0.02,
          }}></View>
        <View
          style={{
            position: 'absolute',
            top: -142,
            right: -10,
            width: 216,
            height: 216,
            borderColor: GStyles.purple.normalActive,
            borderWidth: 24,
            borderRadius: 100,
            opacity: 0.02,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Image
              style={{
                height: 46,
                width: 46,
                borderRadius: 100,
                //   alignSelf: 'center',
              }}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/5d7c/a921/417b9cf730eccf53d85b6166da178018?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WH537GxBxSCyr84yo5Umsi7zGYowKN8w1HSsgZyIgeKZAJkL-NF1vDeywWaV6zkVHyXSlYbOkyTsAxHgjHL18v2cOMVpyNLo1EdYt7T4D3Cmw516taRTKOXBMmWulBCFos~E7~c0cRHLC4O2obTqWjDySrmrTMSkqrN6mZcVgVQbVgeDIMHpsGXUQoa343ddL1IMzQ01LVg6QTin8-U8PSLrKgEnRPNpiUTYd3zyXbmJzTS1jpcyrT2pAEXxPvZ1x9Ip49q~-pWHRJB-so6CBYY3xuQkmPaesrthpDWu2E0xZPrMBQWoISQwO6xuVg~dDHBVBvtYIdqzEnp60Lk0yg__',
              }}
            />
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '800',
                  fontFamily: GStyles.Poppins,
                  lineHeight: 22,
                  letterSpacing: 1.4,
                }}>
                Welcome back
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: GStyles.Poppins,
                  fontWeight: '800',
                  letterSpacing: 0.8,
                  lineHeight: 27,
                }}>
                Maria
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 28,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TeacherNotification')}>
              <View
                style={{
                  position: 'relative',
                }}>
                <Feather name="bell" color="white" size={24} />
                <View
                  style={{
                    width: 10,
                    height: 10,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: '#B0000B',
                    borderRadius: 100,
                    opacity: 0.8,
                    zIndex: 999,
                  }}></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation?.openDrawer()}>
              <Feather name="menu" color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: 48,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              borderRadius: 100,
            }}>
            <TextInput
              placeholder="Search here...."
              placeholderTextColor="#858585"
            />
            <Feather name="search" color="#858585" size={24} />
          </View>
        </View>
      </View>
      {/* header part  end */}

      <SmallSubHeaderCard
        marginTop={10}
        title="Teacher Name"
        count={20}
        subTitle="Students Counts"
      />

      <FlatList
        data={[...Array(20)]}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{
          gap: 10,
          alignSelf: 'center',
        }}
        ListHeaderComponentStyle={{
          width: '100%',
        }}
        ListHeaderComponent={item => (
          <HeaderOption
            op1="All Students"
            op2="All Classes"
            initialOp="All Students"
            setIsOp={setOp}
            isOp={op}
            borderColor="white"
            borderWidth={0}
            activeBorderColor={GStyles.primaryPurple}
          />
        )}
        renderItem={item => (
          <StudentCard
            imgBorderColor={GStyles.primaryPurple}
            width={'45%'}
            student={{
              image:
                'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
              class: 1,
              level: 9,
              name: 'John Doe',
              points: 100,
            }}
            onPress={() => {
              // console.log('lol');
              navigation.navigate('StudentsProgressAndInfo');
            }}
            key={item.index}
          />
        )}
      />
      <TouchableOpacity
        style={{
          width: 68,
          height: 68,
          backgroundColor: GStyles.primaryPurple,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 30,
          zIndex: 9999,
        }}>
        <AntDesign name="plus" color={'white'} size={24} />
      </TouchableOpacity>

      <StatusBar
        backgroundColor={GStyles.primaryPurple}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
    </View>
  );
};

export default TeacherHomeScreen;

const styles = StyleSheet.create({});
